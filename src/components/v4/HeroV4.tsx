"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './HeroV4.module.css';

const HeroV4 = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    return (
        <section className={styles.heroSection}>
            <motion.div style={{ y: y1, scale }} className={styles.bgContainer}>
                <Image 
                    src="https://www.bird-fireplaces.com/images/main-slider/slider1/slide1.jpg" 
                    alt="Cinematic Fireplace" 
                    fill 
                    className={styles.heroImg}
                    priority
                />
                <div className={styles.overlay}></div>
            </motion.div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <motion.div 
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.8em" }}
                        transition={{ duration: 2 }}
                        className={styles.topLabel}
                    >
                        ESTABLISHED 2026
                    </motion.div>
                    
                    <div className={styles.titleWrapper}>
                        <motion.h1 
                            initial={{ clipPath: "inset(0 100% 0 0)" }}
                            animate={{ clipPath: "inset(0 0% 0 0)" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.mainTitle}
                        >
                            BIRD <span>FIREPLACES</span>
                        </motion.h1>
                    </div>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className={styles.subtitle}
                    >
                        PREMIUM FIREPLACES & OUTDOOR
                    </motion.p>
                </div>

                <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: "100px" }}
                    transition={{ delay: 1.5, duration: 2 }}
                    className={styles.scrollIndicator}
                >
                    <div className={styles.line}></div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroV4;
