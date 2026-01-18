import React from 'react';
import { socialProofSecondary } from '../../data/mock';

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-[var(--bg-primary)]">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-1 text-center mb-12">{socialProofSecondary.title}</h2>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {socialProofSecondary.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="hero-medium mb-2">{stat.value}</p>
                <p className="body-small">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="body-regular text-center text-[var(--text-secondary)] max-w-lg mx-auto">
            {socialProofSecondary.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
