/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useLayoutEffect, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
  OrbitControls,
  useGLTF,
  useFBX,
  useProgress,
  Html,
  Environment,
  ContactShadows,
  Center,
} from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

// ─── Helpers ────────────────────────────────────────────────────────────────

const isTouch =
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const deg2rad = (d) => (d * Math.PI) / 180;

// ─── Loading indicator ──────────────────────────────────────────────────────

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: '#888', fontSize: '1rem' }}>
        {`${Math.round(progress)} %`}
      </div>
    </Html>
  );
}

// ─── Model sub-components ───────────────────────────────────────────────────

function GltfContent({ url, onLoaded }) {
  const { scene } = useGLTF(url);
  useLayoutEffect(() => {
    if (scene) {
      scene.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });
      onLoaded?.();
    }
  }, [scene, onLoaded]);
  return <primitive object={scene.clone()} />;
}

function FbxContent({ url, onLoaded }) {
  const fbx = useFBX(url);
  useLayoutEffect(() => {
    if (fbx) {
      fbx.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });
      onLoaded?.();
    }
  }, [fbx, onLoaded]);
  return <primitive object={fbx.clone()} />;
}

function ObjContent({ url, onLoaded }) {
  const obj = useLoader(OBJLoader, url);
  useLayoutEffect(() => {
    if (obj) {
      obj.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
        }
      });
      onLoaded?.();
    }
  }, [obj, onLoaded]);
  return <primitive object={obj.clone()} />;
}

// ─── Scene ──────────────────────────────────────────────────────────────────

function SceneContent({ url, autoRotate, autoRotateSpeed, onLoaded }) {
  const modelRef = useRef(null);
  const ext = url.split('.').pop()?.toLowerCase();

  useFrame((_state, delta) => {
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y += (autoRotateSpeed || 1) * delta;
    }
  });

  const ModelComponent = () => {
    switch (ext) {
      case 'glb':
      case 'gltf':
        return <GltfContent url={url} onLoaded={onLoaded} />;
      case 'fbx':
        return <FbxContent url={url} onLoaded={onLoaded} />;
      case 'obj':
        return <ObjContent url={url} onLoaded={onLoaded} />;
      default:
        return null;
    }
  };

  return (
    <Center>
      <group ref={modelRef}>
        <ModelComponent />
      </group>
    </Center>
  );
}

// ─── Main Viewer ─────────────────────────────────────────────────────────────

export default function ModelViewer({
  url,
  width = '100%',
  height = '100%',
  defaultZoom = 2,
  minZoomDistance = 0.5,
  maxZoomDistance = 10,
  enableManualRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = 'forest',
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded,
}) {
  // Preload GLTF/GLB assets eagerly
  useEffect(() => {
    const ext = url.split('.').pop()?.toLowerCase();
    if (ext === 'gltf' || ext === 'glb') {
      useGLTF.preload(url);
    }
  }, [url]);

  return (
    <div style={{ width, height, position: 'relative' }}>
      <Canvas
        shadows
        camera={{
          fov: 50,
          position: [0, 0, defaultZoom],
          near: 0.01,
          far: 100,
        }}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        frameloop="demand"
      >
        <Suspense fallback={<Loader />}>
          <SceneContent
            url={url}
            autoRotate={autoRotate}
            autoRotateSpeed={deg2rad(autoRotateSpeed)}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {environmentPreset !== 'none' && (
          <Environment preset={environmentPreset} />
        )}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={keyLightIntensity}
          castShadow
        />
        <directionalLight position={[-5, 2, 5]} intensity={fillLightIntensity} />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows
          position={[0, -0.5, 0]}
          opacity={0.35}
          scale={10}
          blur={2}
        />

        <OrbitControls
          makeDefault
          enablePan={false}
          enableRotate={enableManualRotation}
          enableZoom={enableManualZoom}
          minDistance={minZoomDistance}
          maxDistance={maxZoomDistance}
          autoRotate={isTouch ? false : autoRotate}
          autoRotateSpeed={autoRotateSpeed}
        />
      </Canvas>
    </div>
  );
}
