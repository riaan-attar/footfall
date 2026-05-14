import { useEffect, useRef, useState, useCallback } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

const CLIENTS = [
  { lat: 25.2048,  lng:  55.2708, label: 'Dubai' },
  { lat: 28.6139,  lng:  77.2090, label: 'Delhi' },
  { lat: 24.8607,  lng:  67.0011, label: 'Karachi' },
  { lat: 31.5204,  lng:  74.3587, label: 'Lahore' },
  { lat: 51.5074,  lng:  -0.1278, label: 'London' },
  { lat: 40.7128,  lng: -74.0060, label: 'New York' },
  { lat:  1.3521,  lng: 103.8198, label: 'Singapore' },
  { lat: 48.8566,  lng:   2.3522, label: 'Paris' },
  { lat: 35.6762,  lng: 139.6503, label: 'Tokyo' },
  { lat: -33.8688, lng: 151.2093, label: 'Sydney' },
];

export default function GlobeViewer({ size = 520 }) {
  const [geoJson, setGeoJson]     = useState(null);
  const [rotation, setRotation]   = useState(0);
  const [pulseT, setPulseT]       = useState(0);
  const rafRef                    = useRef(null);
  const lastTimeRef               = useRef(null);
  const isDragging                = useRef(false);
  const dragStart                 = useRef(null);
  const rotationRef               = useRef(0);

  // Load world topology
  useEffect(() => {
    fetch('/images/countries-110m.json')
      .then(r => r.json())
      .then(world => {
        const geo = topojson.feature(world, world.objects.countries);
        setGeoJson(geo);
      });
  }, []);

  // Animation loop
  useEffect(() => {
    const loop = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!isDragging.current) {
        rotationRef.current += dt * 0.018; // ~18 deg/s
      }
      setRotation(rotationRef.current);
      setPulseT(t => t + dt * 0.003);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Drag to rotate
  const onMouseDown = useCallback((e) => {
    isDragging.current = true;
    dragStart.current  = { x: e.clientX, rot: rotationRef.current };
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    rotationRef.current = dragStart.current.rot + dx * 0.3;
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  if (!geoJson) return null;

  const projection = d3
    .geoOrthographic()
    .fitSize([size, size], geoJson)
    .rotate([rotation, -20]);

  const path    = d3.geoPath().projection(projection);
  const outline = { type: 'Sphere' };

  // Pulse animation for markers
  const pulse = Math.abs(Math.sin(pulseT));

  // View-centre of the orthographic projection is the inverse of rotate([rotation, -20])
  // i.e. longitude = -rotation, latitude = +20
  const viewLng = (-rotation) * (Math.PI / 180);
  const viewLat = 20            * (Math.PI / 180);

  // Returns true when [lat,lng] is on the VISIBLE hemisphere
  function isVisible(lat, lng) {
    const pLat = lat * (Math.PI / 180);
    const pLng = lng * (Math.PI / 180);
    const dot  =
      Math.sin(viewLat) * Math.sin(pLat) +
      Math.cos(viewLat) * Math.cos(pLat) * Math.cos(pLng - viewLng);
    return dot > 0;
  }

  return (
    <div
      style={{ display: 'inline-block', cursor: isDragging.current ? 'grabbing' : 'grab', userSelect: 'none' }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <svg
        width={size}
        height={size}
        style={{
          borderRadius: '50%',
          filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.13))',
          display: 'block',
        }}
      >
        <defs>
          {/* Subtle radial gradient — light grey centre, slightly darker edge */}
          <radialGradient id="globeBg" cx="38%" cy="32%" r="65%">
            <stop offset="0%"   stopColor="#f4f4f4" />
            <stop offset="100%" stopColor="#d0d0d0" />
          </radialGradient>

          {/* Glow filter for markers */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ocean sphere */}
        <path d={path(outline)} fill="url(#globeBg)" />

        {/* Latitude / longitude graticule */}
        <path
          d={path(d3.geoGraticule()())}
          fill="none"
          stroke="#ddd"
          strokeWidth="0.5"
          strokeOpacity="0.7"
        />

        {/* Country fills */}
        <path
          d={path(geoJson)}
          fill="#ffffff"
          stroke="#c8c8c8"
          strokeWidth="0.6"
        />

        {/* Client markers */}
        {CLIENTS.map((c) => {
          // Skip points on the back hemisphere
          if (!isVisible(c.lat, c.lng)) return null;

          const coords = projection([c.lng, c.lat]);
          if (!coords) return null;
          const [x, y] = coords;

          const r      = 5;
          const ringR  = r + 4 + pulse * 6;
          const ringOp = (1 - pulse) * 0.6;

          return (
            <g key={c.label} filter="url(#glow)">
              {/* Pulsing ring */}
              <circle
                cx={x} cy={y}
                r={ringR}
                fill="none"
                stroke="#FF5500"
                strokeWidth="1.5"
                strokeOpacity={ringOp}
              />
              {/* Solid dot */}
              <circle
                cx={x} cy={y}
                r={r}
                fill="#FF5500"
              />
              {/* White centre */}
              <circle
                cx={x} cy={y}
                r={r * 0.45}
                fill="#fff"
                fillOpacity="0.85"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
