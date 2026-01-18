import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import CTASection from '../components/landing/CTASection';
import { restaurantInfo, identityData, galleryImages } from '../data/mock';
import { Check } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="hero-large mb-6">About White Valley</h1>
              <p className="body-large text-[var(--text-secondary)]">
                {restaurantInfo.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-[var(--bg-primary)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="heading-1 mb-6">Our Story</h2>
                <p className="body-large text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {restaurantInfo.description}
                </p>
                <p className="body-regular text-[var(--text-secondary)] leading-relaxed">
                  {identityData.narrative}
                </p>
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={galleryImages[0].src}
                  alt="White Valley Ambiance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-1 text-center mb-12">What We Offer</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Service Options */}
                <div className="bg-[var(--bg-primary)] p-8">
                  <h3 className="heading-2 mb-6 pb-4 border-b border-[var(--border-light)]">
                    Service Options
                  </h3>
                  <ul className="space-y-4">
                    {restaurantInfo.serviceOptions.map((option, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check size={18} className="text-[var(--text-primary)]" />
                        <span className="body-regular">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cuisines */}
                <div className="bg-[var(--bg-primary)] p-8">
                  <h3 className="heading-2 mb-6 pb-4 border-b border-[var(--border-light)]">
                    Our Cuisines
                  </h3>
                  <ul className="space-y-4">
                    {restaurantInfo.types.slice(0, 5).map((type, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check size={18} className="text-[var(--text-primary)]" />
                        <span className="body-regular">{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price */}
              <div className="text-center">
                <p className="heading-2 mb-2">{restaurantInfo.priceRange}</p>
                <p className="body-small text-[var(--text-secondary)]">
                  100% Vegetarian | Open daily 10 am – 1 am
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="section-padding bg-[var(--bg-primary)]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-1 text-center mb-12">The White Valley Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {identityData.pillars.map((pillar, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-[1px] bg-[var(--border-light)] mx-auto mb-6" />
                    <h3 className="heading-3 mb-3">{pillar.label}</h3>
                    <p className="body-small">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
