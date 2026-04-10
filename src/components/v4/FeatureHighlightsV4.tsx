"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeatureHighlightsV4.module.css';

const FeatureHighlightsV4 = () => {
    return (
        <section className={styles.section}>
            <div className={styles.gridOverlay}></div>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <span className={styles.tag}>MOD_01</span>
                        <h3>CRAFT_ENGINE</h3>
                        <p>ST_FIX: HAND_FINISHED_PRECISION</p>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.tag}>MOD_02</span>
                        <h3>ARCH_STRUCT</h3>
                        <p>SY_INT: SEAMLESS_INTEGRATION</p>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.tag}>MOD_03</span>
                        <h3>TIME_FLOW</h3>
                        <p>TR_PRES: ELEMENTAL_FORM_v1.0</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureHighlightsV4;
