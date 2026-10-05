import React from 'react';
import { Navbar } from './components/bakery/Navbar';
import { HeroSection } from './components/bakery/HeroSection';
import { AboutSection } from './components/bakery/AboutSection';
import { BakeryExperienceSection } from './components/bakery/BakeryExperienceSection';
import { SpecialtiesSection } from './components/bakery/SpecialtiesSection';
import { SignatureCakesSection } from './components/bakery/SignatureCakesSection';
import { WhyUsSection } from './components/bakery/WhyUsSection';
import { IngredientsSection } from './components/bakery/IngredientsSection';
import { GallerySection } from './components/bakery/GallerySection';
import { TestimonialsSection } from './components/bakery/TestimonialsSection';
import { VisitUsSection } from './components/bakery/VisitUsSection';
import { ContactSection } from './components/bakery/ContactSection';
import { Footer } from './components/bakery/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf6f0] text-[#2c1810]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BakeryExperienceSection />
        <SpecialtiesSection />
        <SignatureCakesSection />
        <WhyUsSection />
        <IngredientsSection />
        <GallerySection />
        <TestimonialsSection />
        <VisitUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

