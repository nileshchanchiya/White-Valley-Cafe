import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import CTASection from '../components/landing/CTASection';
import { eventsData, contactInfo, restaurantInfo } from '../data/mock';
import { DoorClosed, PartyPopper, Cake, Heart, Phone, MessageCircle } from 'lucide-react';

const EventsPage = () => {
  const icons = {
    'door-closed': DoorClosed,
    'party-popper': PartyPopper,
    'cake': Cake,
    'heart': Heart,
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="hero-large mb-6">Events & Banquet</h1>
              <p className="body-large text-[var(--text-secondary)]">
                {eventsData.description}
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="relative h-[50vh] overflow-hidden">
          <img
            src={eventsData.image}
            alt="Events at White Valley"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--text-primary)]/30" />
        </section>

        {/* Events Grid */}
        <section className="section-padding bg-[var(--bg-primary)]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {eventsData.events.map((event, index) => {
                const IconComponent = icons[event.icon] || PartyPopper;
                return (
                  <div
                    key={index}
                    className="p-8 border border-[var(--border-light)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-subtle)] transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-[var(--bg-primary)]">
                        <IconComponent size={28} className="text-[var(--text-primary)]" />
                      </div>
                      <div>
                        <h3 className="heading-2 mb-3">{event.name}</h3>
                        <p className="body-regular text-[var(--text-secondary)]">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Banquet Hall Info */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-1 mb-8">Banquet Hall</h2>
              <p className="body-large text-[var(--text-secondary)] mb-8">
                Our spacious banquet hall is perfect for corporate events, wedding receptions, 
                birthday parties, and large gatherings. With dedicated staff and customizable 
                menus, we ensure your event is unforgettable.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {restaurantInfo.serviceOptions.map((option, index) => (
                  <span key={index} className="px-4 py-2 bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] border border-[var(--border-light)]">
                    {option}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={contactInfo.phoneLink}
                  className="btn-primary-filled"
                >
                  <Phone size={18} />
                  Call to Book: {contactInfo.phone}
                </a>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
