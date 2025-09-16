import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import amr1 from "@/assets/artists/amrdiab/amr3.jpg";
import myriam from "@/assets/artists/Myriamfares/myriam.jpg";
import pawsa from "@/assets/artists/pawsa/pawsa1.jpg";
import yara from "@/assets/artists/yaratarek/yara3.jpg";
import wegz from "@/assets/artists/wegz/wegz.jpg";


const upcomingEvents = [
    {
    title: "Myriam Fares at KIKI’s White",
    date: "Sep 19 | 09:00 PM",
    image: myriam,
    desc: "Sep 19 | 09:00 PM\nKIKI’s Beach, Hacienda White. A magical evening with Myriam Fares, full of energy and dance.",
    artist: { name: 'Myriam Fares', image: myriam }
  },
  // {
  //   title: "Wegz Live Album Launch at KIKI'S Sage",
  //   date: "Sept 18, 2025",
  //   image: wegz,
  //   desc: "Wegz performing live at KIKI's Sage for his official album launch at 8pm.",
  //   artist: { name: 'Wegz', image: wegz }
  // },

  // {
  //   title: 'Sunset Beach Party',
  //   date: 'Oct 5, 2025',
  //   image: amr1,
  //   desc: 'Dance into the night with live music and beach vibes.',
  //   artist: { name: 'Amr Diab' }
  // },
  // {
  //   title: 'Electro Parade',
  //   date: 'Oct 12, 2025',
  //   image: yara,
  //   desc: 'Join the parade with electrifying performances and light shows.',
  //   artist: { name: 'Yara Tarek'}
  // },
  // {
  //   title: 'Closing Ceremony',
  //   date: 'Oct 19, 2025',
  //   image: pawsa,
  //   desc: 'Celebrate the festival finale with a spectacular show.',
  //   artist: { name: 'Pawsa' }
  // },
];


const hotEvents = [
   {
    title: "Myriam Fares at KIKI’s White",
    date: "Sep 19 | 09:00 PM",
    image: myriam,
    desc: "Sep 19 | 09:00 PM\nKIKI’s Beach, Hacienda White. A magical evening with Myriam Fares, full of energy and dance.",
    artist: { name: 'Myriam Fares', image: myriam }
  },
  {
    title: "Wegz Live Album Launch at KIKI'S Sage",
    date: "Sept 18, 2025",
    image: wegz,
    desc: "Wegz performing live at KIKI's Sage for his official album launch at 8pm.",
    artist: { name: 'Wegz', image: wegz }
  },
 
  {
    title: 'VIP Night Party',
    date: 'Sept 20, 2025',
    image: amr1,
    desc: 'Experience an exclusive night with top DJs and special guests.',
    artist: { name: 'Amr Diab' }
  },

];

