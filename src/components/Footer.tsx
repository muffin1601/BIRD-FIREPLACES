"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerV2}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <Image 
                src="/LOGO-W.png" 
                alt="Bird Fireplaces" 
                width={150} 
                height={50} 
                className={styles.footerLogoImg}
              />
            </div>
            <p className={styles.footerBio}>
              Crafting exceptional fireplaces since 1985. Where 
              warmth meets architecture.
            </p>
          </div>

          <div className={styles.footerNav}>
            <h4 className={styles.footerTitle}>COLLECTIONS</h4>
            <ul>
              <li><Link href="#">Manual Fireplaces</Link></li>
              <li><Link href="#">Gas Fireplaces</Link></li>
              <li><Link href="#">Electric Fireplaces</Link></li>
              <li><Link href="#">Suspended Fireplaces</Link></li>
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h4 className={styles.footerTitle}>CONTACT</h4>
            <ul>
              <li>09999849999</li>
              <li>office@bird-fireplaces.com</li>
              <li>343, Sultanpur, New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomLine}></div>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>© 2026 Bird Fireplaces. All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
