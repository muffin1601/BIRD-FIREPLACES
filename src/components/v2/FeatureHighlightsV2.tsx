"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeatureHighlightsV2.module.css';

const FeatureHighlightsV2 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.item}
                    >
                        <span className={styles.num}>01</span>
                        <h3>Bespoke Craftsmanship</h3>
                        <div className={styles.bar}></div>
                        <p>Hand-finished to perfection, ensuring unparalleled structural integrity and aesthetic depth.</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={styles.item}
                    >
                        <span className={styles.num}>02</span>
                        <h3>Architectural Precision</h3>
                        <div className={styles.bar}></div>
                        <p>Engineered for endurance, meeting the most rigorous safety and design standards.</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className={styles.item}
                    >
                        <span className={styles.num}>03</span>
                        <h3>Timeless Design</h3>
                        <div className={styles.bar}></div>
                        <p>Form that transcends trends, focusing on the primal connection between fire and architectural form.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeatureHighlightsV2;
