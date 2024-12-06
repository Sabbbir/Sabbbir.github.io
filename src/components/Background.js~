// src/components/Background.js

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { MeshDistortMaterial } from '@react-three/drei';

const Sphere = () => (
  <mesh>
    <sphereBufferGeometry args={[1, 32, 32]} />
    <MeshDistortMaterial color="#00c6ff" distort={0.5} speed={2} />
  </mesh>
);

const Background = () => {
  return (
    <Canvas
      style={{ position: 'fixed', top: 0, left: 0 }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sphere />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default Background;

