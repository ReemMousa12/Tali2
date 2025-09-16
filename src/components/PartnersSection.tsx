import gnk from "@/assets/sponsors/gnk.png";
import buoy from "@/assets/sponsors/buoy.png";
import mazeej from "@/assets/sponsors/mazeej.png";
import sax from "@/assets/sponsors/sax.png";
import humanfig from "@/assets/sponsors/humanfigures.png";
import stanley from "@/assets/sponsors/stanley.png";
import machina from "@/assets/sponsors/machina.png";
import kikis from "@/assets/sponsors/kikis.png";
import kikissage from "@/assets/sponsors/kikissage.png";
import { useState, useEffect, useMemo } from 'react';

const partners = [
  { name: 'GNK', logo: gnk },
  { name: 'Buoy', logo: buoy },
  { name: 'Mazeej', logo: mazeej },
    { name: 'SAX', logo: sax },
    { name: 'Human Figures', logo: humanfig },
    { name: 'Stanley', logo: stanley },
    { name: 'Machina', logo: machina },
    { name: 'KIKI\'S', logo: kikis },
    { name: 'KIKI\'S Sage', logo: kikissage },
];

const PartnersSection = () => {
  // Duplicate partners for seamless infinite scroll
  const visibleCount = 5;
  const loopPartners = useMemo(() => [...partners, ...partners], []);

  return (
    <section className="relative py-20 bg-[#371990] overflow-hidden">
      {/* Background Headline */}
      <div
        className="background-headline wm wow slideInUp animated"
        style={{
          color: '#fff',
          fontSize: 'clamp(2rem, 8vw, 7.5rem)',
          opacity: 0.13,
          position: 'absolute',
          left: 0,
          zIndex: 0,
          width: '100%',
          textAlign: 'center',
          fontFamily: 'Red Hat Display, sans-serif',
          paddingLeft: 'clamp(0px, 4vw, 80px)',
          letterSpacing: 'clamp(1rem, 7vw, 5rem)',
          textTransform: 'uppercase',
          visibility: 'visible',
          animationName: 'slideInUp',
          backgroundSize: 'cover',
          transform: 'translate3d(0px, 0px, 0px)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        PARTNERS
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 pt-4">
            <span className="text-tali-lime font-semibold">03</span> Partners
          </h2>
        </div>
        <div className="overflow-hidden w-full pt-6">
          <div
            className="flex items-center gap-12 animate-partners-carousel"
            style={{
              width: `calc(${loopPartners.length} * 160px)`,
              animation: 'partners-carousel 18s linear infinite',
            }}
          >
            {loopPartners.map((partner, idx) => (
              <div key={idx} className="flex-shrink-0" style={{ width: 160 }}>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto mx-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes partners-carousel {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-partners-carousel {
            will-change: transform;
          }
        `}</style>
      </div>
    </section>
  );
};

export default PartnersSection;
