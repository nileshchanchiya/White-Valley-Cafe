import React from 'react';
import { accessibilityData } from '../../data/mock';
import { Check } from 'lucide-react';

const AccessibilitySection = () => {
  return (
    <section className="section-padding-small bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-2 mb-8">{accessibilityData.title}</h2>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {accessibilityData.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check size={16} className="text-[var(--text-primary)]" />
                <span className="body-small">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySection;
