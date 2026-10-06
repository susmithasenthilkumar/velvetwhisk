/**
 * The Velvet Whisk — Luxury Artisan Bakery Official Business Website
 * Concise 6-Slide Interactive Showcase (Information-Only, Non-Commercial)
 */

import { AboutSection } from './components/bakery/AboutSection';
import { BakeryExperienceSection } from './components/bakery/BakeryExperienceSection';
import { BakingProcessSection } from './components/bakery/BakingProcessSection';
import { ContactSection } from './components/bakery/ContactSection';
import { Footer } from './components/bakery/Footer';
import { GallerySection } from './components/bakery/GallerySection';
import { HeroSection } from './components/bakery/HeroSection';
import { IngredientsSection } from './components/bakery/IngredientsSection';
import { Navbar } from './components/bakery/Navbar';
import { OccasionsSection } from './components/bakery/OccasionsSection';
import { SignatureCakesSection } from './components/bakery/SignatureCakesSection';
import { SpecialtiesSection } from './components/bakery/SpecialtiesSection';
import { TestimonialsSection } from './components/bakery/TestimonialsSection';
import { VisitUsSection } from './components/bakery/VisitUsSection';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SpecialtiesSection />
        <SignatureCakesSection />
        <BakingProcessSection />
        <IngredientsSection />
        <OccasionsSection />
        <GallerySection />
        <BakeryExperienceSection />
        <TestimonialsSection />
        <VisitUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

