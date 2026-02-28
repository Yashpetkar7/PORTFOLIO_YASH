'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function Hero3DHUD() {
    const ring1Ref = useRef<THREE.Mesh>(null);
    const ring2Ref = useRef<THREE.Mesh>(null);
    const ring3Ref = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Update mouse position for rotation
    if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            });
        });
    }

    useFrame((state, delta) => {
        if (!ring1Ref.current || !ring2Ref.current || !ring3Ref.current || !groupRef.current) return;

        // Rotate rings automatically
        ring1Ref.current.rotation.z += delta * 0.5;
        ring2Ref.current.rotation.z -= delta * 0.3;
        ring3Ref.current.rotation.z += delta * 0.2;
        ring3Ref.current.rotation.x += delta * 0.1;
        ring3Ref.current.rotation.y += delta * 0.1;

        // Smoothly interpolate group rotation based on mouse
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mousePosition.x * 0.5, 0.1);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mousePosition.y * 0.5, 0.1);
    });

    return (
        <group ref={groupRef}>
            {/* Outer Dashed Ring */}
            <mesh ref={ring1Ref}>
                <ringGeometry args={[2.8, 2.9, 64]} />
                <meshBasicMaterial
                    color="#FF6B35"
                    transparent={true}
                    opacity={0.6}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Middle Cyan Ring */}
            <mesh ref={ring2Ref}>
                <ringGeometry args={[2.5, 2.55, 64]} />
                <meshBasicMaterial
                    color="#0096FF"
                    transparent={true}
                    opacity={0.8}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Inner Complex Ring */}
            <mesh ref={ring3Ref}>
                <torusGeometry args={[2.2, 0.02, 16, 100]} />
                <meshBasicMaterial
                    color="#E5E5E5"
                    transparent={true}
                    opacity={0.3}
                    wireframe={true}
                />
            </mesh>

            {/* Add subtle core glow */}
            <mesh>
                <planeGeometry args={[5, 5]} />
                <meshBasicMaterial
                    color="#FF6B35"
                    transparent={true}
                    opacity={0.15}
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>
        </group>
    );
}
