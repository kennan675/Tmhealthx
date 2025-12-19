import { useRef, useMemo } from 'react';
import { Canvas, useFrame, RootState } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
    const ref = useRef<THREE.Points>(null);

    const particlesCount = 2000;

    const positions = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return positions;
    }, []);

    useFrame((state: RootState) => {
        if (ref.current) {
            ref.current.rotation.x = state.clock.elapsedTime * 0.02;
            ref.current.rotation.y = state.clock.elapsedTime * 0.03;
        }
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#22c55e"
                size={0.03}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

function FloatingOrbs() {
    const group = useRef<THREE.Group>(null);

    const orbData = useMemo(() => {
        return Array.from({ length: 8 }, (_, i) => ({
            position: [
                Math.sin(i * Math.PI * 0.25) * 4,
                Math.cos(i * Math.PI * 0.3) * 3,
                Math.sin(i * Math.PI * 0.4) * 2 - 5
            ] as [number, number, number],
            scale: 0.2 + Math.random() * 0.3,
            speed: 0.5 + Math.random() * 0.5,
            color: i % 2 === 0 ? '#22c55e' : '#16a34a'
        }));
    }, []);

    useFrame((state: RootState) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.1;
            group.current.children.forEach((child, i) => {
                child.position.y += Math.sin(state.clock.elapsedTime * orbData[i].speed) * 0.002;
            });
        }
    });

    return (
        <group ref={group}>
            {orbData.map((orb, i) => (
                <mesh key={i} position={orb.position}>
                    <sphereGeometry args={[orb.scale, 16, 16]} />
                    <meshBasicMaterial
                        color={orb.color}
                        transparent
                        opacity={0.3}
                    />
                </mesh>
            ))}
        </group>
    );
}

function GlowingRings() {
    const ringRef = useRef<THREE.Group>(null);

    useFrame((state: RootState) => {
        if (ringRef.current) {
            ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
            ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <group ref={ringRef} position={[0, 0, -8]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[3, 0.02, 16, 100]} />
                <meshBasicMaterial color="#22c55e" transparent opacity={0.4} />
            </mesh>
            <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
                <torusGeometry args={[4, 0.02, 16, 100]} />
                <meshBasicMaterial color="#16a34a" transparent opacity={0.3} />
            </mesh>
            <mesh rotation={[Math.PI / 3, -0.2, 0]}>
                <torusGeometry args={[5, 0.02, 16, 100]} />
                <meshBasicMaterial color="#15803d" transparent opacity={0.2} />
            </mesh>
        </group>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 1.5]}
                style={{ background: 'linear-gradient(135deg, #052e16 0%, #14532d 50%, #022c22 100%)' }}
            >
                <ambientLight intensity={0.5} />
                <ParticleField />
                <FloatingOrbs />
                <GlowingRings />
            </Canvas>
        </div>
    );
}
