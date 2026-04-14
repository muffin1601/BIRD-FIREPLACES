"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ParallaxFeatureV4.module.css';

const ParallaxFeatureV4 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Content Side */}
                <div className={styles.textContent}>
                    <motion.h2 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className={styles.title}
                    >
                        A BETTER STOVE
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className={styles.description}
                    >
                        CHOOSE THE BEST SOLUTION FOR HEATING YOUR ENVIRONMENT.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <a href="#" className={styles.button}>
                            DISCOVER MCZ PELLET STOVES
                            <div className={styles.ctaGlow} />
                        </a>
                    </motion.div>
                </div>

                {/* Right Product Side with Technical Pointers */}
                <div className={styles.productArea}>
                    {/* The Stove Image */}
                    <img 
                        src="https://cdn.mczgroup.com/resize-image/autox800_cover/mcz2023/files/parallax-home-2_1.png" 
                        alt="MCZ Stove" 
                        className={styles.stoveImg}
                    />

                    {/* Integrated Fire Video */}
                    <div className={styles.fireLayer}>
                        <video autoPlay loop muted playsInline className={styles.fireVideo}>
                            <source src="https://cdn.mczgroup.com/mcz2023/files/CORE.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Technical Feature Pointer */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={styles.featuresWrapper}
                    >
                        {/* Example Feature: Remote Management */}
                        <div className={styles.featurePoint} style={{ top: '25%', right: '55%' }}>
                            {/* <div className={styles.pointMarker}></div> */}
                            <div className={styles.featureText}>
                                {/* <div className={styles.featureLine}></div> */}
                                {/* <span className={styles.featureLabel}>GESTIONE E PROGRAMMAZIONE A DISTANZA</span> */}
                                {/* <div className={styles.featureIcon}>
                                    <img src="https://cdn.mczgroup.com/mcz2023/files/9-wifi-doppio.svg" alt="WiFi Icon" />
                                </div> */}
                            </div>
                        </div>
                    </motion.div>

                    {/* Ground Reflection */}
                    <div className={styles.reflection} />
                </div>
            </div>

            <style jsx>{`
                .cta-button-v4 {
                    display: inline-block;
                    padding: 1rem 2.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50px;
                    color: #fff;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .cta-button-v4:hover {
                    background: #fff;
                    color: #000;
                }
            `}</style>
        </section>
    );
};

export default ParallaxFeatureV4;
