import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import CTASection from '../components/landing/CTASection';
import { galleryImages } from '../data/mock';

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="hero-large mb-6">Gallery</h1>
              <p className="body-large text-[var(--text-secondary)]">
                Every corner designed to inspire, every moment captured in elegance.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section-padding bg-[var(--bg-primary)]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden hover-lift cursor-pointer"
                >
                  <div className={`overflow-hidden ${index === 0 || index === 5 ? 'aspect-[4/5] md:col-span-1 md:row-span-2' : 'aspect-[4/3]'}`}>
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[var(--text-primary)]/0 group-hover:bg-[var(--text-primary)]/40 transition-all duration-300 flex items-end">
                    <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-lg font-medium">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
