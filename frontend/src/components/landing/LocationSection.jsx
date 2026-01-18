import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Navigation, Star, ExternalLink, MessageCircle } from 'lucide-react';
import { contactInfo, hours, restaurantInfo } from '../../data/mock';

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Map */}
          <div className="aspect-square lg:aspect-[4/3] overflow-hidden">
            <iframe
              src={contactInfo.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="White Valley Location"
            />
          </div>

          {/* Location Info */}
          <div>
            <h2 className="heading-1 mb-8">Find Your Sanctuary</h2>
            
            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[var(--text-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="heading-3 mb-1">{restaurantInfo.name}</p>
                  <p className="body-regular text-[var(--text-secondary)]">
                    {contactInfo.address.street}
                  </p>
                  <p className="body-small">{contactInfo.address.landmark}</p>
                  <p className="body-small">
                    {contactInfo.address.area}, {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.pincode}
                  </p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-[var(--text-primary)] mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href={contactInfo.phoneLink}
                    className="heading-3 text-[var(--text-primary)] no-underline hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-[var(--text-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="heading-3 mb-2">Open Daily</p>
                  <p className="body-regular text-[var(--text-secondary)]">
                    {hours.summary}
                  </p>
                </div>
              </div>

              {/* Directions */}
              <div className="flex items-start gap-4">
                <Navigation size={20} className="text-[var(--text-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="body-small text-[var(--text-secondary)]">
                    16 mins by car · 13 mins by bike · 1 hr 3 mins walk
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={contactInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Directions
              </a>
              <a
                href={contactInfo.zomatoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <ExternalLink size={14} />
                Order on Zomato
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
