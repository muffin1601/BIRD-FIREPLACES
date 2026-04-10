"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ExperienceV4.module.css';

const STEPS = [
    { id: "SYS_01", title: "GEOMETRY", value: "99.8%", img: "/images/fire-1.png" },
    { id: "SYS_02", title: "THERMAL", value: "14.2kW", img: "/images/fire-2.png" },
    { id: "SYS_03", title: "INTEGRATION", value: "SEAMLESS", img: "/images/fire-3.png" }
];

const ExperienceV4 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {STEPS.map((step, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.card}
                        >
                            <div className={styles.meta}>
                                <span className={styles.id}>{step.id}</span>
                                <h3 className={styles.title}>{step.title}</h3>
                            </div>
                            
                            <div className={styles.imgWrapper}>
                                <Image src={step.img} alt={step.title} fill className={styles.img} />
                                <div className={styles.vignette}></div>
                                <div className={styles.dataLabel}>{step.value}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceV4;
