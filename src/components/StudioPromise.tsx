"use client";

import React from 'react';
import { Ruler, Diamond, ShieldCheck } from 'lucide-react';
import styles from './StudioPromise.module.css';

const StudioPromise = () => {
  return (
    <section className={styles.studioPromise}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.smallLabel}>WHY US</span>
          <h2 className={styles.mainTitle}>
            The <span className={styles.accentTitle}>Bird</span> Promise
          </h2>
        </div>

        <div className={styles.promiseGrid}>
          <div className={styles.promiseCard}>
            <div className={styles.iconWrapper}>
              <Ruler size={24} strokeWidth={1} />
            </div>
            <h3>Expert Craftsmanship</h3>
            <p>
              Every fireplace is designed and installed by master craftspeople with 
              decades of experience. We treat each project as a unique architectural commission.
            </p>
          </div>

          <div className={`${styles.promiseCard} ${styles.active}`}>
            <div className={styles.iconWrapper}>
              <Diamond size={24} strokeWidth={1} />
            </div>
            <h3>Premium Materials</h3>
            <p>
              We source only the finest stone, marble, steel, and glass — materials 
              that age beautifully and perform flawlessly through decades of use.
            </p>
          </div>

          <div className={styles.promiseCard}>
            <div className={styles.iconWrapper}>
              <ShieldCheck size={24} strokeWidth={1} />
            </div>
            <h3>Lifelong Reliability</h3>
            <p>
              Every fireplace we install is backed by our comprehensive warranty. 
              Our after-care team is always available to ensure your complete satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioPromise;
