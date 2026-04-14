"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FireCategoryV4.module.css';

const FireCategoryV4 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Pellet Category */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`${styles.card} ${styles.pelletCard}`}
                >
                    <div className={styles.productWrapper}>
                        {/* Fire Video Layer */}
                        <div className={`${styles.fireContainer} ${styles.pelletFire}`}>
                            <video 
                                className={styles.video}
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            >
                                <source src="https://cdn.mczgroup.com/mcz2023/files/CORE.mp4" type="video/mp4" />
                            </video>
                        </div>
                        {/* Reflection Layer */}
                        <div className={`${styles.reflection} ${styles.pelletReflection}`}>
                            <video 
                                className={styles.video}
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            >
                                <source src="https://cdn.mczgroup.com/mcz2023/files/CORE.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <img 
                            src="https://cdn.mczgroup.com/resize-image/600x600_cover/mcz2023/files/pellet-600x600-1-1_2.png" 
                            alt="Pellet Stove" 
                            className={`${styles.productImg} ${styles.pelletImg}`}
                        />
                    </div>
                    
                    <div className={styles.content}>
                        <h2 className={styles.title}>PELLET</h2>
                        <p className={styles.description}>The most efficient and cleanest heating</p>
                        <a href="#" className={styles.button}>
                            DISCOVER THE PRODUCTS
                            <div className={styles.ctaGlow} />
                        </a>
                    </div>
                </motion.div>

                {/* Wood (Legna) Category */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`${styles.card} ${styles.legnaCard}`}
                >
                    <div className={styles.productWrapper}>
                        {/* Fire Video Layer */}
                        <div className={`${styles.fireContainer} ${styles.legnaFire}`}>
                            <video 
                                className={styles.video}
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            >
                                <source src="https://cdn.mczgroup.com/mcz2023/files/qbox.mp4" type="video/mp4" />
                            </video>
                        </div>
                        {/* Reflection Layer */}
                        <div className={`${styles.reflection} ${styles.legnaReflection}`}>
                            <video 
                                className={styles.video}
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            >
                                <source src="https://cdn.mczgroup.com/mcz2023/files/qbox.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <img 
                            src="https://cdn.mczgroup.com/resize-image/600x600_cover/mcz2023/files/wood-600x600-1-1_1.png" 
                            alt="Wood Stove" 
                            className={`${styles.productImg} ${styles.legnaImg}`}
                        />
                    </div>
                    
                    <div className={styles.content}>
                        <h2 className={styles.title}>WOOD</h2>
                        <p className={styles.description}>The charm of traditional warmth</p>
                        <a href="#" className={styles.button}>
                            DISCOVER THE PRODUCTS
                            <div className={styles.ctaGlow} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FireCategoryV4;
