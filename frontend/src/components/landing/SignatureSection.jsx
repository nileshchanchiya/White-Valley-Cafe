import React from 'react';
import { signatureData, restaurantInfo } from '../../data/mock';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignatureSection = () => {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={signatureData.image}
                alt="Poolside Experience"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--border-light)] -z-10 hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <h2 className="heading-1 mb-6">{signatureData.title}</h2>
            <p className="body-large text-[var(--text-secondary)] mb-8 leading-relaxed">
              {signatureData.description}
            </p>
            
            {/* Highlights */}
            <ul className="space-y-4 mb-6">
              {signatureData.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check size={18} className="text-[var(--text-primary)]" />
                  <span className="body-regular">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <p className="body-regular text-[var(--text-primary)] mb-8">
              <strong>{restaurantInfo.priceRange}</strong> | 100% Vegetarian
            </p>

            <Link to="/contact" className="btn-primary">
              Reserve Your Spot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureSection;
