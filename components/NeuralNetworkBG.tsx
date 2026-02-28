'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

const ParticleSystem = () => {
    const pointsRef = useRef<THREE.Points>(null);
    const { scrollYProgress } = useScroll();
    const { size } = useThree();

    const particleCount = 2000;

    // Create Neural Network (initial state) and Galaxy (final state) positions
    const { neuralPositions, galaxyPositions, colors } = useMemo(() => {
        const neuralPositions = new Float32Array(particleCount * 3);
        const galaxyPositions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const colorAmber = new THREE.Color('#FF6B35');
        const colorCyan = new THREE.Color('#0096FF');

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;

            // Neural Network (Sphere/Web like nodes)
            const r1 = 15 * Math.cbrt(Math.random());
            const theta1 = Math.random() * 2 * Math.PI;
            const phi1 = Math.acos(2 * Math.random() - 1);
            neuralPositions[i3] = r1 * Math.sin(phi1) * Math.cos(theta1);
            neuralPositions[i3 + 1] = r1 * Math.sin(phi1) * Math.sin(theta1);
            neuralPositions[i3 + 2] = r1 * Math.cos(phi1);

            // Galaxy (Spiral disc)
            const spiralRadius = Math.random() * 25;
            const spiralAngle = spiralRadius * 0.5 + Math.random() * Math.PI * 2;
            const verticalSpread = (Math.random() - 0.5) * (25 - spiralRadius) * 0.2;
            galaxyPositions[i3] = Math.cos(spiralAngle) * spiralRadius;
            galaxyPositions[i3 + 1] = verticalSpread;
            galaxyPositions[i3 + 2] = Math.sin(spiralAngle) * spiralRadius;

            // Color mix based on random factor that leans towards amber for neural and cyan for galaxy
            const mixedColor = colorAmber.clone().lerp(colorCyan, Math.random());
            colors[i3] = mixedColor.r;
            colors[i3 + 1] = mixedColor.g;
            colors[i3 + 2] = mixedColor.b;
        }

        return { neuralPositions, galaxyPositions, colors };
    }, [particleCount]);

    useFrame((state, delta) => {
        if (!pointsRef.current) return;

        const time = state.clock.getElapsedTime();
        const scrollVal = scrollYProgress.get(); // 0 to 1 based on scroll

        // Heartbeat pulse calculation
        // Pulse every ~1.5 seconds (40 BPM) to ~1 second (60 BPM)
        const heartbeat = Math.sin(time * 3) * Math.exp(-Math.pow((time * 3) % Math.PI, 2));
        const pulseScale = 1 + heartbeat * 0.1 * (1 - scrollVal); // Pulse more when neural

        pointsRef.current.scale.set(pulseScale, pulseScale, pulseScale);
        pointsRef.current.rotation.y = time * (0.05 + scrollVal * 0.15); // Spin faster as galaxy
        pointsRef.current.rotation.x = scrollVal * (Math.PI / 4); // Tilt as it becomes a galaxy

        // Morph positions based on scroll
        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            // Interpolate between Neural and Galaxy positions
            positions[i3] = THREE.MathUtils.lerp(neuralPositions[i3], galaxyPositions[i3], scrollVal);
            positions[i3 + 1] = THREE.MathUtils.lerp(neuralPositions[i3 + 1], galaxyPositions[i3 + 1], scrollVal);
            positions[i3 + 2] = THREE.MathUtils.lerp(neuralPositions[i3 + 2], galaxyPositions[i3 + 2], scrollVal);

            // Add subtle noise/floating based on position
            if (scrollVal < 0.5) {
                positions[i3] += Math.sin(time * 2 + i) * 0.02 * (1 - scrollVal);
                positions[i3 + 1] += Math.cos(time * 2 + i) * 0.02 * (1 - scrollVal);
            }
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particleCount}
                    array={neuralPositions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particleCount}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                vertexColors
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
};

export default function NeuralNetworkBG() {
    return (
        <div className="fixed inset-0 z-0 bg-background" aria-hidden="true">
            <Canvas camera={{ position: [0, 0, 30], fov: 60 }}>
                <fog attach="fog" args={['#0D0D0D', 10, 50]} />
                <ParticleSystem />
            </Canvas>
        </div>
    );
}
