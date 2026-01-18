import React from 'react';
import { ctaData } from '../../data/mock';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-[var(--bg-primary)]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="hero-medium mb-4">{ctaData.title}</h2>
          <p className="body-large text-[var(--text-secondary)] mb-12">
            {ctaData.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${ctaData.phone.replace(/\s/g, '')}`}
              className="btn-primary-filled w-full sm:w-auto"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${ctaData.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* Secondary CTA */}
          <div className="mt-8">
            <a href="#" className="btn-secondary inline-flex items-center gap-2">
              Plan Your Private Event
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
