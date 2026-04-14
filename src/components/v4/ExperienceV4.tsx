"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './ExperienceV4.module.css';

const PROCESS_STEPS = [
    {
        tag: "01 - WD",
        title: "WORKFLOW REDESIGN",
        description: "We map how work actually happens across people, systems, and handoffs. We redesign those workflows around the fireplace experience so software — with human oversight — can execute the work end-to-end.",
        iconType: "flame"
    },
    {
        tag: "02 - SC",
        title: "SYSTEM CONSTRUCTION",
        description: "We build the software that runs the redesigned workflow in production. This includes unified data, encoded business logic, AI reasoning, and integration with existing systems of record.",
        iconType: "hearth"
    },
    {
        tag: "03 - CC",
        title: "COMMAND AND CONTROL",
        description: "We operate the systems and take responsibility for their performance over time. Software executes the work continuously; humans oversee exceptions and approvals.",
        iconType: "glow"
    }
];

const PremiumIcon = ({ type }: { type: string }) => {
    // Elegant, fine-lined icons for a luxurious look
    const icons: Record<string, React.ReactNode> = {
        "flame": (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M50 5C50 5 30 35 30 55C30 66.0457 38.9543 75 50 75C61.0457 75 70 66.0457 70 55C70 35 50 5 50 5Z" />
                <path d="M50 25C50 25 38 43 38 55C38 61.6274 43.3726 67 50 67C56.6274 67 62 61.6274 62 55C62 43 50 25 50 25Z" />
                <path d="M20 90H80" strokeWidth="1" opacity="0.5" />
                <path d="M30 82H70" strokeWidth="1" opacity="0.3" />
            </svg>
        ),
        "hearth": (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="15" y="65" width="70" height="25" rx="2" />
                <path d="M25 65V30C25 21.7157 31.7157 15 40 15H60C68.2843 15 75 21.7157 75 30V65" />
                <path d="M50 40V55" strokeWidth="1" />
                <path d="M40 45V55" strokeWidth="1" />
                <path d="M60 45V55" strokeWidth="1" />
            </svg>
        ),
        "glow": (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="50" cy="50" r="35" strokeDasharray="4 4" opacity="0.3" />
                <circle cx="50" cy="50" r="25" />
                <path d="M50 10V20" />
                <path d="M50 80V90" />
                <path d="M10 50H20" />
                <path d="M80 50H90" />
                <path d="M21.7157 21.7157L28.7868 28.7868" />
                <path d="M71.2132 71.2132L78.2843 78.2843" />
                <path d="M21.7157 78.2843L28.7868 71.2132" />
                <path d="M71.2132 28.7868L78.2843 21.7157" />
            </svg>
        )
    };

    return <div className={styles.iconWrapper}>{icons[type]}</div>;
};

const ExperienceV4 = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 0.6], [600, 0]);
    const y2 = useTransform(scrollYProgress, [0.1, 0.75], [900, 0]);
    const y3 = useTransform(scrollYProgress, [0.2, 0.9], [1200, 0]);
    
    const opa1 = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
    const opa2 = useTransform(scrollYProgress, [0.1, 0.55], [0, 1]);
    const opa3 = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);

    const transforms = [y1, y2, y3];
    const opacities = [opa1, opa2, opa3];

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.stickyContainer}>
                <div className={styles.bgParent}>
                    <Image 
                        src="https://www.bird-fireplaces.com/images/main-slider/slider1/slide1.jpg" 
                        alt="Background" 
                        fill 
                        className={styles.bgImg} 
                        priority
                    />
                </div>
                
                <div className={styles.cardGrid}>
                    {PROCESS_STEPS.map((step, i) => (
                        <motion.div 
                            key={i} 
                            style={{ y: transforms[i], opacity: opacities[i] }}
                            className={styles.card}
                        >
                            <div className={styles.header}>
                                <div className={styles.tag}>{step.tag}</div>
                                <h3 className={styles.title}>{step.title}</h3>
                            </div>

                            <div className={styles.logoArea}>
                                <PremiumIcon type={step.iconType} />
                            </div>

                            <div className={styles.description}>
                                <p>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceV4;
