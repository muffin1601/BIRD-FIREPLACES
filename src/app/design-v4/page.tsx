import Navbar from '@/components/Navbar';
import HeroV4 from '@/components/v4/HeroV4';
import ExperienceV4 from '@/components/v4/ExperienceV4';
import RangeSelectorV4 from '@/components/v4/RangeSelectorV4';
import ClientMarqueeV4 from '@/components/v4/ClientMarqueeV4';
import FireCategoryV4 from '@/components/v4/FireCategoryV4';
import ScrollObserver from '@/components/ScrollObserver';
import SmoothScroll from '@/components/SmoothScroll';
import ParallaxFeatureV4 from '@/components/v4/ParallaxFeatureV4';
import LookbookV4 from '@/components/v4/LookbookV4';
import ARSectionV4 from '@/components/v4/ARSectionV4';
import ContactV4 from '@/components/v4/ContactV4';
import FooterV4 from '@/components/v4/FooterV4';

export default function DesignV4() {
  return (
    <main style={{ background: '#000' }}>
      <SmoothScroll />
      <ScrollObserver />
      <Navbar />
      
      <div className="animate-scale-in">
        <HeroV4 />
      </div>

      <div className="reveal">
        <ExperienceV4 />
      </div>

      <div className="reveal">
        <RangeSelectorV4 />
      </div>

      <div className="reveal">
        <ClientMarqueeV4 />
      </div>

      <div className="reveal">
        <FireCategoryV4 />
      </div>

      <div className="reveal">
        <ParallaxFeatureV4 />
      </div>

      <div className="reveal">
        <LookbookV4 />
      </div>

      <div className="reveal">
        <ARSectionV4 />
      </div>

      <div id="contact" className="reveal">
        <ContactV4 />
      </div>

      <FooterV4 />
    </main>
  );
}
