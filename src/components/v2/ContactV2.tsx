"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactV2.module.css';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const ContactV2 = () => {
    return (
        <section className={styles.contactWrapper}>
            <div className={styles.container}>
                <div className={styles.leftCol}>
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className={styles.label}
                    >
                        START THE DIALOGUE
                    </motion.span>
                    <h2 className={styles.title}>SPEAK WITH <br/><span>OUR DESIGNERS</span></h2>
                    <p className={styles.desc}>Whether you're an architect, interior designer, or a private owner, we are here to translate your vision into a centerpiece.</p>
                    
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <div className={styles.icon}><Phone size={20} /></div>
                            <div className={styles.infoText}>
                                <span>CALL US</span>
                                <p>+91 99998 49999</p>
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div className={styles.icon}><Mail size={20} /></div>
                            <div className={styles.infoText}>
                                <span>EMAIL</span>
                                <p>office@bird-fireplaces.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.rightCol}>
                    <form className={styles.form}>
                        <div className={styles.field}>
                            <input type="text" placeholder="NAME" />
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.field}>
                            <input type="email" placeholder="EMAIL" />
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.field}>
                            <select defaultValue="">
                                <option value="" disabled>INTERESTED IN</option>
                                <option value="gas">GAS FIREPLACES</option>
                                <option value="wood">WOOD BURNING</option>
                                <option value="ethanol">ETHANOL SERIES</option>
                            </select>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.field}>
                            <textarea placeholder="MESSAGE" rows={4}></textarea>
                            <div className={styles.line}></div>
                        </div>
                        <button className={styles.submitBtn}>
                            SUBMIT ENQUIRY
                            <ArrowRight size={18} />
                        </button>
                    </form>
                </div>
            </div>
            
            <div className={styles.footerDecor}>
                <span className={styles.city}>NEW DELHI</span>
                <span className={styles.address}>343, SULTANPUR, MG ROAD</span>
            </div>
        </section>
    );
};

export default ContactV2;
