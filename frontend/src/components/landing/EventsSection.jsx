import React from 'react';
import { eventsData } from '../../data/mock';
import { Music, Tv, Mic } from 'lucide-react';

const EventsSection = () => {
  const icons = {
    'Stand-up Comedy Nights': Mic,
    'Live Sports Screenings': Tv,
    'Acoustic Evenings': Music,
  };

  return (
    <section id="events" className="section-padding bg-[var(--bg-primary)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="heading-1 mb-6">{eventsData.title}</h2>
            <p className="body-large text-[var(--text-secondary)] mb-10 leading-relaxed">
              {eventsData.description}
            </p>

            {/* Events List */}
            <div className="space-y-6">
              {eventsData.events.map((event, index) => {
                const IconComponent = icons[event.name] || Music;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 border border-[var(--border-light)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-subtle)] transition-colors duration-300"
                  >
                    <div className="p-3 bg-[var(--bg-primary)]">
                      <IconComponent size={20} className="text-[var(--text-primary)]" />
                    </div>
                    <div>
                      <h4 className="heading-3 mb-1">{event.name}</h4>
                      <p className="body-small">{event.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={eventsData.image}
                alt="Events at White Valley"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
