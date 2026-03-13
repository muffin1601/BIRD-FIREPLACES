"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.navLeft}>
          <button className={styles.menuToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className={styles.navLinks}>
            <Link href="#ethanol">Ethanol</Link>
            <Link href="#gas">Gas</Link>
            <Link href="#electric">Electric</Link>
            <Link href="#wood">Wood</Link>
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
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <div className={styles.navIcons}>
            <Search size={20} className={styles.navIcon} />
            <ShoppingBag size={20} className={styles.navIcon} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
