import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Experience', href: '#identity' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Menu', href: '#menu' },
    { label: 'Events', href: '#events' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)] border-b border-[var(--border-light)]">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-xl font-normal text-[var(--text-primary)] no-underline">
            White Valley
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[var(--text-primary)] no-underline relative py-3 group"
              >
                {link.label}
                <span className="absolute bottom-2 left-0 w-0 h-[1px] bg-[var(--text-primary)] transition-all duration-500 ease-in-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-2 text-sm text-[var(--text-primary)] no-underline"
            >
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </a>
            <a href="#contact" className="btn-primary">
              Reserve
            </a>
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
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base text-[var(--text-primary)] no-underline py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[var(--border-light)]">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-2 text-sm text-[var(--text-primary)] no-underline py-2"
                >
                  <Phone size={16} />
                  <span>+91 98765 43210</span>
                </a>
                <a href="#contact" className="btn-primary mt-4 w-full justify-center">
                  Reserve
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
