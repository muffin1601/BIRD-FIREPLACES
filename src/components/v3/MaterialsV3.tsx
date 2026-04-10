"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './MaterialsV3.module.css';

const MATERIALS = [
    { title: "EXPERT CRAFTSMANSHIP", code: "01", desc: "Every fireplace is designed and installed by master craftspeople with decades of experience." },
    { title: "PREMIUM MATERIALS", code: "02", desc: "We source only the finest stone, marble, steel, and glass — materials that age beautifully." },
    { title: "LIFELONG RELIABILITY", code: "03", desc: "Every fireplace we install is backed by our comprehensive warranty and after-care team." },
];

const MaterialsV3 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={styles.label}
                    >
                        THE STUDIO PROMISE
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={styles.title}
                    >
                        ARCHITECTURAL <span className={styles.outline}>INTEGRITY</span>
                    </motion.h2>
                </div>

                <div className={styles.grid}>
                    {MATERIALS.map((m, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className={styles.card}
                        >
                            <span className={styles.number}>{m.code}</span>
                            <h3 className={styles.cardTitle}>{m.title}</h3>
                            <p className={styles.cardDesc}>{m.desc}</p>
                            <div className={styles.borderLine}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MaterialsV3;
