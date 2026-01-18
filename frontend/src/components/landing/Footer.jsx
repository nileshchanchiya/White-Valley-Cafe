import React from 'react';
import { footerData } from '../../data/mock';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--text-primary)] text-[var(--bg-primary)] py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-normal mb-4">White Valley</h3>
            <p className="text-[var(--border-light)] text-sm leading-relaxed max-w-md">
              {footerData.brandLine}
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">
              Hours
            </h4>
            <div className="space-y-2 text-sm text-[var(--border-light)]">
              <p>Monday - Friday</p>
              <p className="text-[var(--bg-primary)]">{footerData.hours.weekdays}</p>
              <p className="mt-4">Saturday - Sunday</p>
              <p className="text-[var(--bg-primary)]">{footerData.hours.weekends}</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${footerData.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm text-[var(--border-light)] hover:text-[var(--bg-primary)] transition-colors no-underline"
              >
                <Phone size={16} />
                {footerData.contact.phone}
              </a>
              <a
                href={`mailto:${footerData.contact.email}`}
                className="flex items-center gap-3 text-sm text-[var(--border-light)] hover:text-[var(--bg-primary)] transition-colors no-underline"
              >
                <Mail size={16} />
                {footerData.contact.email}
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={`https://instagram.com/${footerData.social.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[var(--border-light)] text-[var(--border-light)] hover:text-[var(--bg-primary)] hover:border-[var(--bg-primary)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`https://facebook.com/${footerData.social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-[var(--border-light)] text-[var(--border-light)] hover:text-[var(--bg-primary)] hover:border-[var(--bg-primary)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--text-secondary)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--border-light)]">
            © {new Date().getFullYear()} White Valley Cafe. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[var(--border-light)]">
            <a href="#" className="hover:text-[var(--bg-primary)] transition-colors no-underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[var(--bg-primary)] transition-colors no-underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
