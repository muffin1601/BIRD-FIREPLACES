"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './FooterV5.module.css';

const FooterV5 = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topRow}>
                    <div className={styles.brandSide}>
                        <Link href="/" className={styles.logo}>
                            <Image 
                                src="/LOGO-W.png" 
                                alt="Bird Fireplaces" 
                                width={180} 
                                height={60} 
                                className={styles.logoImg}
                            />
                        </Link>
                        <p className={styles.bio}>
                            Synthesizing thermal engineering with architectural purity since 1985.
                        </p>
                    </div>
                    
                    <div className={styles.navSide}>
                        <div className={styles.navGroup}>
                            <h3>ARCHITECTURE</h3>
                            <ul>
                                <li><Link href="#">MODULAR RANGE</Link></li>
                                <li><Link href="#">SUSPENDED ELEMENTS</Link></li>
                                <li><Link href="#">LINEAR GAS</Link></li>
                                <li><Link href="#">ETHANOL CORE</Link></li>
                            </ul>
                        </div>
                        <div className={styles.navGroup}>
                            <h3>NETWORK</h3>
                            <ul>
                                <li><Link href="#">STUDIO PROMISE</Link></li>
                                <li><Link href="#">TECHNICAL DATA</Link></li>
                                <li><Link href="#">SPECIFICATIONS</Link></li>
                                <li><Link href="#">COMMUNITY</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomRow}>
                    <div className={styles.line}></div>
                    <div className={styles.copyrightGrid}>
                        <div className={styles.copyText}>
                            © 2026 BIRD FIREPLACES / ALL SYSTEMS OPERATIONAL
                        </div>
                        <div className={styles.legalLinks}>
                            <Link href="#">PRIVACY PROTOCOL</Link>
                            <Link href="#">TERMS OF ENGAGEMENT</Link>
                        </div>
                        <div className={styles.socials}>
                            <Link href="#">INSTAGRAM</Link>
                            <Link href="#">LINKEDIN</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterV5;
