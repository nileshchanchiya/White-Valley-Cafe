import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { culinaryData, restaurantInfo } from '../../data/mock';

const CulinarySection = ({ showFull = false }) => {
  return (
    <section id="menu" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">{culinaryData.title}</h2>
          <p className="body-regular text-[var(--text-secondary)] mb-2">
            {culinaryData.description}
          </p>
          <p className="body-small">
            100% Vegetarian | {restaurantInfo.priceRange}
          </p>
        </div>

        {/* Cuisine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culinaryData.cuisines.map((cuisine, index) => (
            <div key={index} className="bg-[var(--bg-primary)] p-8">
              <h3 className="heading-2 mb-6 pb-4 border-b border-[var(--border-light)]">
                {cuisine.name}
              </h3>
              <div className="space-y-6">
                {cuisine.dishes.map((dish, dishIndex) => (
                  <div key={dishIndex}>
                    <h4 className="heading-3 mb-2">{dish.name}</h4>
                    <p className="body-small">{dish.benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Service Options */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {restaurantInfo.serviceOptions.map((option, index) => (
              <span key={index} className="px-4 py-2 bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] border border-[var(--border-light)]">
                {option}
              </span>
            ))}
          </div>
          {!showFull && (
            <Link to="/menu" className="btn-primary">
              View Full Menu
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CulinarySection;
