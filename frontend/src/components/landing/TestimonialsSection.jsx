import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { testimonials, contactInfo } from '../../data/mock';
import { Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">What Our Guests Say</h2>
          <p className="body-regular text-[var(--text-secondary)]">
            Real reviews from real guests.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[var(--bg-primary)] p-8 relative hover-lift transition-all duration-300"
            >
              <Quote size={32} className="text-[var(--border-light)] mb-6" />
              <blockquote className="body-regular mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-[var(--border-light)] pt-6">
                <p className="heading-3 mb-1">{testimonial.author}</p>
                <p className="body-small">{testimonial.platform}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Review CTA */}
        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={contactInfo.reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Star size={16} />
            Leave a Review
          </a>
          <a
            href={contactInfo.zomatoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Order on Zomato
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
