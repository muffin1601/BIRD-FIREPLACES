"use client";

import React, { useRef, Suspense, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, PerspectiveCamera, Sparkles, Stars, Text, Environment } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import styles from './HeroV5.module.css';

const VolumetricFireball = () => {
    const coreRef = useRef<THREE.Mesh>(null);
    const mantleRef = useRef<THREE.Mesh>(null);
    const veilRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (coreRef.current) {
            coreRef.current.rotation.y = time * 0.5;
            coreRef.current.scale.setScalar(1 + Math.sin(time * 3) * 0.05);
        }
        if (mantleRef.current) {
            mantleRef.current.rotation.x = time * 0.3;
            mantleRef.current.rotation.z = time * 0.2;
        }
        if (veilRef.current) {
            veilRef.current.rotation.y = -time * 0.4;
        }
    });

    return (
        <group>
            {/* White-Hot Inner Core - Glowing with Primary Orange */}
            <mesh ref={coreRef}>
                <sphereGeometry args={[0.8, 64, 64]} />
                <MeshDistortMaterial 
                    color="#ffffff" 
                    emissive="#d35400" 
                    emissiveIntensity={12} 
                    distort={0.4} 
                    speed={5} 
                />
            </mesh>

            {/* Turbulent Mantle - Deep Dark Orange */}
            <mesh ref={mantleRef} scale={1.1}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial 
                    color="#d35400" 
                    emissive="#d35400" 
                    emissiveIntensity={6} 
                    distort={0.6} 
                    speed={3} 
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Outer Flame Veil - Dark Orange Atmosphere */}
            <mesh ref={veilRef} scale={1.3}>
                <sphereGeometry args={[1.2, 64, 64]} />
                <MeshDistortMaterial 
                    color="#a13d00" 
                    emissive="#d35400" 
                    emissiveIntensity={2} 
                    distort={0.8} 
                    speed={2} 
                    transparent
                    opacity={0.3}
                    wireframe
                />
            </mesh>

            {/* Deep Orange Rising Embers */}
            <Sparkles 
                count={150} 
                scale={5} 
                size={3} 
                color="#d35400" 
                speed={0.6} 
                noise={1} 
                position={[0, 1.5, 0]} 
            />
            
            <pointLight intensity={40} distance={12} color="#d35400" />
        </group>
    );
};

const KineticRings = () => {
    const groupRef = useRef<THREE.Group>(null);
    
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.children.forEach((child, i) => {
                child.rotation.z = time * (0.05 + i * 0.02);
                child.rotation.x = Math.sin(time * 0.5 + i) * 0.2;
            });
        }
    });

    return (
        <group ref={groupRef}>
            {[...Array(8)].map((_, i) => (
                <mesh key={i} rotation={[Math.random() * Math.PI, 0, 0]}>
                    <torusGeometry args={[3.5 + i * 0.8, 0.005, 16, 100]} />
                    <meshBasicMaterial 
                        color="#d35400" 
                        transparent 
                        opacity={0.3 - i * 0.03} 
                    />
                </mesh>
            ))}
        </group>
    );
};

const Scene = () => {
    const { mouse, viewport } = useThree();
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current) {
            const x = (mouse.x * viewport.width) / 10;
            const y = (mouse.y * viewport.height) / 10;
            groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, x, 0.1);
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, y, 0.1);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.2, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.2, 0.1);
        }
    });

    return (
        <group ref={groupRef}>
            <VolumetricFireball />
            <KineticRings />
            <Sparkles count={200} scale={15} size={2} color="#d35400" speed={0.2} opacity={0.5} />
        </group>
    );
};

const HeroV5 = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className={styles.heroContainer}>
            <div className={styles.canvasContainer}>
                <Canvas dpr={[1, 2]}>
                    <color attach="background" args={['#030303']} />
                    <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />
                    <Suspense fallback={null}>
                        <Scene />
                        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                        <ambientLight intensity={0.2} />
                        <pointLight position={[10, 10, 10]} color="#d35400" intensity={10} />
                        <pointLight position={[-10, -10, -5]} color="#d35400" intensity={5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className={styles.content}>
                <div className={styles.uiOverlay}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className={styles.eyebrow}>ESTABLISHED 2026 / DESIGN V.05</span>
                        
                        <div className={styles.titleWrapper}>
                            <motion.h1 
                                initial={{ letterSpacing: "0em", opacity: 0 }}
                                animate={{ letterSpacing: "0.15em", opacity: 1 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                className={styles.title}
                            >
                                BIRD
                            </motion.h1>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ delay: 1, duration: 2 }}
                            className={styles.description}
                        >
                            ENGINEERING THE ESSENCE OF FIRE
                        </motion.div>

                        <div className={styles.ctaGroup}>
                            <motion.button 
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={styles.cta}
                            >
                                <span>COMMENCE EXPLORATION</span>
                                <motion.div 
                                    className={styles.ctaGlow}
                                    animate={{ 
                                        opacity: isHovered ? 1 : 0,
                                        scale: isHovered ? 1.2 : 1
                                    }}
                                />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <span>SCROLL TO SYSTEM</span>
            </div>
        </section>
    );
};

export default HeroV5;

