"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Ruler, Diamond, ShieldCheck } from 'lucide-react';
import styles from './StudioPromiseV5.module.css';
import SectionBackground3D from './SectionBackground3D';

const PROMISES = [
  {
    icon: <Ruler size={40} strokeWidth={1} />,
    title: "Expert Craftsmanship",
    desc: "Every fireplace is designed and installed by master craftspeople with decades of experience.",
    color: "#ff6b35"
  },
  {
    icon: <Diamond size={40} strokeWidth={1} />,
    title: "Premium Materials",
    desc: "We source only the finest stone, marble, steel, and glass — materials that age beautifully.",
    color: "#fff"
  },
  {
    icon: <ShieldCheck size={40} strokeWidth={1} />,
    title: "Lifelong Reliability",
    desc: "Every fireplace we install is backed by our comprehensive warranty and dedicated care.",
    color: "#ff6b35"
  }
];

const StudioPromiseV5 = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 90%", "end start"]
  });

  return (
    <section ref={targetRef} className={styles.deckSection}>
      <SectionBackground3D />
      <div className={styles.stickyContainer}>
        <div className={styles.header}>
          <span className={styles.label}>THE STUDIO PROMISE</span>
          <h2>Unmatched Quality</h2>
        </div>

        <div className={styles.cardDeck}>
          {PROMISES.map((promise, i) => {
            const start = i * 0.1;
            const end = start + 0.25;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [start, end], [300, 0]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const rotateX = useTransform(scrollYProgress, [start, end], [45, 0]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

            return (
                <motion.div
                    key={i}
                    style={{
                        y,
                        rotateX,
                        scale,
                        opacity,
                        zIndex: i,
                        perspective: 1200
                    }}
                    className={styles.promiseCard}
                >
                    <div className={styles.iconBox} style={{ color: promise.color }}>
                        {promise.icon}
                    </div>
                    <h3>{promise.title}</h3>
                    <p>{promise.desc}</p>
                    <div className={styles.cardGlow} style={{ background: `radial-gradient(circle at center, ${promise.color}11, transparent 70%)` }}></div>
                </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudioPromiseV5;
