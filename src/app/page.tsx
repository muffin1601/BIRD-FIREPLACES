import Navbar from '@/components/Navbar';
import HeroMain from '@/components/HeroMain';
import FeatureHighlights from '@/components/FeatureHighlights';
import QuoteSection from '@/components/QuoteSection';
import ExperienceSection from '@/components/ExperienceSection';
import FireplaceCollection from '@/components/FireplaceCollection';
import StudioPromise from '@/components/StudioPromise';
import ContactSection from '@/components/ContactSection';
import ScrollObserver from '@/components/ScrollObserver';
import SmoothScroll from '@/components/SmoothScroll';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <ScrollObserver />
      <Navbar />
      
      <div className="animate-scale-in">
        <HeroMain />
      </div>
      
      <div className="reveal">
        <FeatureHighlights />
      </div>

      <div className="reveal">
        <QuoteSection />
      </div>

      <div className="reveal">
        <ExperienceSection />
      </div>

      <div className="reveal">
        <FireplaceCollection />
      </div>

      <div className="reveal">
        <StudioPromise />
      </div>

      <div id="contact" className="reveal">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
