"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './QuoteV2.module.css';

const QuoteV2 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className={styles.content}
                >
                    <span className={styles.quoteMark}>“</span>
                    <h2 className={styles.text}>
                        Fire is not a feature. <br/>
                        <span className={styles.highlight}>It is the soul of every room.</span>
                    </h2>
                    <div className={styles.author}>
                        <div className={styles.line}></div>
                        <span>BIRD FIREPLACES</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteV2;
