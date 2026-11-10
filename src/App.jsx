import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularDestinations from './components/PopularDestinations';
import FeaturedTours from './components/FeaturedTours';
import WhyChooseUs from './components/WhyChooseUs';
import SpecialOffers from './components/SpecialOffers';
import Testimonials from './components/Testimonials';
import TravelBlog from './components/TravelBlog';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  /* ───── Scroll-reveal observer ───── */
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll(selectors);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PopularDestinations />
        <FeaturedTours />
        <WhyChooseUs />
        <SpecialOffers />
        <Testimonials />
        <TravelBlog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
