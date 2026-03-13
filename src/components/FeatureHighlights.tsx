"use client";

import React from 'react';
import styles from './FeatureHighlights.module.css';

const FeatureHighlights = () => {
  return (
    <section className={styles.highlightsSection}>
      <div className={styles.container}>
        <div className={styles.highlightsGrid}>
          <div className={styles.highlightItem}>
            <div className={styles.highlightLine}></div>
            <h3>Bespoke Craftsmanship</h3>
            <p>Hand-finished to perfection</p>
          </div>
          <div className={styles.highlightItem}>
            <div className={styles.highlightLine}></div>
            <h3>Architectural Precision</h3>
            <p>Engineered for endurance</p>
          </div>
          <div className={styles.highlightItem}>
            <div className={styles.highlightLine}></div>
            <h3>Timeless Design</h3>
            <p>Form that transcends trends</p>
          </div>
        </div>

        <div className={styles.brandBottom}>
          <div className={styles.brandLineGroup}>
            <div className={styles.brandLine}></div>
            <h2 className={styles.brandName}>B I R D</h2>
            <div className={styles.brandLine}></div>
          </div>
          <p className={styles.brandTagline}>FIRE. CRAFT. PRESENCE.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
