"use client";

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { PerspectiveCamera, Points, PointMaterial, Float, Text } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import styles from './ExperienceV5.module.css';
import SectionBackground3D from './SectionBackground3D';

const ThermalCloud = ({ count = 2000 }) => {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 10;
            p[i * 3 + 1] = (Math.random() - 0.5) * 10;
            p[i * 3 + 2] = (Math.random() - 0.5) * 5;
        }
        return p;
    }, [count]);

    const pointsRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
            pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color="#d35400"
                size={0.05}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
};

const ExperienceV5 = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={targetRef} className={styles.thermalSection}>
            <SectionBackground3D />
            
            <div className={styles.container}>
                <div className={styles.canvasWrapper}>
                    <Canvas>
                        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                        <Suspense fallback={null}>
                            <ThermalCloud />
                            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                                {/* <Text
                                    fontSize={0.8}
                                    color="#ff6b35"
                                    position={[4, 4, 2]}
                                    maxWidth={10}
                                    textAlign="left"
                                >
                                    THERMAL PRECISION
                                </Text> */}
                            </Float>
                            <SceneContent />
                        </Suspense>
                    </Canvas>
                </div>

                <div className={styles.contentOverlay}>
                    <motion.div style={{ scale, opacity }} className={styles.mainBox}>
                        <div className={styles.header}>
                             <span className={styles.tag}>ENGINEERING ATMOSPHERE</span>
                             <h2>The Science of Serenity</h2>
                        </div>
                        
                        <div className={styles.detailGrid}>
                            <div className={styles.detailItem}>
                                <h3>150+</h3>
                                <p>Architectural Commissions</p>
                            </div>
                            <div className={styles.detailItem}>
                                <h3>12</h3>
                                <p>Design Excellence Awards</p>
                            </div>
                        </div>

                        <p className={styles.description}>
                            Our fireplaces are thermodynamic sculptures. We map heat distribution 
                            to ensure absolute comfort while maintaining the architectural beauty of your space.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SceneContent = () => {
    // Removed useLoader for missing image to fix runtime error
    return (
        <mesh position={[0, 0, -5]}>
            <planeGeometry args={[20, 15]} />
            <meshBasicMaterial color="#0a0a0a" transparent opacity={0.5} />
        </mesh>
    );
};

export default ExperienceV5;
