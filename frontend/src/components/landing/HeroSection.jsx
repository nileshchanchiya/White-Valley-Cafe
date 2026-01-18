import React from 'react';
import { ArrowRight } from 'lucide-react';
import { heroData } from '../../data/mock';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.backgroundImage}
          alt="White Valley Poolside Dining"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-primary)]/95 via-[var(--bg-primary)]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="hero-large mb-6">
            {heroData.headline}
          </h1>
          <p className="body-large text-[var(--text-secondary)] mb-10 max-w-xl">
            {heroData.subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#gallery" className="btn-primary">
              {heroData.cta}
              <ArrowRight size={16} />
            </a>
            <a href="#menu" className="btn-secondary flex items-center gap-2">
              View Menu
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-[var(--text-light)]">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-[var(--border-light)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[var(--text-primary)] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
