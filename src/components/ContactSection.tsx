"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.smallLabel}>GET IN TOUCH</span>
          <h2 className={styles.mainTitle}>
            Start Your <span className={styles.accentTitle}>Project</span>
          </h2>
          <p className={styles.headerDesc}>
            Tell us about your space and vision. Our design team will craft the perfect 
            fireplace solution for you.
          </p>
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
                  <input type="text" placeholder="+1 (555) 000-0000" />
                </div>
                <div className={styles.formGroup}>
                  <label>FIREPLACE TYPE *</label>
                  <select>
                    <option>Select a type</option>
                    <option>Manual</option>
                    <option>Gas</option>
                    <option>Electric</option>
                    <option>Suspended</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>YOUR MESSAGE *</label>
                <textarea rows={5} placeholder="Tell us about your space, style preferences, and any specific requirements..."></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Send Enquiry</button>
            </form>
          </div>

          <div className={styles.showroomInfo}>
            <h3 className={styles.showroomTitle}>Visit Our Showroom</h3>
            
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}><Phone size={18} strokeWidth={1.5} /></div>
              <div>
                <span className={styles.infoLabel}>PHONE</span>
                <p>09999849999</p>
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
              <span className={styles.hoursLabel}>SHOWROOM HOURS</span>
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
                <span>By Appointment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
