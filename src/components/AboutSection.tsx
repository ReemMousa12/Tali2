
import { useState, useEffect, useRef } from 'react';
import one from "@/assets/background/8.jpg";

const AboutSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const valuesRef = useRef(null);

  const values = [
    {
      title: "Precision",
      description: "Every detail matters. We deliver flawless execution in every interaction, ensuring perfect experiences for both businesses and their guests."
    },
    {
      title: "Reliability", 
      description: "Built for enterprise-grade performance. Our platform delivers 99.9% uptime and handles the most demanding booking scenarios with confidence."
    },
    {
      title: "Elegance",
      description: "Luxury aesthetics meet cutting-edge functionality. Every interface, every interaction is designed to inspire and delight."
    },
    {
      title: "Innovation",
      description: "Pioneering the future of booking technology. We continuously push boundaries to create solutions that don't just meet needs — they anticipate them."
    }
  ];

  // Scroll-triggered animations for values section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger staggered animations for cards sliding from right
            values.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => new Set([...prev, index]));
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-24 px-4 relative overflow-hidden"
      style={{
  background: `linear-gradient(rgba(55,25,144,0.7), rgba(55,25,144,0.7)), url(${one}) 70% 85%/cover no-repeat`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 geometric-overlay opacity-20" />
      
      {/* Background Headline */}
      <div
        className="background-headline wm wow slideInUp animated"
         style={{
          color: '#fff',
          fontSize: 'clamp(2rem, 8vw, 7.5rem)',
          opacity: 0.2,
          position: 'absolute',
          left: 0,
          zIndex: 0,
          width: '100%',
          textAlign: 'center',
          fontFamily: 'Red Hat Display, sans-serif',
          letterSpacing: 'clamp(0.1rem, 4vw, 4rem)',
          textTransform: 'uppercase',
          visibility: 'visible',
          animationName: 'slideInUp',
          backgroundSize: 'cover',
          transform: 'translate3d(0px, 0px, 0px)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        ABOUT TALI
      </div>
      
      <div className="container mx-auto max-w-7xl section-content">
        {/* Who We Are */}
        <div className="text-center mb-32 pt-8">
          <div>
           
            <h3 className="text-2xl md:text-5xl font-bold mb-3 text-tali-lime ">
              WHO WE ARE 
            </h3>
            <div
              className="small-border bg-color wow zoomIn"
              style={{
                width: 80,
                height: 2,
                background: '#cdff6b',
                margin: '0 auto 32px auto',
                borderRadius: 2,
                animation: 'zoomIn 0.6s',
                visibility: 'visible',
              }}
              data-wow-delay=".4s"
            ></div>
            <p className="text-xl text-tali-text-secondary leading-relaxed">
              Redefining how the world experiences bookings and reservations
            </p>
          </div>
          
        </div>

        {/* Mission Statement */}
        <div className="flex flex-col items-center justify-center mb-32">
          <h3 className="text-4xl font-bold text-tali-text-primary mb-6">More Than a Platform — A Movement</h3>
          <p className="text-xl text-tali-text-secondary leading-relaxed max-w-4xl mx-auto bg-white/10 rounded-xl p-8 shadow-lg">
            Tali represents more than just a booking platform. We are a movement of curated experiences, 
            seamlessly merging technology, luxury, and scale to transform how the world makes reservations.<br /><br />
            From intimate fine dining experiences to massive music festivals, from corporate conferences 
            to luxury hotel stays — Tali elevates every interaction into an unforgettable experience.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="relative text-center mb-32">
          {/* Decorative PURPOSE background text */}
          <div
            className="background-headline wm wow slideInUp animated"
           style={{
          color: '#fff',
          fontSize: 'clamp(2rem, 8vw, 7.5rem)',
          opacity: 0.2,
          position: 'absolute',
          left: 0,
          zIndex: 0,
          width: '100%',
          textAlign: 'center',
          paddingTop: '3rem',
          fontFamily: 'Red Hat Display, sans-serif',
          letterSpacing: 'clamp(0.1rem, 5vw, 4rem)',
          textTransform: 'uppercase',
          visibility: 'visible',
          animationName: 'slideInUp',
          backgroundSize: 'cover',
          transform: 'translate3d(0px, 0px, 0px)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
          >
            PURPOSE
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-tali-lime pt-24 text-center relative z-10" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif', letterSpacing: '-0.04em'}}>Vision & Mission</h3>
            <div
              className="small-border bg-color wow  zoomIn"
              style={{
                width: 80,
                height: 2,
                background: '#cdff6b',
               
                margin: '0 auto 32px auto',
                borderRadius: 2,
                animation: 'zoomIn 0.6s',
                visibility: 'visible',
              }}
              data-wow-delay=".4s"
            ></div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Decorative blurred gradient background behind cards */}
            <div className="absolute -inset-8 z-0 pointer-events-none">
              <div className="w-2/3 h-2/3 bg-gradient-to-tr from-tali-lime/20 via-[#cdff6b]/10 to-[#371990]/0 rounded-full blur-3xl mx-auto mt-16 animate-pulse-slow" />
            </div>
            <div className="card-glass p-7 rounded-2xl flex flex-col items-center text-center shadow-xl bg-white/10 relative z-10 max-w-md mx-auto">
              <div className="flex items-center gap-2 mb-1">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-tali-lime"><circle cx="12" cy="12" r="10" stroke="#cdff6b" strokeWidth="2" opacity="0.3"/><path d="M8 12l2 2 4-4" stroke="#cdff6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <h3 className="text-2xl md:text-3xl font-extrabold text-tali-lime tracking-tight" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif'}}>Our Vision</h3>
              </div>
              <div className="w-12 h-1 bg-tali-lime rounded-full mb-4" />
              <p className="text-base text-tali-text-secondary leading-relaxed">
                Redefining how the world experiences bookings and reservations. We envision a future where 
                every reservation is not just a transaction, but the beginning of an extraordinary experience.
              </p>
            </div>
            <div className="card-glass p-7 rounded-2xl flex flex-col items-center text-center shadow-xl bg-white/10 relative z-10 max-w-md mx-auto">
              <div className="flex items-center gap-2 mb-1">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-tali-lime"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#cdff6b" strokeWidth="2" opacity="0.3"/><rect x="8" y="8" width="8" height="8" stroke="#cdff6b" strokeWidth="2"/></svg>
                <h3 className="text-2xl md:text-3xl font-extrabold text-tali-lime tracking-tight" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif'}}>Our Mission</h3>
              </div>
              <div className="w-12 h-1 bg-tali-lime rounded-full mb-4" />
              <p className="text-base text-tali-text-secondary leading-relaxed">
                Seamlessly merging technology, luxury, and scale to create booking experiences that are as 
                elegant as they are powerful. We empower businesses to deliver exceptional experiences to their guests.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
        `}</style>

        {/* Core Values */}
        <div className="relative text-center mb-16 flex flex-col pt-16 items-center">
          {/* Decorative Background Headline for Values */}
          <div
            className="background-headline wm wow slideInUp animated"
           style={{
              color: '#fff',
              fontSize: 'clamp(2rem, 7vw, 7.5rem)',
              opacity: 0.13,
              position: 'absolute',
              paddingTop: '3rem',
              left: 0,
              paddingLeft: '2rem',
              zIndex: 0,
              width: '100%',
              textAlign: 'center',
              fontFamily: 'Red Hat Display, sans-serif',
              letterSpacing: 'clamp(1rem, 6vw, 2rem)',
              textTransform: 'uppercase',
              visibility: 'visible',
              animationName: 'slideInUp',
              backgroundSize: 'cover',
              transform: 'translate3d(0px, 0px, 0px)',
              pointerEvents: 'none',
              userSelect: 'none',
              top: 0,
            }}
          >
            VALUES
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 pt-3 text-tali-lime ">
            <span className="text-gradient-lime">Core Values</span>
          </h3>
            <div
              className="small-border bg-color wow zoomIn "
              style={{
                width: 80,
                height: 2,
                background: '#cdff6b',
                margin: '0 auto 32px auto',
                borderRadius: 2,
                
                animation: 'zoomIn 0.6s',
                visibility: 'visible',
              }}
              data-wow-delay=".4s"
            ></div>
         
          {/* Mobile & Desktop: Values Cards */}
          <div ref={valuesRef} className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-8 w-full pt-12 max-w-4xl md:max-w-7xl mx-auto z-10">
            {/* Desktop: Horizontal Timeline Line - Goes through numbered circles */}
            <div className="hidden md:block absolute h-0.5 bg-gradient-to-r from-tali-lime/60 via-tali-lime/40 to-tali-lime/60 z-0" style={{
              top: '72px', // pt-12 (48px) + half circle height (24px) = 72px
              left: '10%',
              right: '10%',
              maxWidth: '80%',
              margin: '0 auto'
            }} />
            
            {/* Mobile: Vertical Timeline Line */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tali-lime via-tali-lime/60 to-transparent z-0" />
            
            {values.map((value, index) => {
              const isVisible = visibleCards.has(index);
              const isHovered = hoveredCard === index;
              return (
                <div 
                  key={index} 
                  className="relative flex-1 w-full max-w-sm mx-auto md:mx-0 mb-8 md:mb-0 md:min-h-[300px] md:flex md:flex-col md:items-center"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Mobile: Vertical Card with Side Timeline */}
                  <div className="md:hidden flex items-start gap-4">
                    {/* Timeline Dot - Static, no animation */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-tali-lime to-tali-lime-bright flex items-center justify-center text-xl font-bold text-tali-purple-dark shadow-xl border-4 border-white/20 z-10">
                      {index + 1}
                    </div>
                    {/* Mobile Card - Slides from right */}
                    <div className={`flex-1 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                    }`} style={{ transitionDelay: `${index * 150}ms` }}>
                      <div className={`bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 transition-all duration-300 ${
                        isHovered ? 'border-tali-lime/40 scale-[1.02]' : 'hover:border-tali-lime/40 hover:scale-[1.02]'
                      }`}>
                        <h4 className="text-xl font-bold text-tali-lime mb-3">{value.title}</h4>
                        <p className="text-white/90 leading-relaxed text-sm">{value.description}</p>
                        {/* Mobile: Accent line */}
                        <div className={`h-1 bg-tali-lime rounded-full mt-4 transition-all duration-500 ${
                          isVisible ? 'w-12 opacity-100' : 'w-0 opacity-0'
                        }`} style={{ transitionDelay: `${index * 150 + 300}ms` }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Horizontal Card Layout with Fixed Height */}
                  <div className="hidden md:flex flex-col items-center text-center h-full w-full">
                    {/* Timeline Dot - Static, no animation */}
                    <div className="w-12 h-12 mb-6 rounded-full bg-tali-lime flex items-center justify-center text-lg font-bold text-tali-purple-dark shadow-lg z-20 flex-shrink-0 relative">
                      {index + 1}
                    </div>
                    {/* Desktop Card with Fixed Dimensions - Slides from right */}
                    <div className={`w-full flex-1 flex flex-col max-w-xs transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                    }`} style={{ transitionDelay: `${index * 150}ms` }}>
                      <div className={`bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md border border-white/20 transition-all duration-300 h-full flex flex-col min-h-[200px] ${
                        isHovered ? 'border-white/30 bg-white/15 scale-[1.02]' : 'hover:border-white/30 hover:bg-white/15 hover:scale-[1.02]'
                      }`}>
                        <h4 className="text-xl font-bold text-tali-lime mb-3 flex-shrink-0 text-center">{value.title}</h4>
                        <p className="text-white/90 leading-relaxed text-sm flex-1 text-center">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;