"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, X, Home } from 'lucide-react';
import styles from './Navbar.module.css';

const MENU_LINKS = [
  { name: 'Ethanol', href: '#ethanol' },
  { name: 'Gas', href: '#gas' },
  { name: 'Electric', href: '#electric' },
  { name: 'Wood', href: '#wood' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const LuxuryHamburger = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
    return (
        <button className={styles.luxuryHamburger} onClick={onClick} aria-label="Toggle Menu">
            <div className={styles.hamburgerLines}>
                <motion.span
                    className={styles.line}
                    animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                    className={styles.line}
                    animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.span
                    className={styles.line}
                    animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: isOpen ? "100%" : "60%" }}
                />
            </div>
        </button>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
            >
                <div className={styles.capsule}>
                    <div className={styles.navLeft}>
                        <LuxuryHamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                        <Link href="/" className={styles.homeButton}>
                            <Home size={18} className={styles.homeIcon} />
                            <span>HOME</span>
                        </Link>
                    </div>

                    <div className={styles.navCenter}>
                        <Link href="/" className={styles.logo}>
                            <Image 
                                src="/LOGO-W.png" 
                                alt="Bird Fireplaces" 
                                width={140} 
                                height={40} 
                                className={styles.logoImg}
                                priority
                            />
                        </Link>
                    </div>

                    <div className={styles.navRight}>
                        <div className={styles.navIcons}>
                            <motion.button whileHover={{ scale: 1.1, y: -2 }} className={styles.iconButton} aria-label="Search">
                                <Search size={20} className={styles.navIcon} />
                            </motion.button>
                            <motion.button whileHover={{ scale: 1.1, y: -2 }} className={styles.iconButton} aria-label="Shop">
                                <ShoppingBag size={20} className={styles.navIcon} />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className={styles.backdrop}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Side Drawer */}
                        <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                            className={styles.menuOverlay}
                        >
                            <div className={styles.menuBgText}>BIRD V5</div>
                            
                            <button className={styles.menuClose} onClick={() => setIsOpen(false)}>
                                <X size={40} strokeWidth={1} />
                            </button>

                            <div className={styles.menuContent}>
                                <div className={styles.menuGrid}>
                                    <div className={styles.menuPrimary}>
                                        <div className={styles.menuLabel}>Explore</div>
                                        <ul className={styles.menuList}>
                                            {MENU_LINKS.map((link, i) => (
                                                <motion.li 
                                                    key={link.name} 
                                                    className={styles.menuItem}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ delay: 0.2 + (i * 0.08), duration: 0.5, ease: "easeOut" }}
                                                >
                                                    <Link 
                                                        href={link.href} 
                                                        className={styles.menuLink}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <span className={styles.menuIndex}>0{i + 1}</span>
                                                        <span className={styles.linkText}>{link.name}</span>
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={styles.menuSecondary}>
                                        <motion.div 
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.6 }}
                                            className={styles.secondarySection}
                                        >
                                            <div className={styles.menuLabel}>Studio</div>
                                            <ul className={styles.secondaryList}>
                                                <li><Link href="#collection" onClick={() => setIsOpen(false)}>Signature Collection</Link></li>
                                                <li><Link href="#bespoke" onClick={() => setIsOpen(false)}>Bespoke Design</Link></li>
                                                <li><Link href="#projects" onClick={() => setIsOpen(false)}>Recent Projects</Link></li>
                                            </ul>
                                        </motion.div>

                                        <motion.div 
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.8 }}
                                            className={styles.secondarySection}
                                        >
                                            <div className={styles.menuLabel}>Connect</div>
                                            <div className={styles.contactInfo}>
                                                <p>New Delhi / India</p>
                                                <p>studio@bird-fireplaces.com</p>
                                                <div className={styles.socialLinks}>
                                                    <span>IG</span>
                                                    <span>FB</span>
                                                    <span>LI</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
