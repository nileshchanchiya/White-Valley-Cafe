import React from 'react';
import { identityData } from '../../data/mock';

const IdentitySection = () => {
  return (
    <section id="identity" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-1 mb-8">{identityData.title}</h2>
          <p className="body-large text-[var(--text-secondary)] mb-16 leading-relaxed">
            {identityData.narrative}
          </p>
          
          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
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
  );
};

export default IdentitySection;
