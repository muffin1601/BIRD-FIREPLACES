"use client";

import React from 'react';
import Image from 'next/image';
import styles from './HeroMain.module.css';

const HeroMain = () => {
  return (
    <section className={styles.heroMain}>
      <div className={styles.heroBg}>
        <Image 
          src="https://www.bird-fireplaces.com/images/main-slider/slider1/slide1.jpg" 
          alt="Ember Fireplace" 
          fill 
          priority
          style={{ objectFit: 'cover', opacity: 0.6 }}
        />
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <span className={styles.brandSmall}>ESTABLISHED 2026</span>
        <h1 className={styles.brandLarge}>BIRD</h1>
        <div className={styles.heroDivider}></div>
        <p className={styles.heroSubtitle}>PREMIUM FIREPLACES & OUTDOOR</p>
      </div>
    </section>
  );
};

export default HeroMain;
