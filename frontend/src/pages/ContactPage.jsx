import React from 'react';
import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';
import { contactInfo, hours, restaurantInfo } from '../data/mock';
import { Phone, MessageCircle, MapPin, Clock, Star, ExternalLink, Navigation } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="hero-large mb-6">Contact Us</h1>
              <p className="body-large text-[var(--text-secondary)]">
                We'd love to hear from you. Reach out for reservations, events, or any questions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Map */}
        <section className="section-padding bg-[var(--bg-primary)]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Details */}
              <div>
                <h2 className="heading-1 mb-8">Get in Touch</h2>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--bg-secondary)]">
                      <Phone size={24} className="text-[var(--text-primary)]" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Call Us</h3>
                      <a 
                        href={contactInfo.phoneLink}
                        className="heading-2 text-[var(--text-primary)] no-underline hover:underline"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--bg-secondary)]">
                      <MessageCircle size={24} className="text-[var(--text-primary)]" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">WhatsApp</h3>
                      <a 
                        href={`https://wa.me/${contactInfo.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="body-large text-[var(--text-primary)] no-underline hover:underline"
                      >
                        Message us on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--bg-secondary)]">
                      <MapPin size={24} className="text-[var(--text-primary)]" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Address</h3>
                      <p className="body-regular text-[var(--text-secondary)]">
                        {restaurantInfo.name}
                      </p>
                      <p className="body-regular text-[var(--text-secondary)]">
                        {contactInfo.address.street}
                      </p>
                      <p className="body-small text-[var(--text-secondary)]">
                        {contactInfo.address.landmark}
                      </p>
                      <p className="body-small text-[var(--text-secondary)]">
                        {contactInfo.address.area}, {contactInfo.address.city}
                      </p>
                      <p className="body-small text-[var(--text-secondary)]">
                        {contactInfo.address.state} {contactInfo.address.pincode}
                      </p>
                      <a
                        href={contactInfo.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-sm text-[var(--text-primary)] no-underline hover:underline"
                      >
                        <Navigation size={14} />
                        Get Directions
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[var(--bg-secondary)]">
                      <Clock size={24} className="text-[var(--text-primary)]" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Hours</h3>
                      <div className="space-y-1">
                        {hours.schedule.map((item, index) => (
                          <div key={index} className="flex justify-between gap-8 body-small text-[var(--text-secondary)]">
                            <span>{item.day}</span>
                            <span>{item.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={contactInfo.phoneLink}
                    className="btn-primary-filled"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Map */}
              <div>
                <div className="aspect-square lg:aspect-[4/5] overflow-hidden mb-6">
                  <iframe
                    src={contactInfo.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="White Valley Location"
                  />
                </div>
                <p className="body-small text-[var(--text-secondary)] text-center">
                  16 mins by car · 13 mins by bike · 1 hr 3 mins walk
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Order & Review */}
        <section className="section-padding bg-[var(--bg-secondary)]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-1 mb-8">More Ways to Connect</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={contactInfo.zomatoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <ExternalLink size={18} />
                  Order on Zomato
                </a>
                <a
                  href={contactInfo.reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <Star size={18} />
                  Leave a Review
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-[var(--bg-primary)]">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="hero-medium mb-4">Your Table Awaits</h2>
              <p className="body-large text-[var(--text-secondary)] mb-4">
                Your table is not reserved. Your experience is.
              </p>
              <p className="body-small">
                {restaurantInfo.priceRange} | Open daily 10 am – 1 am
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
