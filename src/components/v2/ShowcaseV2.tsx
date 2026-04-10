"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import styles from './ShowcaseV2.module.css';

const PRODUCTS = [
    {
        id: "01",
        name: "XL900 Ethanol Burner",
        tag: "Ethanol",
        image: "/images/fire-1.png",
        desc: "The core of many stunning Ethanol fireplaces, the XL900 is a versatile and elegant solution."
    },
    {
        id: "02",
        name: "FLA 4 Automatic",
        tag: "Ethanol",
        image: "/images/fire-2.png",
        desc: "The most advanced automatic ethanol fireplace available today, featuring BEV technology."
    },
    {
        id: "03",
        name: "IgniteXL 74 Linear",
        tag: "Electric",
        image: "/images/fire-3.png",
        desc: "The IgniteXL stands apart as more lifelike and visually stunning than anything before it."
    },
    {
        id: "04",
        name: "Gyrofocus Suspended",
        tag: "Wood",
        image: "/images/fire-2.png",
        desc: "The first suspended, 360° pivoting fireplace. An international design icon."
    }
];

const ShowcaseV2 = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const containerRef = useRef(null);
    
    return (
        <section className={styles.runwaySection}>
            <div className={styles.stickyContainer}>
                <div className={styles.bgImgs}>
                    {PRODUCTS.map((p, i) => (
                        <motion.div 
                            key={p.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: activeIdx === i ? 0.4 : 0 }}
                            transition={{ duration: 1 }}
                            className={styles.bgWrap}
                        >
                            <Image src={p.image} alt="" fill className={styles.bgImg} />
                        </motion.div>
                    ))}
                    <div className={styles.overlay}></div>
                </div>

                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.productInfo}>
                            <motion.span 
                                key={`tag-${activeIdx}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={styles.pTag}
                            >
                                {PRODUCTS[activeIdx].tag}
                            </motion.span>
                            <motion.h2 
                                key={`name-${activeIdx}`}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={styles.pName}
                            >
                                {PRODUCTS[activeIdx].name}
                            </motion.h2>
                            <motion.p 
                                key={`desc-${activeIdx}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={styles.pDesc}
                            >
                                {PRODUCTS[activeIdx].desc}
                            </motion.p>
                            <motion.button 
                                whileTap={{ scale: 0.95 }}
                                className={styles.pBtn}
                            >
                                EXPLORE SERIES
                            </motion.button>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.navList}>
                            {PRODUCTS.map((p, i) => (
                                <div 
                                    key={p.id}
                                    onMouseEnter={() => setActiveIdx(i)}
                                    className={`${styles.navItem} ${activeIdx === i ? styles.active : ''}`}
                                >
                                    <span className={styles.navIdx}>{p.id}</span>
                                    <span className={styles.navName}>{p.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseV2;
