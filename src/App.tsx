import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Download } from './components/Download';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
