"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface VariedShapeProps {
    position: [number, number, number];
    color: string;
    scale?: number;
    speed?: number;
    type?: string;
}

const VariedShape = ({ position, color, scale = 1, speed = 1, type = "dodecahedron" }: VariedShapeProps) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.002 * speed;
            meshRef.current.rotation.y += 0.003 * speed;
            meshRef.current.rotation.z += 0.001 * speed;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position} scale={[scale, scale, scale]}>
                {type === "dodecahedron" && <dodecahedronGeometry args={[1, 0]} />}
                {type === "octahedron" && <octahedronGeometry args={[1, 0]} />}
                {type === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
                <meshStandardMaterial 
                    color={color} 
                    emissive={color}
                    emissiveIntensity={1.2}
                    wireframe
                    transparent
                    opacity={0.12} 
                />
            </mesh>
        </Float>
    );
};

interface SectionBackground3DProps {
    color?: string;
}

const SectionBackground3D = ({ color = "#d35400" }: SectionBackground3DProps) => {
    const shapes = useMemo(() => [
        { pos: [-10, 6, -5], scale: 2.5, type: "dodecahedron", speed: 0.4 },
        { pos: [12, -4, -2], scale: 1.5, type: "octahedron", speed: 0.7 },
        { pos: [2, 8, -8], scale: 1, type: "icosahedron", speed: 0.3 },
        { pos: [-8, -6, -10], scale: 3, type: "dodecahedron", speed: 0.5 },
        { pos: [15, 10, -15], scale: 5, type: "icosahedron", speed: 0.2 },
        { pos: [-15, 0, -12], scale: 2, type: "octahedron", speed: 0.8 },
        { pos: [5, -10, -5], scale: 1.2, type: "dodecahedron", speed: 0.6 },
    ], []);

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0
        }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} color={color} intensity={1} />
                
                {shapes.map((s, i) => (
                    <VariedShape 
                        key={i}
                        position={s.pos as any} 
                        scale={s.scale} 
                        type={s.type} 
                        color={color} 
                        speed={s.speed}
                    />
                ))}
            </Canvas>
        </div>
    );
};

export default SectionBackground3D;
