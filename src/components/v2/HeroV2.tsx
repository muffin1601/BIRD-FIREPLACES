"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './HeroV2.module.css';

const HeroV2 = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className={styles.heroCanvas}>
            <div className={styles.splitBackground}>
                <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: isHovered ? "-10%" : "0%" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.leftPane}
                >
                    <Image 
                        src="https://www.bird-fireplaces.com/images/main-slider/slider1/slide1.jpg" 
                        alt="" 
                        fill 
                        className={styles.bgImg}
                    />
                </motion.div>
                <motion.div 
                    initial={{ x: "100%" }}
                    animate={{ x: isHovered ? "10%" : "0%" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className={styles.rightPane}
                >
                     <Image 
                        src="/images/hero-bg.png" 
                        alt="" 
                        fill 
                        className={styles.bgImg}
                    />
                </motion.div>
            </div>

            <div className={styles.contentOverlay}>
                <motion.div 
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className={styles.centerBox}
                >
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.branding}
                    >
                        PREMIUM FIREPLACES & OUTDOOR
                    </motion.span>
                    <h1 className={styles.mainHeading}>
                        BIRD
                    </h1>
                    <div className={styles.ctaWrapper}>
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.exploreBtn}
                        >
                            THE ARCHIVE
                        </motion.button>
                        <div className={styles.line}></div>
                        <span className={styles.year}>ESTABLISHED 2026</span>
                    </div>
                </motion.div>
            </div>

            <div className={styles.sideDecor}>
                <span>SCROLL TO DISCOVER</span>
            </div>
        </section>
    );
};

export default HeroV2;
