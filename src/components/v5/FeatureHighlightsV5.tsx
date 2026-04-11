"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Thermometer, Smartphone, ShieldCheck, Leaf } from 'lucide-react';
import styles from './FeatureHighlightsV5.module.css';
import SectionBackground3D from './SectionBackground3D';

const FEATURES = [
    {
        id: "temp",
        icon: <Thermometer size={40} strokeWidth={1} />,
        title: "Precision Control",
        desc: "Maintain the perfect ambiance with our ultra-precise thermodynamic control systems.",
    },
    {
        id: "smart",
        icon: <Smartphone size={40} strokeWidth={1} />,
        title: "Smart Integration",
        desc: "Control your warmth from anywhere in the world with our bespoke mobile application.",
    },
    {
        id: "safety",
        icon: <ShieldCheck size={40} strokeWidth={1} />,
        title: "Safety First",
        desc: "Advanced sensor arrays and automatic shut-off systems ensure total peace of mind.",
    },
    {
        id: "eco",
        icon: <Leaf size={40} strokeWidth={1} />,
        title: "Eco-Efficiency",
        desc: "Engineered for maximum thermal output with minimum environmental impact.",
    }
];

const FeatureHighlightsV5 = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const [activeIdx, setActiveIdx] = useState(0);

    // Track scroll to switch features
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            if (v < 0.25) setActiveIdx(0);
            else if (v < 0.5) setActiveIdx(1);
            else if (v < 0.75) setActiveIdx(2);
            else setActiveIdx(3);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const active = FEATURES[activeIdx];

    return (
        <section ref={targetRef} className={styles.section} style={{ position: 'relative' }}>
            <SectionBackground3D />
            <div className={styles.stickyContainer}>
                <div className="container">
                    <div className={styles.header}>
                        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={styles.label}>
                            INNOVATION
                        </motion.span>
                        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
                            Engineering Excellence
                        </motion.h2>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.featureList}>
                            {FEATURES.map((feature, idx) => (
                                <div 
                                    key={feature.id}
                                    className={`${styles.item} ${activeIdx === idx ? styles.active : ''}`}
                                >
                                    <div className={styles.iconBox}>{feature.icon}</div>
                                    <div>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.visualDisplay}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active.id}
                                    initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, scale: 1.2, rotateY: -30 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className={styles.hologramCard}
                                >
                                    <div className={styles.hologramIcon}>{active.icon}</div>
                                    <div className={styles.hologramGlow}></div>
                                    <div className={styles.hologramTitle}>{active.title.toUpperCase()}</div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureHighlightsV5;
