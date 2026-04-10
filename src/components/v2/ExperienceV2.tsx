"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './ExperienceV2.module.css';

const ExperienceV2 = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    return (
        <section ref={sectionRef} className={styles.expSection}>
            <div className={styles.bgGrain}></div>
            
            <div className={styles.mainGrid}>
                <div className={styles.leftContent}>
                    <motion.div style={{ y: y1 }} className={styles.floatingTag}>
                        <span>THE BIRD EXPERIENCE</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.title}
                    >
                        CRAFTED FOR THE <br/>
                        <span className={styles.orangeText}>EXTRAORDINARY</span> <br/>
                        HOME
                    </motion.h2>

                    <p className={styles.desc}>
                        Born from obsession with craft and light, Bird fireplaces are architectural statements 
                        that transform any space into a living sanctuary — warmth elevated to high design.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <h3>15</h3>
                            <p>Years of Artistry</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>500+</h3>
                            <p>Bespoke Installs</p>
                        </div>
                    </div>
                </div>

                <div className={styles.rightContent}>
                    <motion.div style={{ scale }} className={styles.imageFeatured}>
                        <Image 
                            src="/images/experience-bg.png" 
                            alt="Luxury Craft" 
                            fill 
                            className={styles.img}
                        />
                        <motion.div style={{ y: y2 }} className={styles.overlayText}>
                            SOPHISTICATION
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={styles.massiveText}
            >
                EST. 2026
            </motion.div>
        </section>
    );
};

export default ExperienceV2;
