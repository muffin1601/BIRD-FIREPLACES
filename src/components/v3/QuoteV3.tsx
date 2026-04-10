"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './QuoteV3.module.css';

const QuoteV3 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.split}>
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        className={styles.left}
                    >
                        <span className={styles.label}>PRIMAL POWER</span>
                        <h2>THE CORE OF <br/>DARKNESS</h2>
                    </motion.div>
                    
                    <div className={styles.divider}></div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        className={styles.right}
                    >
                        <span className={styles.label}>MODERN FORM</span>
                        <p>Architecture is the learned game, correct and magnificent, of forms assembled in the light of fire.</p>
                        <div className={styles.author}>— BIRD FIREPLACES 2026</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default QuoteV3;
