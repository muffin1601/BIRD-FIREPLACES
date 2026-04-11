"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroV5 from '@/components/v5/HeroV5';
import ShowcaseV5 from '@/components/v5/ShowcaseV5';
import ExperienceV5 from '@/components/v5/ExperienceV5';
import QuoteV5 from '@/components/v5/QuoteV5';
import FeatureHighlightsV5 from '@/components/v5/FeatureHighlightsV5';
import StudioPromiseV5 from '@/components/v5/StudioPromiseV5';
import ContactV5 from '@/components/v5/ContactV5';
import FooterV5 from '@/components/v5/FooterV5';
import SmoothScroll from '@/components/SmoothScroll';
import ScrollObserver from '@/components/ScrollObserver';

export default function DesignV5() {
  return (
    <main style={{ background: 'var(--v5-bg)', color: 'var(--v5-accent)' }}>
      <SmoothScroll />
      <ScrollObserver />
      <Navbar />
      
      <HeroV5 />
      
      <div className="reveal">
        <ShowcaseV5 />
      </div>

      <div className="reveal">
        <ExperienceV5 />
      </div>

      <div className="reveal">
        <QuoteV5 />
      </div>

      <div className="reveal">
        <FeatureHighlightsV5 />
      </div>

      <div className="reveal">
        <StudioPromiseV5 />
      </div>

      <div id="contact" className="reveal">
        <ContactV5 />
      </div>

      <FooterV5 />
    </main>
  );
}
