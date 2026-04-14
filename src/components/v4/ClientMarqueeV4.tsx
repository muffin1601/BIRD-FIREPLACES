"use client";

import React from 'react';
import Image from 'next/image';
import styles from './ClientMarqueeV4.module.css';

const ClientMarqueeV4 = () => {
    // We'll use 10 instances of the logo for the marquee loop
    const displayList = Array.from({ length: 15 });

    return (
        <section className={styles.section}>
            <div className={styles.title}>BIRD STUDIO PARTNERSHIPS</div>
            
            <div className={styles.marquee}>
                <div className={styles.track}>
                    {displayList.map((_, i) => (
                        <div key={i} className={styles.logoBox}>
                            <div className={styles.logoWrapper}>
                                <Image 
                                    src="/LOGO-W.png" 
                                    alt="Bird Logo" 
                                    width={120} 
                                    height={40} 
                                    className={styles.logoImg}
                                />
                            </div>
                            <div className={styles.dot} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientMarqueeV4;
