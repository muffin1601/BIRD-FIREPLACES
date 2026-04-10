"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './HeroV3.module.css';

const HeroV3 = () => {
    return (
        <section className={styles.heroWrapper}>
            <div className={styles.ambientLight}></div>
            <div className={styles.container}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={styles.imageFrame}
                >
                    <Image 
                        src="https://www.bird-fireplaces.com/images/main-slider/slider1/slide1.jpg" 
                        alt="Minimalist Luxury" 
                        fill 
                        className={styles.heroImg}
                    />
                </motion.div>

                <div className={styles.textOverlay}>
                    <div style={{ overflow: 'hidden' }}>
                        <motion.span 
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.label}
                        >
                            ESTABLISHED 2026
                        </motion.span>
                    </div>
                    
                    <div style={{ overflow: 'hidden', marginTop: '1rem' }}>
                        <motion.h1 
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.title}
                        >
                            BIRD <br/><span>FIREPLACES</span>
                        </motion.h1>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <p className={styles.desc}>
                            PREMIUM FIREPLACES & OUTDOOR
                        </p>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.cta}
                        >
                            DISCOVER THE COLLECTION
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroV3;
