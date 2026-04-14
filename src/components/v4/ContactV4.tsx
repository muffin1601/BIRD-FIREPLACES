"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ContactV4.module.css';

const ContactV4 = () => {
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={styles.smallLabel}
                    >
                        GET IN TOUCH
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={styles.mainTitle}
                    >
                        Start Your <span style={{ color: '#d35400' }}>Project</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={styles.headerDesc}
                    >
                        Tell us about your space and vision. Our design team will craft the perfect 
                        fireplace solution for you.
                    </motion.p>
                </div>

                <div className={styles.contactGrid}>
                    <div className={styles.contactForm}>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>FULL NAME *</label>
                                    <input type="text" placeholder="John Smith" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>EMAIL ADDRESS *</label>
                                    <input type="email" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label>PHONE (OPTIONAL)</label>
                                    <input type="text" placeholder="+91 99999 00000" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>FIREPLACE TYPE *</label>
                                    <select>
                                        <option>Select a type</option>
                                        <option>Pellet</option>
                                        <option>Wood</option>
                                        <option>Gas</option>
                                        <option>Electric</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label>YOUR MESSAGE *</label>
                                <textarea rows={5} placeholder="Tell us about your space..."></textarea>
                            </div>
                            <button type="submit" className={styles.submitBtn}>Send Enquiry</button>
                        </form>
                    </div>

                    <div className={styles.showroomInfo}>
                        <h3 className={styles.showroomTitle}>Visit Our Studio</h3>
                        
                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}><Phone size={18} strokeWidth={1.5} /></div>
                            <div>
                                <span className={styles.infoLabel}>PHONE</span>
                                <p>+91 9999849999</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}><Mail size={18} strokeWidth={1.5} /></div>
                            <div>
                                <span className={styles.infoLabel}>EMAIL</span>
                                <p>office@bird-fireplaces.com</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoIcon}><MapPin size={18} strokeWidth={1.5} /></div>
                            <div>
                                <span className={styles.infoLabel}>ADDRESS</span>
                                <p>343, Sultanpur, MG road, New Delhi 110030</p>
                            </div>
                        </div>

                        <div className={styles.hoursCard}>
                            <span className={styles.hoursLabel}>STUDIO HOURS</span>
                            <div className={styles.hoursRow}>
                                <span>Monday – Friday</span>
                                <span>9am – 6pm</span>
                            </div>
                            <div className={styles.hoursRow}>
                                <span>Saturday</span>
                                <span>10am – 4pm</span>
                            </div>
                            <div className={styles.hoursRow}>
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactV4;
