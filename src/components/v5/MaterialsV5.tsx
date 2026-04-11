"use client";

import React, { useState, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import styles from './MaterialsV5.module.css';
import SectionBackground3D from './SectionBackground3D';

const MATERIALS = [
    { id: 1, name: "Brushed Obsidian", color: "#1a1a1a", distort: 0.2, pos: [-3, 2, 0] },
    { id: 2, name: "Calcatta Marble", color: "#ffffff", distort: 0.1, pos: [3, 2, 0] },
    { id: 3, name: "Aged Bronze", color: "#804a00", distort: 0.3, pos: [-3, -2, 0] },
    { id: 4, name: "Arctic Quartz", color: "#d0e0ff", distort: 0.4, pos: [3, -2, 0] }
];

const MaterialOrb = ({ material, isActive, onHover }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            if (isActive) {
                meshRef.current.scale.lerp(new THREE.Vector3(1.5, 1.5, 1.5), 0.1);
            } else {
                meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
            }
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh 
                ref={meshRef} 
                position={material.pos as any}
                onPointerEnter={() => onHover(material)}
            >
                <sphereGeometry args={[1.2, 64, 64]} />
                <MeshDistortMaterial 
                    color={material.color} 
                    speed={2} 
                    distort={material.distort} 
                    metalness={0.9} 
                    roughness={0.1}
                />
            </mesh>
        </Float>
    );
};

const MaterialsV5 = () => {
    const [active, setActive] = useState(MATERIALS[0]);

    return (
        <section className={styles.uniqueMaterials} style={{ position: 'relative' }}>
            <SectionBackground3D />
            
            <div className={`container ${styles.gridContainer}`}>
                <div className={styles.infoSide}>
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className={styles.label}
                    >
                        CURATED ELEMENTS
                    </motion.span>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className={styles.content}
                        >
                            <h2>{active.name}</h2>
                            <p>
                                Sourced from the finest quarries and foundries across the globe. 
                                Our {active.name} finish provides a timeless architectural foundation 
                                for modern luxury.
                            </p>
                        </motion.div>
                    </AnimatePresence>
                    
                    <div className={styles.selector}>
                        {MATERIALS.map((m) => (
                            <button 
                                key={m.id}
                                onClick={() => setActive(m)}
                                className={active.id === m.id ? styles.activeBtn : ''}
                            >
                                {m.name.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.canvasSide}>
                    <Canvas>
                        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={2} color="#d35400" />
                        <Suspense fallback={null}>
                            {MATERIALS.map((m) => (
                                <MaterialOrb 
                                    key={m.id} 
                                    material={m} 
                                    isActive={active.id === m.id}
                                    onHover={setActive}
                                />
                            ))}
                            <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={24} />
                        </Suspense>
                        <Environment preset="city" />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default MaterialsV5;
