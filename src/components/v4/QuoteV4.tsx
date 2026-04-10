"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './QuoteV4.module.css';

const QuoteV4 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.terminalBg}>
                {[...Array(10)].map((_, i) => (
                    <div key={i} className={styles.codeLine}>
                        {`0x${Math.random().toString(16).slice(2, 10).toUpperCase()} >> SYST_BOOT_HEARTH_V2.0.4`}
                    </div>
                ))}
            </div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className={styles.content}
            >
                <div className={styles.glitchWrap}>
                    <h2 className={styles.text} data-text="FIRE IS THE ULTIMATE ALGORITHM">
                        FIRE IS THE ULTIMATE ALGORITHM
                    </h2>
                </div>
            </motion.div>
        </section>
    );
};

export default QuoteV4;
