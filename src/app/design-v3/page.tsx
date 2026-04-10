import Navbar from '@/components/Navbar';
import HeroV3 from '@/components/v3/HeroV3';
import FeatureHighlightsV3 from '@/components/v3/FeatureHighlightsV3';
import ExperienceV3 from '@/components/v3/ExperienceV3';
import ShowcaseV3 from '@/components/v3/ShowcaseV3';
import QuoteV3 from '@/components/v3/QuoteV3';
import MaterialsV3 from '@/components/v3/MaterialsV3';
import ContactSection from '@/components/ContactSection';
import ScrollObserver from '@/components/ScrollObserver';
import SmoothScroll from '@/components/SmoothScroll';
import Footer from '@/components/Footer';

export default function DesignV3() {
  return (
    <main style={{ background: '#000' }}>
      <SmoothScroll />
      <ScrollObserver />
      <Navbar />
      
      <div className="animate-scale-in">
        <HeroV3 />
      </div>

      <div className="reveal">
        <FeatureHighlightsV3 />
      </div>

      <div className="reveal">
        <QuoteV3 />
      </div>
      
      <div className="reveal">
        <ExperienceV3 />
      </div>

      <div className="reveal">
        <ShowcaseV3 />
      </div>

      <div className="reveal">
        <MaterialsV3 />
      </div>

      <div id="contact" className="reveal">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