const EventsSection = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % upcomingEvents.length);
  const prev = () => setCurrent((c) => (c - 1 + upcomingEvents.length) % upcomingEvents.length);

  // Auto-carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % upcomingEvents.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, [upcomingEvents.length]);

  // Generate confetti dots only once
  const confettiDots = useMemo(() => {
    return [...Array(30)].map((_, i) => (
      <span
        key={i}
        className="absolute rounded-full opacity-60"
        style={{
          width: `${8 + Math.random() * 12}px`,
          height: `${8 + Math.random() * 12}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: `hsl(${Math.floor(Math.random()*360)},90%,60%)`,
          filter: 'blur(0.5px)',
        }}
      />
    ));
  }, []);

  return (
    <section className="relative py-16 text-white overflow-hidden" style={{background: '#371990'}}>
      {/* Background Headline */}
      <div
        className="background-headline wm wow slideInUp animated"
        style={{
          color: '#fff',
          fontSize: 'clamp(3rem, 8vw, 7.5rem)',
          opacity: 0.2,
          position: 'absolute',
          left: 0,
          width: '100%',
          textAlign: 'center',
          paddingTop: '3rem',
          paddingLeft: 'clamp(0px, 4vw, 60px)',
          fontFamily: 'Red Hat Display, sans-serif',
          letterSpacing: 'clamp(1rem, 9vw, 6rem)',
          textTransform: 'uppercase',
          visibility: 'visible',
          animationName: 'slideInUp',
          backgroundSize: 'cover',
          transform: 'translate3d(0px, 0px, 0px)',
          pointerEvents: 'none',
          userSelect: 'none',
          top: 0,
          zIndex: 0,
        }}
      >
        EVENTS
      </div>
      {/* Party vibe background: colored light rays and confetti (static, not affected by carousel) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Light rays */}
        <div className="absolute left-1/4 top-0 w-1/2 h-full bg-gradient-to-br from-tali-lime/30 via-pink-500/10 to-transparent rotate-12 blur-2xl" />
        <div className="absolute right-0 top-1/3 w-1/3 h-1/2 bg-gradient-to-tl from-pink-500/20 via-tali-lime/10 to-transparent -rotate-12 blur-2xl" />
        {/* Confetti dots */}
        <div className="absolute inset-0">
          {confettiDots}
        </div>
      </div>
      <div className="container mx-auto max-w-7xl section-content relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-tali-lime font-semibold">01</span> Events
          </h2>
        </div>
        <div className="relative z-10">
          {/* Carousel */}
          <div className="relative max-w-2xl mx-auto mb-16">
            <div className="overflow-hidden rounded-3xl shadow-2xl relative bg-[#1a0e3a]" style={{height: '420px', maxHeight: '90vw'}}>
              <img
                src={upcomingEvents[current].image}
                alt={upcomingEvents[current].title}
                className={`w-full h-full object-cover  rounded-3xl`
                  + (upcomingEvents[current].artist.name === 'Myriam Fares' ? ' object-top' : '')
                  + (upcomingEvents[current].artist.name === 'Yara Tarek' || upcomingEvents[current].artist.name === 'Pawsa' ? ' object-[center_20%]' : '')
                }
                style={{height: '100%', minHeight: 320, objectPosition: (upcomingEvents[current].artist.name === 'Yara Tarek' ) ? 'center 85%' : (upcomingEvents[current].artist.name === 'Myriam Fares' ? 'top' : 'center')}}
              />
              {/* Artist avatar */}
              <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1 shadow-lg">
                
                <span className="text-white font-semibold text-sm">{upcomingEvents[current].artist.name}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#371990] to-transparent p-6">
                <h3 className="text-2xl font-bold mb-1">{upcomingEvents[current].title}</h3>
                <span className="bg-tali-lime text-[#371990] font-bold px-3 py-1 rounded-full text-xs mr-2">{upcomingEvents[current].date}</span>
                <p className="mt-2 text-sm opacity-90">{upcomingEvents[current].desc}</p>
              </div>
            </div>
            {upcomingEvents.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-tali-lime text-white hover:text-[#371990] rounded-full p-2 shadow-lg transition-colors duration-200">
                  &#8592;
                </button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-tali-lime text-white hover:text-[#371990] rounded-full p-2 shadow-lg transition-colors duration-200">
                  &#8594;
                </button>
              </>
            )}
          </div>
          {/* Hot Events */}
          <h3 className="text-2xl font-bold mb-6 text-tali-lime text-center">Hot Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotEvents.map((event, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-[#371990] to-[#4e2db0] rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col relative border-2 border-tali-lime"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    style={{objectPosition:  (event.artist.name === 'Myriam Fares') ? 'top' : (event.artist.name === 'wegz') ? 'center 35%' : 'center 35%'}}
                  />
                  {/* Artist avatar */}
                  <div className="absolute top-4 right-4 flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1 shadow-lg">
                    <span className="text-white font-semibold text-sm">{event.artist.name}</span>
                  </div>
                  <span className="absolute top-4 left-4 bg-tali-lime text-[#371990] font-bold px-3 py-1 rounded-full text-xs shadow-lg">
                    {event.date}
                  </span>
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-tali-lime transition-colors duration-200">
                    {event.title}
                  </h4>
                  <p className="mb-4 text-sm opacity-90 flex-1">{event.desc}</p>
                  {event.artist.name === 'Myriam Fares' && (
                    <a
                      href="https://kikis.jointali.com/event/1331/FRI+19.09+%7C+MYRIAM+FARES+%7C+KIKI%27S+WHITE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto bg-tali-lime text-[#371990] font-bold px-4 py-2 rounded-lg shadow hover:bg-[#d4ff3f] transition-colors duration-200 text-center"
                      style={{ display: 'inline-block' }}
                    >
                      Book Now
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Explore More Button */}
          <div className="flex justify-center mt-12 pt-4 ">
            <Link
              to="/events"
              className="inline-block bg-tali-lime text-[#371990] font-bold pt-2 px-14 py-3 rounded-full shadow-lg hover:bg-[#d4ff3f] transition-colors duration-200 text-lg"
              style={{ minWidth: '220px', textAlign: 'center' }}
            >
              Explore More Events
            </Link>
          </div>
        </div>
      </div>
    </section>
    );
};
export default EventsSection;