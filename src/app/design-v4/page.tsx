import Navbar from '@/components/Navbar';
import HeroV4 from '@/components/v4/HeroV4';
import FeatureHighlightsV4 from '@/components/v4/FeatureHighlightsV4';
import ExperienceV4 from '@/components/v4/ExperienceV4';
import ShowcaseV4 from '@/components/v4/ShowcaseV4';
import QuoteV4 from '@/components/v4/QuoteV4';
import MaterialsV4 from '@/components/v4/MaterialsV4';
import ContactSection from '@/components/ContactSection';
import ScrollObserver from '@/components/ScrollObserver';
import SmoothScroll from '@/components/SmoothScroll';
import Footer from '@/components/Footer';

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
        <FeatureHighlightsV4 />
      </div>

      <div className="reveal">
        <QuoteV4 />
      </div>

      <div className="reveal">
        <ExperienceV4 />
      </div>

      <div className="reveal">
        <ShowcaseV4 />
      </div>

      <div className="reveal">
        <MaterialsV4 />
      </div>

      <div id="contact" className="reveal">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
