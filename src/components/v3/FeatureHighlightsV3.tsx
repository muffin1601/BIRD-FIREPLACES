"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FeatureHighlightsV3.module.css';

const FEATURES = [
    { title: "ATMOSPHERE", desc: "Creating a cinematic presence through the primal dance of light and shadow." },
    { title: "PRECISION", desc: "Every structural line is engineered to integrate flawlessly with your architecture." },
    { title: "HERITAGE", desc: "Decades of master craftsmanship refined into a singular, modern expression." }
];

const FeatureHighlightsV3 = () => {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.list}>
                    {FEATURES.map((f, i) => (
                        <div 
                            key={i}
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            className={styles.row}
                        >
                            <div className={styles.rowHeader}>
                                <motion.span 
                                    animate={{ color: hoveredIdx === i ? "var(--v2-primary)" : "#444" }}
                                    className={styles.idx}
                                >
                                    0{i + 1}
                                </motion.span>
                                <h3 className={styles.title}>{f.title}</h3>
                            </div>
                            
                            <AnimatePresence>
                                {hoveredIdx === i && (
                                    <motion.p 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className={styles.desc}
                                    >
                                        {f.desc}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                            
                            <div className={styles.border}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureHighlightsV3;
