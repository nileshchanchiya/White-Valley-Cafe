import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { culinaryData, restaurantInfo } from '../../data/mock';

const CulinarySection = () => {
  // Show only first 6 categories as preview
  const previewCategories = culinaryData.categories.slice(0, 6);

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

        {/* Menu Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewCategories.map((category, index) => (
            <div key={index} className="bg-[var(--bg-primary)] p-6">
              <h3 className="heading-3 mb-4 pb-3 border-b border-[var(--border-light)]">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.items.slice(0, 4).map((item, itemIndex) => (
                  <li key={itemIndex} className="body-small text-[var(--text-secondary)]">
                    {item}
                  </li>
                ))}
                {category.items.length > 4 && (
                  <li className="body-small text-[var(--text-light)]">
                    +{category.items.length - 4} more...
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Options & CTA */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {restaurantInfo.serviceOptions.map((option, index) => (
              <span key={index} className="px-4 py-2 bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] border border-[var(--border-light)]">
                {option}
              </span>
            ))}
          </div>
          <Link to="/menu" className="btn-primary">
            View Full Menu
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CulinarySection;
