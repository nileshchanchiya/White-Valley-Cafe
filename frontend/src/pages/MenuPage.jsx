import React, { useState } from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import CTASection from '../components/landing/CTASection';
import { culinaryData, restaurantInfo, contactInfo } from '../data/mock';
import { ExternalLink, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const MenuPage = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="hero-large mb-6">{culinaryData.title}</h1>
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
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={contactInfo.phoneLink}
                  className="btn-primary-filled inline-flex items-center gap-2"
                >
                  <Phone size={16} />
                  Call to Order
                </a>
              </div>
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

        {/* Menu Grid - Desktop */}
        <section className="section-padding bg-[var(--bg-primary)] hidden lg:block">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {culinaryData.categories.map((category, index) => (
                <div key={index} className="bg-[var(--bg-secondary)] p-6">
                  <h3 className="heading-2 mb-6 pb-4 border-b border-[var(--border-light)]">
                    {category.name}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="body-regular text-[var(--text-primary)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Accordion - Mobile */}
        <section className="section-padding bg-[var(--bg-primary)] lg:hidden">
          <div className="container">
            <div className="space-y-4">
              {culinaryData.categories.map((category, index) => (
                <div key={index} className="bg-[var(--bg-secondary)] border border-[var(--border-light)]">
                  <button
                    onClick={() => toggleCategory(index)}
                    className="w-full p-4 flex items-center justify-between text-left bg-transparent border-none cursor-pointer"
                  >
                    <span className="heading-3">{category.name}</span>
                    <span className="text-[var(--text-secondary)]">
                      {expandedCategory === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  {expandedCategory === index && (
                    <div className="px-4 pb-4">
                      <ul className="space-y-2 pt-2 border-t border-[var(--border-light)]">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="body-small text-[var(--text-primary)] py-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Info */}
        <section className="section-padding-small bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <p className="heading-2 mb-4">{restaurantInfo.priceRange}</p>
              <p className="body-regular text-[var(--text-secondary)] mb-6">
                100% Vegetarian | Open daily 10 am – 1 am
              </p>
              <a
                href={contactInfo.phoneLink}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone size={16} />
                Reserve Your Table
              </a>
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
