import React from 'react';
import { testimonials } from '../../data/mock';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">What Our Guests Say</h2>
          <p className="body-regular text-[var(--text-secondary)]">
            Experiences worth sharing, moments worth remembering.
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
                <p className="body-small">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--bg-primary)] border border-[var(--border-light)]">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill={star <= 4.8 ? 'var(--text-primary)' : 'var(--border-light)'}
                >
                  <polygon points="12,2 15,9 23,9 17,14 19,22 12,18 5,22 7,14 1,9 9,9" />
                </svg>
              ))}
            </div>
            <span className="body-small">4.8 on Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
