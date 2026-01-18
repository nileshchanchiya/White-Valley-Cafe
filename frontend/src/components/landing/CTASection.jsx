import React from 'react';
import { Phone, MessageCircle, Star } from 'lucide-react';
import { contactInfo, restaurantInfo } from '../../data/mock';

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-[var(--bg-primary)]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="hero-medium mb-4">Your Table Awaits</h2>
          <p className="body-large text-[var(--text-secondary)] mb-4">
            Your table is not reserved. Your experience is.
          </p>
          <p className="body-small mb-12">
            {restaurantInfo.priceRange} | Open daily 10 am – 1 am
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={contactInfo.phoneLink}
              className="btn-primary-filled w-full sm:w-auto"
            >
              <Phone size={18} />
              Call {contactInfo.phone}
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* Secondary CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <a 
              href={contactInfo.zomatoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Order on Zomato
            </a>
            <a 
              href={contactInfo.reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Star size={14} />
              Leave a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
