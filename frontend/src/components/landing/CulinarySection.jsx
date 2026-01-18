import React from 'react';
import { culinaryData } from '../../data/mock';

const CulinarySection = () => {
  return (
    <section id="menu" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">{culinaryData.title}</h2>
          <p className="body-regular text-[var(--text-secondary)]">
            {culinaryData.description}
          </p>
        </div>

        {/* Cuisine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {culinaryData.cuisines.map((cuisine, index) => (
            <div key={index} className="text-center">
              <h3 className="heading-2 mb-8 pb-4 border-b border-[var(--border-light)]">
                {cuisine.name}
              </h3>
              <div className="space-y-8">
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

        {/* Menu CTA */}
        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default CulinarySection;
