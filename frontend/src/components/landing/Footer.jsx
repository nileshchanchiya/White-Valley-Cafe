import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Star, ExternalLink } from 'lucide-react';
import { restaurantInfo, contactInfo, hours } from '../../data/mock';

const Footer = () => {
  return (
    <footer className="bg-[var(--text-primary)] text-[var(--bg-primary)] py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_urbansanctuary/artifacts/gbnni5q9_logo%20mid.png" 
              alt="White Valley" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-[var(--border-light)] text-sm leading-relaxed mb-4">
              {restaurantInfo.tagline}
            </p>
            <p className="text-sm text-[var(--bg-primary)] font-medium mb-4">
              {restaurantInfo.priceRange}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={contactInfo.reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[var(--border-light)] text-[var(--border-light)] hover:text-[var(--bg-primary)] hover:border-[var(--bg-primary)] transition-colors flex items-center gap-2"
                aria-label="Google Reviews"
              >
                <Star size={18} />
              </a>
              <a
                href={contactInfo.zomatoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[var(--border-light)] text-[var(--border-light)] hover:text-[var(--bg-primary)] hover:border-[var(--bg-primary)] transition-colors"
                aria-label="Order on Zomato"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-2 text-sm">
              <Link to="/menu" className="block text-[var(--border-light)] hover:text-[var(--bg-primary)] transition-colors no-underline">
                Menu
              </Link>
              <Link to="/gallery" className="block text-[var(--border-light)] hover:text-[var(--bg-primary)] transition-colors no-underline">
                Gallery
              </Link>
              <Link to="/events" className="block text-[var(--border-light)] hover:text-[var(--bg-primary)] transition-colors no-underline">
                Events & Banquet
              </Link>
              <Link to="/about" className="block text-[var(--border-light)] hover:text-[var(--bg-primary)] transition-colors no-underline">
                About Us
              </Link>
              <Link to="/contact" className="block text-[var(--border-light)] hover:text-[var(--bg-primary)] transition-colors no-underline">
                Contact
              </Link>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">
              Hours
            </h4>
            <div className="text-sm text-[var(--border-light)]">
              <p className="text-[var(--bg-primary)] font-medium mb-2">Open Daily</p>
              <p>{hours.summary}</p>
            </div>
            
            {/* Order Online */}
            <a
              href={contactInfo.zomatoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm text-[var(--bg-primary)] border border-[var(--bg-primary)] px-4 py-2 hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)] transition-colors no-underline"
            >
              Order on Zomato
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={contactInfo.phoneLink}
                className="flex items-center gap-3 text-sm text-[var(--border-light)] hover:text-[var(--bg-primary)] transition-colors no-underline"
              >
                <Phone size={16} />
                {contactInfo.phone}
              </a>
              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-[var(--border-light)] hover:text-[var(--bg-primary)] transition-colors no-underline"
              >
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>{contactInfo.address.full}</span>
              </a>
            </div>
            
            {/* Review CTA */}
            <a
              href={contactInfo.reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm text-[var(--bg-primary)] no-underline hover:underline"
            >
              <Star size={14} />
              Leave a Review
            </a>
          </div>
        </div>

        {/* Restaurant Types */}
        <div className="border-t border-[var(--text-secondary)] py-6 mb-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {restaurantInfo.types.map((type, index) => (
              <span key={index} className="text-xs text-[var(--border-light)] px-3 py-1 border border-[var(--text-secondary)]">
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--text-secondary)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--border-light)]">
            © {new Date().getFullYear()} White Valley Cafe & Multi-cuisine Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[var(--border-light)]">
            <a href={contactInfo.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--bg-primary)] transition-colors no-underline">
              Get Directions
            </a>
            <a href={contactInfo.zomatoLink} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--bg-primary)] transition-colors no-underline">
              Order Online
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
