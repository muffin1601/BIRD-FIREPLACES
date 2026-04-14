"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './RangeSelectorV4.module.css';

const RangeSelectorV4 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Indoor Category */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.categoryGroup}
                >
                    <h2 className={styles.categoryTitle}>INDOOR</h2>
                    <div className={styles.subcategories}>
                        <span className={styles.subItem}>GAS</span>
                        <div className={styles.sep} />
                        <span className={styles.subItem}>WOOD</span>
                        <div className={styles.sep} />
                        <span className={styles.subItem}>ELECTRIC</span>
                    </div>
                </motion.div>

                {/* Vertical Divider */}
                <div className={styles.divider}>
                    <span className={styles.dividerText}>OUR RANGE</span>
                </div>

                {/* Outdoor Category */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.categoryGroup}
                >
                    <h2 className={styles.categoryTitle}>OUTDOOR</h2>
                    <div className={styles.subcategories}>
                        <span className={styles.subItem}>GAS</span>
                        <div className={styles.sep} />
                        <span className={styles.subItem}>WOOD</span>
                        <div className={styles.sep} />
                        <span className={styles.subItem}>ELECTRIC</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RangeSelectorV4;
