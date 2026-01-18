import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import CTASection from '../components/landing/CTASection';
import { culinaryData, restaurantInfo, contactInfo } from '../data/mock';
import { ExternalLink } from 'lucide-react';

const MenuPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="hero-large mb-6">Our Menu</h1>
              <p className="body-large text-[var(--text-secondary)] mb-4">
                {culinaryData.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {restaurantInfo.serviceOptions.map((option, index) => (
                  <span key={index} className="px-4 py-2 bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] border border-[var(--border-light)]">
                    {option}
                  </span>
                ))}
              </div>
              <a
                href={contactInfo.zomatoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Order on Zomato
              </a>
            </div>
          </div>
        </section>

        {/* Restaurant Types */}
        <section className="py-8 bg-[var(--bg-primary)] border-b border-[var(--border-light)]">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-3">
              {restaurantInfo.types.map((type, index) => (
                <span key={index} className="text-xs text-[var(--text-secondary)] px-3 py-1">
                  {type}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Sections */}
        {culinaryData.cuisines.map((cuisine, index) => (
          <section 
            key={index} 
            className={`section-padding ${index % 2 === 0 ? 'bg-[var(--bg-primary)]' : 'bg-[var(--bg-secondary)]'}`}
          >
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="heading-1 text-center mb-12 pb-4 border-b border-[var(--border-light)]">
                  {cuisine.name} Cuisine
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {cuisine.dishes.map((dish, dishIndex) => (
                    <div key={dishIndex} className="text-center">
                      <h3 className="heading-3 mb-3">{dish.name}</h3>
                      <p className="body-small">{dish.benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Price Info */}
        <section className="section-padding-small bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <p className="heading-2 mb-4">{restaurantInfo.priceRange}</p>
              <p className="body-regular text-[var(--text-secondary)]">
                100% Vegetarian | All cuisines available daily
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
