import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, contactInfo } from '../../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)] border-b border-[var(--border-light)]">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_urbansanctuary/artifacts/gbnni5q9_logo%20mid.png" 
              alt="White Valley Cafe & Multicuisine" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium text-[var(--text-primary)] no-underline relative py-3 group ${
                  location.pathname === link.href ? 'font-semibold' : ''
                }`}
              >
                {link.label}
                <span className={`absolute bottom-2 left-0 h-[1px] bg-[var(--text-primary)] transition-all duration-500 ease-in-out ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href={contactInfo.phoneLink}
              className="flex items-center gap-2 text-sm text-[var(--text-primary)] no-underline"
            >
              <Phone size={16} />
              <span>{contactInfo.phone}</span>
            </a>
            <Link to="/contact" className="btn-primary">
              Reserve
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[var(--text-primary)] bg-transparent border-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-[var(--border-light)]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-base text-[var(--text-primary)] no-underline py-2 ${
                    location.pathname === link.href ? 'font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[var(--border-light)]">
                <a 
                  href={contactInfo.phoneLink}
                  className="flex items-center gap-2 text-sm text-[var(--text-primary)] no-underline py-2"
                >
                  <Phone size={16} />
                  <span>{contactInfo.phone}</span>
                </a>
                <Link 
                  to="/contact" 
                  className="btn-primary mt-4 w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reserve
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
