import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

const CLIENTS = [
  // India (7 scattered pins)
  { lat: 28.6139,  lng:  77.2090, label: 'Delhi' },
  { lat: 19.0760,  lng:  72.8777, label: 'Mumbai' },
  { lat: 12.9716,  lng:  77.5946, label: 'Bengaluru' },
  { lat: 22.5726,  lng:  88.3639, label: 'Kolkata' },
  { lat: 17.3850,  lng:  78.4867, label: 'Hyderabad' },
  { lat: 23.0225,  lng:  72.5714, label: 'Ahmedabad' },
  { lat: 13.0827,  lng:  80.2707, label: 'Chennai' },
  
  // Australia (1 pin)
  { lat: -33.8688, lng: 151.2093, label: 'Australia' },
  
  // Dubai (1 pin)
  { lat: 25.2048,  lng:  55.2708, label: 'Dubai' },
];

export default function GlobeViewer({ size = 520 }) {
  const canvasRef = useRef(null);
  const geoJsonRef = useRef(null);

  // Keep state variables in refs to prevent triggering React state updates/renders at 60fps
  const rotationRef = useRef(0);
  const pulseTRef = useRef(0);
  const isDragging = useRef(false);
  const dragStart = useRef(null);
  const isVisibleRef = useRef(true);

  // Load world topology once
  useEffect(() => {
    fetch('/images/countries-110m.json')
      .then(r => r.json())
      .then(world => {
        const geo = topojson.feature(world, world.objects.countries);
        geoJsonRef.current = geo;
      })
      .catch(err => console.error('Failed to load map data:', err));
  }, []);

  // Main canvas animation loop & IntersectionObserver setup
  useEffect(() => {
    let rafId = null;
    let lastTime = 0;

    const draw = (timestamp) => {
      const canvas = canvasRef.current;
      if (!canvas || !geoJsonRef.current) {
        rafId = requestAnimationFrame(draw);
        return;
      }

      // If component is not intersecting / off-screen, skip render processing
      if (!isVisibleRef.current) {
        rafId = requestAnimationFrame(draw);
        return;
      }

      if (!lastTime) lastTime = timestamp;
      const dt = timestamp - lastTime;
      lastTime = timestamp;

      // Rotate globe automatically when not dragging
      if (!isDragging.current) {
        rotationRef.current += dt * 0.018; // ~18 deg/s
      }
      pulseTRef.current += dt * 0.003;

      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;

      // Handle high DPI displays (Retina/4K screens)
      if (canvas.width !== size * dpr || canvas.height !== size * dpr) {
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        canvas.style.width = `${size}px`;
        canvas.style.height = `${size}px`;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, size, size);

      const rotation = rotationRef.current;
      const pulseT = pulseTRef.current;

      const projection = d3
        .geoOrthographic()
        .fitSize([size, size], geoJsonRef.current)
        .rotate([rotation, -20]);

      const path = d3.geoPath().projection(projection).context(ctx);

      // 1. Draw Ocean sphere outline
      ctx.beginPath();
      path({ type: 'Sphere' });
      const grad = ctx.createRadialGradient(size * 0.38, size * 0.32, 0, size * 0.38, size * 0.32, size * 0.65);
      grad.addColorStop(0, '#f4f4f4');
      grad.addColorStop(1, '#d0d0d0');
      ctx.fillStyle = grad;
      ctx.fill();

      // 2. Draw Latitude/Longitude grids
      ctx.beginPath();
      path(d3.geoGraticule()());
      ctx.strokeStyle = '#ddd';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // 3. Draw Country borders and lands
      ctx.beginPath();
      path(geoJsonRef.current);
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#c8c8c8';
      ctx.lineWidth = 0.6;
      ctx.fill();
      ctx.stroke();

      // 4. Draw client markers
      const pulse = Math.abs(Math.sin(pulseT));
      const viewLng = (-rotation) * (Math.PI / 180);
      const viewLat = 20 * (Math.PI / 180);

      const isMarkerVisible = (lat, lng) => {
        const pLat = lat * (Math.PI / 180);
        const pLng = lng * (Math.PI / 180);
        const dot =
          Math.sin(viewLat) * Math.sin(pLat) +
          Math.cos(viewLat) * Math.cos(pLat) * Math.cos(pLng - viewLng);
        return dot > 0;
      };

      CLIENTS.forEach((c) => {
        if (!isMarkerVisible(c.lat, c.lng)) return;

        const coords = projection([c.lng, c.lat]);
        if (!coords) return;
        const [x, y] = coords;

        const r = 5;
        const ringR = r + 4 + pulse * 6;
        const ringOp = (1 - pulse) * 0.6;

        ctx.save();
        // Apply glow filter effect on markers
        ctx.shadowColor = '#FF5500';
        ctx.shadowBlur = 8;

        // Pulse ring
        ctx.beginPath();
        ctx.arc(x, y, ringR, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(255, 85, 0, ${ringOp})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Solid red dot
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = '#FF5500';
        ctx.fill();

        // White core dot (disable glow shadow for this inner core)
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(x, y, r * 0.45, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fill();

        ctx.restore();
      });

      ctx.restore();

      rafId = requestAnimationFrame(draw);
    };

    // Setup IntersectionObserver to track component visibility
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
      if (entry.isIntersecting) {
        lastTime = 0; // Reset time tracker on entry
      }
    }, { threshold: 0.01 });

    const canvas = canvasRef.current;
    if (canvas) {
      observer.observe(canvas);
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      if (canvas) {
        observer.unobserve(canvas);
      }
      observer.disconnect();
    };
  }, [size]);

  // Mouse drag handling
  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX, rot: rotationRef.current };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    rotationRef.current = dragStart.current.rot + dx * 0.3;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  // Touch drag handling for mobile devices
  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    isDragging.current = true;
    dragStart.current = { x: e.touches[0].clientX, rot: rotationRef.current };
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || !dragStart.current || !e.touches || e.touches.length === 0) return;
    const dx = e.touches[0].clientX - dragStart.current.x;
    rotationRef.current = dragStart.current.rot + dx * 0.3;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  return (
    <div
      style={{ display: 'inline-block', cursor: 'grab', userSelect: 'none' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <canvas
        ref={canvasRef}
        style={{
          borderRadius: '50%',
          filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.13))',
          display: 'block',
        }}
      />
    </div>
  );
}
