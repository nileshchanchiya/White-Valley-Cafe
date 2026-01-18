import React from 'react';
import { galleryImages } from '../../data/mock';

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-[var(--bg-primary)]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">Visual Proof of Excellence</h2>
          <p className="body-regular text-[var(--text-secondary)] max-w-xl mx-auto">
            Every corner designed to inspire, every moment captured in elegance.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden hover-lift cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-[var(--text-primary)]/0 group-hover:bg-[var(--text-primary)]/30 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium tracking-wide">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
