"use client";

import React from 'react';
import styles from './FooterV4.module.css';

const FooterV4 = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerMain}>
                    <div className={styles.brandSide}>
                        <div className={styles.logo}>BIRD FIREPLACES</div>
                        <p className={styles.tagline}>
                            High-end architectural fireplace solutions. 
                            Designing warmth for exceptional living spaces.
                        </p>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.colHeader}>PRODUCTS</h4>
                        <ul className={styles.linksList}>
                            <li><a href="#">Suspended Fireplaces</a></li>
                            <li><a href="#">Gas Fires</a></li>
                            <li><a href="#">Wood Burning</a></li>
                            <li><a href="#">Electric Collection</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.colHeader}>STUDIO</h4>
                        <ul className={styles.linksList}>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Project Gallery</a></li>
                            <li><a href="#">The Process</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.colHeader}>LEGAL</h4>
                        <ul className={styles.linksList}>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Safety Guides</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>
                        © 2024 BIRD FIREPLACES. ALL RIGHTS RESERVED.
                    </div>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink}>Instagram</a>
                        <a href="#" className={styles.socialLink}>Pinterest</a>
                        <a href="#" className={styles.socialLink}>LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterV4;
