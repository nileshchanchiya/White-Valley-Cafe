import React from 'react';
import Header from '../components/landing/Header';
import HeroSection from '../components/landing/HeroSection';
import IdentitySection from '../components/landing/IdentitySection';
import GallerySection from '../components/landing/GallerySection';
import CulinarySection from '../components/landing/CulinarySection';
import SignatureSection from '../components/landing/SignatureSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import EventsSection from '../components/landing/EventsSection';
import LocationSection from '../components/landing/LocationSection';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IdentitySection />
        <GallerySection />
        <CulinarySection />
        <SignatureSection />
        <TestimonialsSection />
        <EventsSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
