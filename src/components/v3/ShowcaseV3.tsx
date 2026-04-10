"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './ShowcaseV3.module.css';

const ITEMS = [
    { id: "01", title: "ETHANOL LUXE", desc: "The pinnacle of ventless design, where code and craft meet.", img: "https://bird-fireplaces.com/images/valentino.jpg" },
    { id: "02", title: "ARTISAN WOOD", desc: "Hand-carved architectural stone for the timeless home.", img: "https://bird-fireplaces.com/images/wood-burning/CosmoFocus/CosmoFocus1.jpg" },
    { id: "03", title: "GAS VALENTINO", desc: "Engineering meets elegance in our signature gas series.", img: "https://bird-fireplaces.com/images/gallery/portrait/pic2b.jpg" },
];

const ShowcaseV3 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % ITEMS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.spotlight}>
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.imageWrapper}
                        >
                            <Image src={ITEMS[activeIndex].img} alt={ITEMS[activeIndex].title} fill className={styles.img} />
                        </motion.div>
                    </AnimatePresence>

                    <div className={styles.content}>
                        <motion.span 
                            key={`num-${activeIndex}`}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className={styles.pNum}
                        >
                            {ITEMS[activeIndex].id}
                        </motion.span>
                        <motion.h2 
                            key={`title-${activeIndex}`}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className={styles.pTitle}
                        >
                            {ITEMS[activeIndex].title}
                        </motion.h2>
                        <motion.p 
                            key={`desc-${activeIndex}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className={styles.pDesc}
                        >
                            {ITEMS[activeIndex].desc}
                        </motion.p>
                    </div>
                </div>

                <div className={styles.nav}>
                    {ITEMS.map((_, i) => (
                        <div 
                            key={i} 
                            onClick={() => setActiveIndex(i)}
                            className={`${styles.navDot} ${activeIndex === i ? styles.active : ''}`}
                        >
                            <div className={styles.dotLineBase}>
                                {activeIndex === i && (
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 5, ease: "linear" }}
                                        className={styles.dotLineActive}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShowcaseV3;
