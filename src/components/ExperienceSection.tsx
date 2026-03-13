"use client";

import React from 'react';
import Image from 'next/image';
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.experienceBg}>
        <Image 
          src="/images/experience-bg.png" 
          alt="Luxury Interior" 
          fill 
          style={{ objectFit: 'cover', opacity: 0.5 }}
        />
        <div className={styles.experienceOverlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.experienceContent}>
          <span className={styles.experienceLabel}>THE BIRD EXPERIENCE</span>
          <h2 className={styles.experienceTitle}>
            Crafted for the<br />
            extraordinary home.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
