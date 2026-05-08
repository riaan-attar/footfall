import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// ─── Physics ────────────────────────────────────────────────────────────────

class BallPhysics {
  constructor(config) {
    this.config = config;
    this.positionData = new Float32Array(3 * config.count).fill(0);
    this.velocityData = new Float32Array(3 * config.count).fill(0);
    this.sizeData     = new Float32Array(config.count).fill(1);
    this.center       = new THREE.Vector3();
    this._initPositions();
    this._initSizes();
  }

  _initPositions() {
    const { config: c, positionData: d } = this;
    for (let i = 1; i < c.count; i++) {
      d[3*i]   = (Math.random() - 0.5) * c.maxX * 2;
      d[3*i+1] = (Math.random() - 0.5) * c.maxY * 2;
      d[3*i+2] = (Math.random() - 0.5) * c.maxZ * 2;
    }
  }

  _initSizes() {
    const { config: c, sizeData: s } = this;
    s[0] = c.size0;
    for (let i = 1; i < c.count; i++) {
      s[i] = Math.random() * (c.maxSize - c.minSize) + c.minSize;
    }
  }

  update(delta) {
    const { config: t, positionData: pd, velocityData: vd, sizeData: sd, center } = this;

    const p  = new THREE.Vector3();
    const v  = new THREE.Vector3();
    const q  = new THREE.Vector3();
    const w  = new THREE.Vector3();
    const d  = new THREE.Vector3();
    const pv = new THREE.Vector3();

    const start = t.controlSphere0 ? 1 : 0;

    if (t.controlSphere0) {
      const p0 = new THREE.Vector3().fromArray(pd, 0);
      p0.lerp(center, 0.1).toArray(pd, 0);
      new THREE.Vector3(0,0,0).toArray(vd, 0);
    }

    // integrate velocities
    for (let i = start; i < t.count; i++) {
      const b = 3 * i;
      p.fromArray(pd, b);
      v.fromArray(vd, b);
      v.y -= delta * t.gravity * sd[i];
      v.multiplyScalar(t.friction);
      v.clampLength(0, t.maxVelocity);
      p.add(v);
      p.toArray(pd, b);
      v.toArray(vd, b);
    }

    // sphere-sphere collisions
    for (let i = start; i < t.count; i++) {
      const bi = 3 * i;
      p.fromArray(pd, bi);
      v.fromArray(vd, bi);
      const ri = sd[i];
      for (let j = i + 1; j < t.count; j++) {
        const bj = 3 * j;
        q.fromArray(pd, bj);
        w.fromArray(vd, bj);
        const rj = sd[j];
        d.copy(q).sub(p);
        const dist = d.length();
        const sumR = ri + rj;
        if (dist < sumR && dist > 0.0001) {
          const overlap = sumR - dist;
          const push = d.clone().normalize().multiplyScalar(0.5 * overlap);
          p.sub(push); v.sub(push.clone().multiplyScalar(Math.max(v.length(), 1)));
          p.toArray(pd, bi); v.toArray(vd, bi);
          q.add(push); w.add(push.clone().multiplyScalar(Math.max(w.length(), 1)));
          q.toArray(pd, bj); w.toArray(vd, bj);
        }
      }

      // wall bounce
      if (Math.abs(p.x) + ri > t.maxX) {
        p.x = Math.sign(p.x) * (t.maxX - ri);
        v.x = -v.x * t.wallBounce;
      }
      if (t.gravity === 0) {
        if (Math.abs(p.y) + ri > t.maxY) {
          p.y = Math.sign(p.y) * (t.maxY - ri);
          v.y = -v.y * t.wallBounce;
        }
      } else if (p.y - ri < -t.maxY) {
        p.y = -t.maxY + ri;
        v.y = -v.y * t.wallBounce;
      }
      const maxBZ = Math.max(t.maxZ, t.maxSize);
      if (Math.abs(p.z) + ri > maxBZ) {
        p.z = Math.sign(p.z) * (t.maxZ - ri);
        v.z = -v.z * t.wallBounce;
      }
      p.toArray(pd, bi);
      v.toArray(vd, bi);
    }
  }
}

// ─── React component ─────────────────────────────────────────────────────────

