"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './ShowcaseV4.module.css';

const DATA = [
    { title: "ETHANOL XL900", code: "ETH_900", img: "/images/fire-1.png" },
    { title: "GAS MONROE", code: "GAS_440", img: "/images/fire-2.png" },
    { title: "WOOD GYROFOCUS", code: "WD_FOC", img: "/images/fire-3.png" },
    { title: "ELECTRIC IGNITE", code: "ELE_74", img: "/images/fire-1.png" },
];

const ShowcaseV4 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.stripContainer}>
                    {DATA.map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ flex: 1 }}
                            whileHover={{ flex: 2 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.strip}
                        >
                            <Image src={item.img} alt={item.title} fill className={styles.img} />
                            <div className={styles.overlay}>
                                <div className={styles.top}>
                                    <span className={styles.code}>{item.code}</span>
                                    <h3 className={styles.title}>{item.title}</h3>
                                </div>
                                <div className={styles.bottom}>
                                     <div className={styles.scanLine}></div>
                                     <span className={styles.status}>SCANNING_OBJECT...</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShowcaseV4;
