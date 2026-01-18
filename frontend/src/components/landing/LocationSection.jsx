import React from 'react';
import { locationData } from '../../data/mock';
import { MapPin, Navigation } from 'lucide-react';

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map Placeholder */}
          <div className="aspect-square lg:aspect-[4/3] bg-[var(--bg-subtle)] flex items-center justify-center overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7654321!2d72.5523456!3d23.0456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzQ0LjQiTiA3MsKwMzMnMDguNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="White Valley Location"
            />
          </div>

          {/* Location Info */}
          <div>
            <h2 className="heading-1 mb-8">{locationData.title}</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[var(--text-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="heading-3 mb-1">{locationData.address}</p>
                  <p className="body-regular text-[var(--text-secondary)]">{locationData.street}</p>
                  <p className="body-small">{locationData.city}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Navigation size={20} className="text-[var(--text-primary)] mt-1 flex-shrink-0" />
                <div>
                  <p className="body-regular text-[var(--text-secondary)]">
                    Landmark: {locationData.landmark}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
