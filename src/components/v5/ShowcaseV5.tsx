"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './ShowcaseV5.module.css';

const PROJECTS = [
    { 
        id: "01",
        title: "XL900 ETHANOL", 
        image: "/images/galaxy.jpg", 
        specs: ["9.0kW OUTPUT", "UP TO 12H BURNING", "ARCHITECTURAL STEEL"],
        desc: "A masterclass in linear fire design, the XL900 integrates seamlessly into minimal architectural voids."
    },
    { 
        id: "02",
        title: "FLA 4 AUTOMATIC", 
        image: "/images/galio.jpg", 
        specs: ["REMOTE ACCESS", "6 FLAME HEIGHTS", "BEV TECHNOLOGY"],
        desc: "Fully automatic control paired with absolute ethanol safety. The pinnacle of smart fireplace engineering."
    },
    { 
        id: "03",
        title: "IGNITEXL 74", 
        image: "/images/prime.jpg", 
        specs: ["MULTI-COLOR FLAME", "ENERGY EFFICIENT", "ZERO CLEARANCE"],
        desc: "Redefining electric luxury with realistic optics and total climate control for modern living spaces."
    },
    { 
        id: "04",
        title: "GALIO CORTEN", 
        image: "/images/galio-corten.jpg", 
        specs: ["WEATHER RESISTANT", "NATURAL GAS", "OUTDOOR LUXURY"],
        desc: "Architectural outdoor fire feature with an industrial corten steel finish."
    }
];

interface ProjectCardProps {
    proj: {
        id: string;
        title: string;
        image: string;
        specs: string[];
        desc: string;
    };
    index: number;
}

const ProjectCard = ({ proj, index }: ProjectCardProps) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Rotation based on scroll progress
    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
    const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? 10 : -10, 0, index % 2 === 0 ? -10 : 10]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div 
            ref={cardRef}
            style={{ rotateX, rotateY, scale, opacity }}
            className={styles.projectCard}
        >
            <div className={styles.imageBox}>
                <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    fill 
                    className={styles.pImg}
                />
                <div className={styles.overlay}>
                    <span className={styles.cardId}>{proj.id}</span>
                </div>
            </div>
            
            <div className={styles.infoBox}>
                <h3 className={styles.pTitle}>{proj.title}</h3>
                <div className={styles.specLine}></div>
                <div className={styles.specList}>
                    {proj.specs.map((s, idx) => (
                        <span key={idx}>{s}</span>
                    ))}
                </div>
                <p className={styles.pDesc}>{proj.desc}</p>
                <button className={styles.viewBtn}>VIEW DETAILS</button>
            </div>
        </motion.div>
    );
};

const ShowcaseV5 = () => {
    return (
        <section className={styles.uniqueShowcase}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className={styles.label}
                    >
                        ARCHITECTURAL ARCHIVE
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={styles.mainTitle}
                    >
                        Masterpieces in Thermal Engineering
                    </motion.h2>
                </div>

                <div className={styles.projectsGrid}>
                    {PROJECTS.map((proj, i) => (
                        <ProjectCard key={proj.id} proj={proj} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShowcaseV5;



