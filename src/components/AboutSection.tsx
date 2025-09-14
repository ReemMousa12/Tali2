import aboutImage from "@/assets/about-image.jpg";
import one from "@/assets/background/1.jpg";

const AboutSection = () => {
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

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden" style={{ background: '#371990' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 geometric-overlay opacity-20" />
      
      {/* Background Headline */}
      <div
        className="background-headline wm wow slideInUp animated"
         style={{
          color: '#fff',
          fontSize: 120,
          opacity: 0.2,
          position: 'absolute',
          left: 0,
          zIndex: 0,
          width: '100%',
          textAlign: 'center',
          fontFamily: 'Red Hat Display, sans-serif',
         
          letterSpacing: '4rem',
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
           
            <h3 className="text-5xl font-bold  mb-8 text-tali-lime ">
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
        <div className="relative mb-32 " style={{
          backgroundImage: `url(${one})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '2rem',
          overflow: 'hidden',
          paddingTop: '4rem',
          position: 'relative',
          left: '50%',
          right: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '80vh',
        }}>
          {/* Decorative PURPOSE background text */}
          <div
            className="background-headline wm wow slideInUp animated"
            style={{
              color: '#fff',
              fontSize: 120,
              opacity: 0.13,
              position: 'absolute',
              paddingTop: '4rem',
              left: 0,
              zIndex: 0,
              width: '100%',
              textAlign: 'center',
              fontFamily: 'Red Hat Display, sans-serif',
              letterSpacing: '4rem',
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
            PURPOSE
          </div>

          <h3 className="text-5xl font-bold mb-8 text-tali-lime pt-8 text-center relative z-10" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif', letterSpacing: '-0.04em'}}>Vision & Mission</h3>
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
        <div className="relative text-center mb-16 flex flex-col items-center">
          {/* Decorative Background Headline for Values */}
          <div
            className="background-headline wm wow slideInUp animated"
            style={{
              color: '#fff',
              fontSize: 120,
              opacity: 0.13,
              position: 'absolute',
              left: 0,
              zIndex: 0,
              width: '100%',
              textAlign: 'center',
              fontFamily: 'Red Hat Display, sans-serif',
              letterSpacing: '4rem',
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
          <h3 className="text-5xl font-bold  mb-8 pt-7 text-tali-lime ">
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
         
          {/* Horizontal Timeline for Core Values */}
          <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-0 w-full pt-12 max-w-6xl mx-auto z-10">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-tali-lime/60 to-tali-lime/0 z-0" style={{maxWidth: '90%', margin: '0 auto', transform: 'translateY(-50%)'}} />
            {values.map((value, index) => {
              const isUp = index % 2 === 0;
              return (
                <div key={index} className="relative flex-1 flex flex-col items-center text-center px-2 min-w-[160px] max-w-xs mb-8 md:mb-0 w-full sm:max-w-xs">
                  {/* Card above or below */}
                  <div className="flex flex-row items-center text-left w-full md:flex-col md:items-center md:text-center">
                    {/* Timeline Dot (Number) */}
                    <div className="w-10 h-10 mr-4 md:mr-0 md:mb-4 rounded-full bg-gradient-to-br from-tali-lime to-tali-lime-bright flex items-center justify-center text-lg font-bold text-tali-purple-dark shadow-lg border-4 border-white/30 z-10">
                      {index + 1}
                    </div>
                    <div className={isUp ? "mb-6 w-full" : "mt-6 w-full"}>
                      <div className="bg-white/10 rounded-2xl p-4 md:p-6 shadow-xl backdrop-blur-md border border-tali-lime/20 group hover:scale-[1.04] transition-transform duration-300 w-full sm:max-w-xs sm:border-2 sm:shadow-2xl sm:bg-white/20 sm:p-8 sm:rounded-3xl xs:w-full xs:mx-0 xs:mb-6 xs:border-l-4 xs:border-tali-lime xs:rounded-lg xs:shadow-md xs:bg-white/20">
                        <h4 className="text-lg md:text-2xl font-bold text-tali-lime mb-2">{value.title}</h4>
                        <p className="text-tali-text-secondary leading-relaxed text-xs md:text-base">{value.description}</p>
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