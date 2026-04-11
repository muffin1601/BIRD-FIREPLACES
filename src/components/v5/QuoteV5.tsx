"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './QuoteV5.module.css';
import SectionBackground3D from './SectionBackground3D';

const QuoteV5 = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const text = "A house is only a home when it contains a soul of fire.";
    const words = text.split(" ");

    return (
        <section ref={targetRef} className={styles.kineticSection}>
            <SectionBackground3D />
            
            <div className={styles.container}>
                <div className={styles.quoteBox}>
                    {words.map((word, i) => {
                        // Spread the animation over the first 40% of the scroll
                        const start = (i / words.length) * 0.4;
                        const end = start + 0.15;
                        
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const y = useTransform(scrollYProgress, [start, end], [50, 0]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const rotateX = useTransform(scrollYProgress, [start, end], [45, 0]);
                        
                        return (
                            <motion.span 
                                key={i}
                                style={{ 
                                    opacity, 
                                    y, 
                                    rotateX,
                                    display: 'inline-block',
                                    perspective: 1000
                                }}
                                className={`${styles.word} ${word.toLowerCase() === "soul" ? styles.highlight : ""}`}
                            >
                                {word}&nbsp;
                            </motion.span>
                        );
                    })}
                </div>
                
                <motion.div 
                    style={{ 
                        opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
                        y: useTransform(scrollYProgress, [0.8, 1], [20, 0])
                    }}
                    className={styles.author}
                >
                    — BIRD STUDIO PROMISE
                </motion.div>
            </div>
        </section>
    );
};

export default QuoteV5;
