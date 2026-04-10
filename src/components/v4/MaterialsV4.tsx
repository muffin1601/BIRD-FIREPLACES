"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './MaterialsV4.module.css';

const MATERIALS = [
    { title: "EXPERT CRAFTSMANSHIP", code: "01", desc: "Every fireplace is designed and installed by master craftspeople." },
    { title: "PREMIUM MATERIALS", code: "02", desc: "We source only the finest stone, marble, steel, and glass." },
    { title: "LIFELONG RELIABILITY", code: "03", desc: "Every installation is backed by our comprehensive lifetime warranty." },
];

const MaterialsV4 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.topRow}>
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className={styles.title}
                    >
                        THE BIRD <span className={styles.orange}>PROMISE</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        className={styles.line}
                    ></motion.div>
                </div>

                <div className={styles.grid}>
                    {MATERIALS.map((m, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.scanLine}></div>
                            <span className={styles.code}>{m.code}</span>
                            <h3 className={styles.cardTitle}>{m.title}</h3>
                            <p className={styles.cardDesc}>{m.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MaterialsV4;
