"use client";

import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ContactV5.module.css';
import SectionBackground3D from './SectionBackground3D';

const ContactV5 = () => {
    return (
        <section className={styles.contactSection}>
            <SectionBackground3D />
            
            <div className={styles.container}>
                <div className={styles.contentGrid}>
                    <div className={styles.formSide}>
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className={styles.glassCard}
                        >
                            <span className={styles.label}>TRANSMIT ENQUIRY</span>
                            <h2 className={styles.title}>Project Genesis</h2>
                            <p className={styles.description}>
                                Begin the transformation of your architectural space with our design engineering team.
                            </p>

                            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.inputGroup}>
                                    <input type="text" placeholder="IDENTITY" required />
                                    <div className={styles.line}></div>
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="email" placeholder="COMMUNICATION CHANNEL (EMAIL)" required />
                                    <div className={styles.line}></div>
                                </div>
                                <div className={styles.inputGroup}>
                                    <textarea rows={4} placeholder="CONCEPTUAL VISION"></textarea>
                                    <div className={styles.line}></div>
                                </div>
                                <button type="submit" className={styles.submitBtn}>
                                    <span>INITIATE CONTACT</span>
                                    <Send size={16} />
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    <div className={styles.infoSide}>
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={styles.infoContent}
                        >
                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><Phone size={24} /></div>
                                <div className={styles.infoText}>
                                    <span className={styles.infoLabel}>DIRECT LINE</span>
                                    <p>+91 99998 49999</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><Mail size={24} /></div>
                                <div className={styles.infoText}>
                                    <span className={styles.infoLabel}>NETWORK ADDRESS</span>
                                    <p>office@bird-fireplaces.com</p>
                                </div>
                            </div>

                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><MapPin size={24} /></div>
                                <div className={styles.infoText}>
                                    <span className={styles.infoLabel}>PHYSICAL COORDINATES</span>
                                    <p>343, Sultanpur, MG Road, New Delhi 110030</p>
                                </div>
                            </div>

                            <div className={styles.availabilityCard}>
                                <h3>OPERATIONAL STATUS</h3>
                                <div className={styles.statusRow}>
                                    <span>MON - FRI</span>
                                    <span>09:00 - 18:00</span>
                                </div>
                                <div className={styles.statusRow}>
                                    <span>SAT - SUN</span>
                                    <span>BY RESERVATION</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactV5;
