"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FireplaceCollection.module.css';

const FIREPLACES = [
  {
    id: 1,
    name: 'XL900 Ethanol Burner',
    description: 'The core of many stunning Ethanol fireplaces, the XL900 is a versatile and elegant solution...',
    category: 'Ethanol',
    image: '/images/fire-1.png',
    tags: ['Ecosmart Fire', 'Clean burning']
  },
  {
    id: 2,
    name: 'FLA 4 Automatic',
    description: 'The most advanced automatic ethanol fireplace available today, featuring BEV technology...',
    category: 'Ethanol',
    image: '/images/fire-2.png',
    tags: ['Planika', 'Smart control']
  },
  {
    id: 3,
    name: 'IgniteXL 74 Linear',
    description: 'The IgniteXL stands apart as more lifelike and visually stunning than anything before it...',
    category: 'Electric',
    image: '/images/fire-3.png',
    tags: ['Dimplex', 'Multi-fire XD']
  },
  {
    id: 4,
    name: 'Monroe Gas Fire',
    description: 'A modern gas fireplace that creates a beautiful campfire-style flame in your home...',
    category: 'Gas',
    image: '/images/fire-1.png',
    tags: ['Indoor', 'Natural flame']
  },
  {
    id: 5,
    name: 'Gyrofocus Suspended',
    description: 'The first suspended, 360° pivoting fireplace. An international design icon...',
    category: 'Wood',
    image: '/images/fire-2.png',
    tags: ['Focus', 'Rotatable']
  },
  {
    id: 6,
    name: 'Galio Star Outdoor',
    description: 'An automatic outdoor gas fireplace insert that creates a unique star-shaped flame...',
    category: 'Gas',
    image: '/images/fire-3.png',
    tags: ['Outdoor', 'Corten steel']
  }
];

const CATEGORIES = ['All', 'Ethanol', 'Gas', 'Electric', 'Wood'];

const FireplaceCollection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFireplaces = activeCategory === 'All' 
    ? FIREPLACES 
    : FIREPLACES.filter(f => f.category === activeCategory);

  return (
    <section className={styles.collectionSection}>
      <div className={styles.container}>
        <div className={styles.collectionHeader}>
          <span className={styles.collectionLabel}>THE COLLECTION</span>
          <h2 className={styles.collectionTitle}>
            Our <span className={styles.accentTitle}>Fireplaces</span>
          </h2>
        </div>

        <div className={styles.collectionFilters}>
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.fireplaceGrid}>
          {filteredFireplaces.map(fire => (
            <div key={fire.id} className={styles.fireplaceCard}>
              <div className={styles.cardImageWrapper}>
                 <Image 
                   src={fire.image} 
                   alt={fire.name} 
                   fill 
                   style={{ objectFit: 'cover' }}
                 />
                 <div className={styles.cardBadge}>{fire.category}</div>
                 <div className={styles.cardFeatured}>✧ Featured</div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardName}>{fire.name}</h3>
                <p className={styles.cardDesc}>{fire.description}</p>
                <div className={styles.cardTags}>
                  {fire.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                  <span className={styles.tagMore}>+2 more</span>
                </div>
                <button className={styles.learnMoreBtn}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FireplaceCollection;
