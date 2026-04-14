"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './LookbookV4.module.css';

const projects = [
    {
        id: 1,
        name: "SOLSTICE HOUSE",
        location: "LONDON, UK",
        img: "/images/pic1a.jpg",
        hotspot: { top: '65%', left: '35%' },
        desc: "A frameless linear fireplace integrated into raw concrete architecture."
    },
    {
        id: 2,
        name: "INDUSTRIAL LOFT",
        location: "DELHI, IN",
        img: "/images/bathycafocuslarge1.jpg",
        hotspot: { top: '45%', left: '55%' },
        desc: "Suspended steel centerpieces creating a 360-degree warmth experience."
    },
    {
        id: 3,
        name: "MODERN VILLA",
        location: "DUBAI, UAE",
        img: "/images/galio.jpg",
        hotspot: { top: '55%', left: '65%' },
        desc: "Outdoor linear fire features for premium terrace environments."
    },
    {
        id: 4,
        name: "THE ATRIUM",
        location: "TORONTO, CA",
        img: "/images/pic3c.jpg",
        hotspot: { top: '40%', left: '50%' },
        desc: "Bespoke corner solutions for high-end urban living."
    },
    {
        id: 5,
        name: "STUDIO PROJECT",
        location: "MUMBAI, IN",
        img: "/images/pic2b.jpg",
        hotspot: { top: '30%', left: '40%' },
        desc: "Luxury residential hearth with bookmatched stone surrounds."
    }
];

const LookbookV4 = () => {
    const [activeMarker, setActiveMarker] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>PROJECT LOOKBOOK</h2>

                <div className={styles.bentGrid}>
                    {projects.map((project, index) => (
                        <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`${styles.tile} ${styles['tile' + (index + 1)]}`}
                        >
                            <img src={project.img} alt={project.name} className={styles.tileImg} />
                            
                            <div className={styles.button}>
                                Learn More
                                <div className={styles.ctaGlow} />
                            </div>

                            <div className={styles.hud}>
                                <h3 className={styles.projectName}>{project.name}</h3>
                                <p className={styles.projectLoc}>{project.location}</p>
                            </div>

                            {/* Circular Tooltip Logic */}
                            <div 
                                className={styles.marker}
                                style={{ top: project.hotspot.top, left: project.hotspot.left }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveMarker(activeMarker === project.id ? null : project.id);
                                }}
                            >
                                <div className={styles.markerDot} />
                                
                                <div className={`${styles.tooltip} ${activeMarker === project.id ? styles.tooltipActive : ''}`}>
                                    <span className={`${styles.inlay} ${styles.topLeft}`} />
                                    <span className={`${styles.inlay} ${styles.topRight}`} />
                                    <span className={`${styles.inlay} ${styles.bottomLeft}`} />
                                    <span className={`${styles.inlay} ${styles.bottomRight}`} />
                                    
                                    <div className={styles.tooltipTitle}>TECH DETAIL</div>
                                    <p className={styles.tooltipText}>{project.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LookbookV4;
