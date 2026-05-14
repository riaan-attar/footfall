import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Environment, OrbitControls, ContactShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

function Cube() {
  const meshRef = useRef(null);

  const [googleAdsTexture, metaTexture] = useTexture([
    '/images/google_ads.svg',
    '/images/meta.svg'
  ]);

  googleAdsTexture.colorSpace = THREE.SRGBColorSpace;
  metaTexture.colorSpace = THREE.SRGBColorSpace;
  googleAdsTexture.anisotropy = 16;
  metaTexture.anisotropy = 16;

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  const boxSize = 4.5;
  const halfSize = boxSize / 2;
  const offset = halfSize + 0.01;

  return (
    <group ref={meshRef}>
      {/* RoundedBox — meshStandardMaterial + lights create natural smooth shading at edges */}
      <RoundedBox args={[boxSize, boxSize, boxSize]} radius={0.3} smoothness={8}>
        <meshStandardMaterial color="#72a7e3ff" roughness={0.1} metalness={0.0} />
      </RoundedBox>

      {/* Front: Google Ads */}
      <mesh position={[0, 0, offset]}>
        <planeGeometry args={[2.81, 3.51]} />
        <meshBasicMaterial map={googleAdsTexture} transparent />
      </mesh>

      {/* Back: Google Ads */}
      <mesh position={[0, 0, -offset]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[2.81, 3.51]} />
        <meshBasicMaterial map={googleAdsTexture} transparent />
      </mesh>

      {/* Right: Meta */}
      <mesh position={[offset, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[3.93, 0.78]} />
        <meshBasicMaterial map={metaTexture} transparent />
      </mesh>

      {/* Left: Meta */}
      <mesh position={[-offset, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[3.93, 0.78]} />
        <meshBasicMaterial map={metaTexture} transparent />
      </mesh>

      {/* Top: Meta */}
      <mesh position={[0, offset, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.93, 0.78]} />
        <meshBasicMaterial map={metaTexture} transparent />
      </mesh>

      {/* Bottom: Google Ads */}
      <mesh position={[0, -offset, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.81, 3.51]} />
        <meshBasicMaterial map={googleAdsTexture} transparent />
      </mesh>
    </group>
  );
}

export default function CubeViewer({ width = '100%', height = '100%' }) {
  return (
    <div style={{ width, height, position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 14.5], fov: 50 }}
        gl={{ toneMapping: THREE.NoToneMapping, outputColorSpace: THREE.SRGBColorSpace, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[8, 8, 8]} intensity={0.9} />
        <directionalLight position={[-6, 4, 4]} intensity={0.5} />
        <directionalLight position={[0, -6, 6]} intensity={0.3} />
        <Environment preset="city" />

        <Cube />

        <ContactShadows position={[0, -3.8, 0]} opacity={0.25} scale={14} blur={2.5} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={isTouch ? false : true} autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
