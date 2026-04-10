"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ExperienceV3.module.css';

const STEPS = [
    { title: "RESEARCH", tag: "GEOMETRY", img: "/images/fire-1.png" },
    { title: "FORGING", tag: "MATERIAL", img: "/images/fire-2.png" },
    { title: "PRESENCE", tag: "ENVIRONMENT", img: "/images/fire-3.png" }
];

const ExperienceV3 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {STEPS.map((step, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.card}
                        >
                            <div className={styles.imgWrapper}>
                                <Image src={step.img} alt={step.title} fill className={styles.img} />
                                <div className={styles.mask}></div>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.tag}>{step.tag}</span>
                                <h3 className={styles.title}>{step.title}</h3>
                                <div className={styles.line}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceV3;