const Ballpit = ({
  className   = '',
  count       = 200,
  colors      = [0xff6600, 0xffaa00, 0xff3366, 0x9933ff, 0x00ccff],
  gravity     = 0.5,
  friction    = 0.9975,
  wallBounce  = 0.95,
  followCursor = true,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const config = {
      count, colors, gravity, friction, wallBounce, followCursor,
      minSize: 0.35, maxSize: 0.9, size0: 1,
      maxX: 5, maxY: 5, maxZ: 2, maxVelocity: 0.15,
      controlSphere0: false,
    };

    // ── Renderer ──────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping      = THREE.ACESFilmicToneMapping;

    // ── Scene & Camera ────────────────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0, 20);

    // ── Environment map (for reflections) ─────────────────────────────────
    const pmrem  = new THREE.PMREMGenerator(renderer);
    const envMap = pmrem.fromScene(new RoomEnvironment()).texture;
    pmrem.dispose();

    // ── Material – plain MeshPhysicalMaterial, no custom shaders ─────────
    const material = new THREE.MeshPhysicalMaterial({
      envMap,
      metalness:          0.4,
      roughness:          0.2,
      clearcoat:          1,
      clearcoatRoughness: 0.1,
      vertexColors:       true,
    });

    // ── Geometry & Instanced Mesh ─────────────────────────────────────────
    const geometry = new THREE.SphereGeometry(1, 24, 24);
    const mesh     = new THREE.InstancedMesh(geometry, material, count);
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    // assign per-instance colors
    const colorObjs = colors.map(c => new THREE.Color(c));
    for (let i = 0; i < count; i++) {
      const ratio = i / count;
      const pos   = ratio * (colorObjs.length - 1);
      const lo    = Math.floor(pos);
      const hi    = Math.min(lo + 1, colorObjs.length - 1);
      const alpha = pos - lo;
      mesh.setColorAt(i, new THREE.Color().lerpColors(colorObjs[lo], colorObjs[hi], alpha));
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    scene.add(mesh);

    // ── Lights ────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const pointLight = new THREE.PointLight(0xffffff, 150);
    scene.add(pointLight);

    // ── Physics ───────────────────────────────────────────────────────────
    const physics = new BallPhysics(config);

    // ── Resize ────────────────────────────────────────────────────────────
    const dummy = new THREE.Object3D();
    function resize() {
      const parent = canvas.parentElement;
      const w = parent ? parent.offsetWidth  : window.innerWidth;
      const h = parent ? parent.offsetHeight : window.innerHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const fovRad = (camera.fov * Math.PI) / 180;
      const wH = 2 * Math.tan(fovRad / 2) * camera.position.z;
      physics.config.maxX = (wH * camera.aspect) / 2;
      physics.config.maxY = wH / 2;
    }
    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener('resize', resize);

    // ── Cursor follow ─────────────────────────────────────────────────────
    const raycaster = new THREE.Raycaster();
    const plane     = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const ndc       = new THREE.Vector2();
    const hit       = new THREE.Vector3();

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      ndc.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      ndc.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
      raycaster.setFromCamera(ndc, camera);
      if (raycaster.ray.intersectPlane(plane, hit)) {
        physics.center.copy(hit);
        physics.config.controlSphere0 = true;
      }
    }
    function onLeave() { physics.config.controlSphere0 = false; }

    if (followCursor) {
      canvas.addEventListener('pointermove', onMove);
      canvas.addEventListener('pointerleave', onLeave);
    }

    // ── Animate ───────────────────────────────────────────────────────────
    let rafId;
    let prev = performance.now();

    function animate() {
      rafId = requestAnimationFrame(animate);
      const now   = performance.now();
      const delta = Math.min((now - prev) / 1000, 0.05); // seconds, capped
      prev = now;

      physics.update(delta);

      for (let i = 0; i < count; i++) {
        dummy.position.fromArray(physics.positionData, 3 * i);
        dummy.scale.setScalar(physics.sizeData[i]);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        if (i === 0) pointLight.position.copy(dummy.position);
      }
      mesh.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
    }
    animate();

    // ── Cleanup ───────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('resize', resize);
      if (followCursor) {
        canvas.removeEventListener('pointermove', onMove);
        canvas.removeEventListener('pointerleave', onLeave);
      }
      geometry.dispose();
      material.dispose();
      envMap.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
};

export default Ballpit;
