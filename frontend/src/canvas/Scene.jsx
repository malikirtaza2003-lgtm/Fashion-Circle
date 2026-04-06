import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const FashionSilk = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Subtle rotation and distortion speed
    meshRef.current.rotation.x = Math.sin(time / 4);
    meshRef.current.rotation.y = Math.cos(time / 4);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} castShadow receiveShadow>
        {/* Using a TorusKnot with specific args to look like a folded silk ribbon */}
        <torusKnotGeometry args={[3, 0.4, 256, 32, 2, 3]} />
        <MeshDistortMaterial 
          color="#111111" 
          speed={3} 
          distort={0.4} 
          radius={1}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
};

export const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
      <Environment preset="city" />
      <FashionSilk />
      <ContactShadows position={[0, -4.5, 0]} opacity={0.6} scale={30} blur={2} far={10} color="#000000" />
    </>
  );
};
