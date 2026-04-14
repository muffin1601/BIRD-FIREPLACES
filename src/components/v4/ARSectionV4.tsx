"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ARSectionV4.module.css';

const ARSectionV4 = () => {
    return (
        <section className={styles.section}>
            {/* Background Video with Gradient Mask */}
            <div className={styles.bgWrapper}>
                <div className={styles.row}>
                    <div className={styles.videoCol}>
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className={styles.bgVideo}
                        >
                            <source src="https://cdn.mczgroup.com/mcz2023/files/stufe-ar-mcz-2023.mp4" type="video/mp4" />
                        </video>
                    </div>
                    {/* Spacer for content area - matches col-md-5 */}
                    <div className="hide-mobile" style={{ flex: '0 0 30%' }}></div>
                </div>
            </div>

            {/* Foreground Content */}
            <div className={styles.container}>
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.textContent}
                >
                    <h2 className={styles.title}>
                        STOVES AS IF REAL
                    </h2>
                    <p className={styles.description}>
                        WITH AUGMENTED REALITY, CHOOSING IS EVEN EASIER
                    </p>
                    <a href="#" className={styles.button}>
                        FIND OUT HOW IT WORKS
                        <div className={styles.ctaGlow} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ARSectionV4;
