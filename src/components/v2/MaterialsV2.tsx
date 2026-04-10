"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './MaterialsV2.module.css';

const MATERIALS = [
    { title: "EXPERT CRAFTSMANSHIP", code: "01", desc: "Every fireplace is designed and installed by master craftspeople with decades of experience." },
    { title: "PREMIUM MATERIALS", code: "02", desc: "We source only the finest stone, marble, steel, and glass — materials that age beautifully." },
    { title: "LIFELONG RELIABILITY", code: "03", desc: "Every fireplace we install is backed by our comprehensive warranty and after-care team." },
];

const MaterialsV2 = () => {
    return (
        <section className={styles.materialSection}>
            <div className={styles.header}>
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={styles.tag}
                >
                    TECHNICAL EXCELLENCE
                </motion.span>
                <h2 className={styles.title}>THE ANATOMY OF <br/><span className={styles.orange}>PERFECTION</span></h2>
            </div>

            <div className={styles.grid}>
                {MATERIALS.map((m, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className={styles.card}
                    >
                        <div className={styles.cardHeader}>
                            <span className={styles.code}>{m.code}</span>
                            <div className={styles.line}></div>
                        </div>
                        <h3 className={styles.mTitle}>{m.title}</h3>
                        <p className={styles.mDesc}>{m.desc}</p>
                        <div className={styles.cardBg}></div>
                    </motion.div>
                ))}
            </div>
            
            <div className={styles.ctaImmersive}>
                <div className={styles.ctaSplit}>
                    <div className={styles.ctaLeft}>
                        <Image 
                            src="https://bird-fireplaces.com/images/gallery/portrait/pic3c.jpg" 
                            alt="The Art of Fire" 
                            fill 
                            className={styles.ctaImg}
                        />
                        <div className={styles.ctaImgOverlay}></div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={styles.ctaRight}
                    >
                        <div className={styles.ctaContentSub}>
                            <span className={styles.ctaLabel}>PRIVATE CONSULTATION</span>
                            <h2 className={styles.ctaTitle}>BEYOND <br/>THE HEARTH</h2>
                            <p className={styles.ctaDesc}>Our master designers translate architectural dreams into living reality. Every project is a bespoke journey of fire and form.</p>
                            <button className={styles.ctaButtonLarge}>
                                BOOK A SESSION
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MaterialsV2;
