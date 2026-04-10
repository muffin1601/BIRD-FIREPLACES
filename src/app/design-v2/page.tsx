import Navbar from '@/components/Navbar';
import HeroV2 from '@/components/v2/HeroV2';
import FeatureHighlightsV2 from '@/components/v2/FeatureHighlightsV2';
import QuoteV2 from '@/components/v2/QuoteV2';
import ExperienceV2 from '@/components/v2/ExperienceV2';
import ShowcaseV2 from '@/components/v2/ShowcaseV2';
import MaterialsV2 from '@/components/v2/MaterialsV2';
import ContactSection from '@/components/ContactSection';
import ScrollObserver from '@/components/ScrollObserver';
import SmoothScroll from '@/components/SmoothScroll';
import Footer from '@/components/Footer';

export default function DesignV2() {
  return (
    <main style={{ background: '#000' }}>
      <SmoothScroll />
      <ScrollObserver />
      <Navbar />
      
      <div className="animate-scale-in">
        <HeroV2 />
      </div>
      
      <div className="reveal">
        <FeatureHighlightsV2 />
      </div>

      <div className="reveal">
        <QuoteV2 />
      </div>
      
      <div className="reveal">
        <ExperienceV2 />
      </div>

      <div className="reveal">
        <MaterialsV2 />
      </div>

      <div className="reveal">
        <ShowcaseV2 />
      </div>

      <div id="contact" className="reveal">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
