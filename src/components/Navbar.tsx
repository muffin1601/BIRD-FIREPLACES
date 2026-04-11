"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ShoppingBag, ArrowUpRight } from 'lucide-react';
import styles from './Navbar.module.css';

const MENU_LINKS = [
  { name: 'Ethanol', href: '#ethanol' },
  { name: 'Gas', href: '#gas' },
  { name: 'Electric', href: '#electric' },
  { name: 'Wood', href: '#wood' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

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
            <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={styles.navContainer}>
                    <div className={styles.navLeft}>
                        <button className={styles.menuToggle} onClick={() => setIsOpen(true)}>
                            <Menu size={24} />
                        </button>
                        <div className={styles.navLinks}>
                            <Link href="#ethanol">Ethanol</Link>
                            <Link href="#gas">Gas</Link>
                        </div>
                    </div>

                    <div className={styles.navCenter}>
                        <Link href="/" className={styles.logo}>
                            <Image 
                                src="/LOGO-W.png" 
                                alt="Bird Fireplaces" 
                                width={180} 
                                height={60} 
                                className={styles.logoImg}
                            />
                        </Link>
                    </div>

                    <div className={styles.navRight}>
                        <div className={styles.navLinks}>
                            <Link href="#electric">Electric</Link>
                            <Link href="#wood">Wood</Link>
                        </div>
                        <div className={styles.navIcons}>
                            <Search size={20} className={styles.navIcon} />
                            <ShoppingBag size={20} className={styles.navIcon} />
                        </div>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                        animate={{ clipPath: 'circle(150% at 50% 50%)' }}
                        exit={{ clipPath: 'circle(0% at 50% 50%)' }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className={styles.menuOverlay}
                    >
                        <div className={styles.menuBgText}>BIRD STUDIO</div>
                        
                        <button className={styles.menuClose} onClick={() => setIsOpen(false)}>
                            <X size={32} />
                        </button>

                        <div className={styles.menuContent}>
                            <ul className={styles.menuList}>
                                {MENU_LINKS.map((link, i) => (
                                    <motion.li 
                                        key={link.name} 
                                        className={styles.menuItem}
                                        initial={{ y: 80, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 + (i * 0.1), duration: 0.8, ease: "easeOut" }}
                                    >
                                        <Link 
                                            href={link.href} 
                                            className={styles.menuLink}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
