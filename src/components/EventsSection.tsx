import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import amr1 from "@/assets/artists/amrdiab/amr3.jpg";
import myriam from "@/assets/artists/Myriamfares/myriam.jpg";
import pawsa from "@/assets/artists/pawsa/pawsa1.jpg";
import yara from "@/assets/artists/yaratarek/yara3.jpg";
import wegz from "@/assets/artists/wegz/wegz.jpg";
import yoyaku1 from "@/assets/artists/yoyaku/y3.png";


import hotsince1 from "@/assets/artists/hotsince'82/h2.jpg";
import caiiro1 from "@/assets/artists/caiiro/c2.jpg";
import playhaus from "@/assets/artists/playhaus/p1.jpg";






const upcomingEvents = [
   {
    title: "Yoyaku 10th Anniversary Showcase",
    date: "Oct 9, 2025 | 7:00 PM",
    image: yoyaku1,
    desc: "Yoyaku celebrates 10 years in Cairo! Join O.bee B2B Toman Station, Mari.te, Zeina, and Hermit B2B Joey for a special night at The Warehouse, Cairo Business Park. Early Bird: 1500 EGP. Doors open 7 PM.",
    artist: { name: 'YOYAKU', image: yoyaku1 },
    bookUrl: "https://human-figures.jointali.com/event/81/PHXYOYAKU"
  },
  {
    title: "Myriam Fares at KIKI’s White",
    date: "Sep 19 | 09:00 PM",
    image: myriam,
    desc: "Sep 19 | 09:00 PM\nKIKI’s Beach, Hacienda White. A magical evening with Myriam Fares, full of energy and dance.",
    artist: { name: 'Myriam Fares', image: myriam }
  },
 
 
];


const hotEvents = [
   {
    title: "Yoyaku 10th Anniversary Showcase",
    date: "Oct 9, 2025 | 7:00 PM",
    image: yoyaku1,
    desc: "Yoyaku celebrates 10 years in Cairo! Join O.bee B2B Toman Station, Mari.te, Zeina, and Hermit B2B Joey for a special night at The Warehouse, Cairo Business Park. Early Bird: 1500 EGP. Doors open 7 PM.",
    artist: { name: 'YOYAKU', image: yoyaku1 },
    bookUrl: "https://human-figures.jointali.com/event/81/PHXYOYAKU"
  },
  {
    title: "Myriam Fares at KIKI’s White",
    date: "Sep 19 | 09:00 PM",
    image: myriam,
    desc: "Sep 19 | 09:00 PM\nKIKI’s Beach, Hacienda White. A magical evening with Myriam Fares, full of energy and dance.",
    artist: { name: 'Myriam Fares', image: myriam }
  },
  
   {
    title: "PLAYHAUS Showcase ft. Laidlaw",
    date: "Aug 16, 2025 | 3:00 PM",
    image: playhaus,
    desc: "UK sensation Laidlaw makes his Egypt debut alongside Youssef Awadly, Hisham Zahran, Maie, Safe Sol & Toola. Two stages from 3 PM late into the night with open bar & food 3-5 PM.",
    artist: { name: 'Laidlaw', image: playhaus }
  },
  {
    title: "Hot Since 82, Awadly & Azaar",
    date: "Jul 17, 2025 | 9:00 PM",
    image: hotsince1,
    desc: "The legendary Hot Since 82 brings his signature sound with support from Awadly and Azaar.",
    artist: { name: 'Hot Since 82', image: hotsince1 }
  },
  {
    title: "Pawsa - KIKI's Opening",
    date: "Jul 18, 2025 | 9:00 PM",
    image: pawsa,
    desc: "Join us for the opening party featuring Pawsa with special guests Aly B and Delrady at KIKI's Sage.",
    artist: { name: 'Pawsa', image: pawsa }
  },
  {
    title: "Caiiro, George Gehad & Hey-D",
    date: "Jul 21, 2025 | 9:00 PM",
    image: caiiro1,
    desc: "South African house master Caiiro headlines with George Gehad and Hey-D.",
    artist: { name: 'Caiiro', image: caiiro1 }
  }
  
 

];

const EventsSection = () => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mouseStart, setMouseStart] = useState(null);
  const [mouseEnd, setMouseEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % upcomingEvents.length);
  const prev = () => setCurrent((c) => (c - 1 + upcomingEvents.length) % upcomingEvents.length);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Touch events
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }
  };

  // Mouse events for desktop
  const onMouseDown = (e) => {
    setMouseEnd(null);
    setMouseStart(e.clientX);
    setIsDragging(true);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!mouseStart || !mouseEnd || !isDragging) {
      setIsDragging(false);
      return;
    }
    
    const distance = mouseStart - mouseEnd;
    const isLeftDrag = distance > minSwipeDistance;
    const isRightDrag = distance < -minSwipeDistance;

    if (isLeftDrag) {
      next();
    } else if (isRightDrag) {
      prev();
    }
    
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

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
    <section className="relative py-28 text-white overflow-hidden" style={{background: '#371990'}}>
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
          paddingTop: '6rem',
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
      <div className="container mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-tali-lime font-semibold">01</span> Events
          </h2>
        </div>
        <div className="relative z-10">
          {/* Carousel */}
          <div className="flex justify-center mb-10 sm:mb-16 w-full px-1 sm:px-4">
            <div className="relative w-full max-w-6xl sm:max-w-2xl">
              <div
                className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 border border-white/10 hover:border-tali-lime/70 flex flex-col cursor-grab active:cursor-grabbing select-none w-full h-[250px] sm:h-[360px] md:h-[400px]"
                style={{
                  boxShadow: "0 8px 32px 0 rgba(205,255,107,0.10)",
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseLeave}
            >
              {/* Edge-to-edge background image with overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={upcomingEvents[current].image}
                  alt={upcomingEvents[current].title}
                  className={`w-full h-full object-cover scale-105 ${upcomingEvents[current].artist.name === "Myriam Fares" ? "" : "group-hover:scale-110"}`}
                  style={{ objectPosition: upcomingEvents[current].artist.name === "Myriam Fares" ? "center 2%" : upcomingEvents[current].artist.name === "YOYAKU" ? "center 10%" : "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />
              </div>
              
              {/* Artist avatar */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center space-x-2 bg-white/20 rounded-full px-2 sm:px-3 py-1 shadow-lg">
                
                <span className="text-white font-semibold text-xs sm:text-sm">{upcomingEvents[current].artist.name}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#371990] to-transparent p-3 sm:p-6">
                <h3 className="text-lg sm:text-2xl font-bold mb-1">{upcomingEvents[current].title}</h3>
                <span className="bg-tali-lime text-[#371990] font-bold px-2 sm:px-3 py-1 rounded-full text-xs mr-2">{upcomingEvents[current].date}</span>
                <p className="mt-2 text-xs sm:text-sm opacity-90">{upcomingEvents[current].desc}</p>
              </div>
              {/* Swipe indicator */}
              {upcomingEvents.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {upcomingEvents.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === current ? 'bg-tali-lime' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
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
                    className={`object-cover w-full h-full group-hover:scale-110 ${event.artist.name === 'Myriam Fares' ? '' : 'transition-transform duration-300'}`}
                    style={{objectPosition:  (event.artist.name === 'Myriam Fares') ? 'top' : (event.artist.name === 'YOYAKU') ? '10% center' : (event.artist.name === 'wegz') ? 'center 35%' : 'center 35%'}}
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
                  
                  {event.artist.name === 'YOYAKU' && event.bookUrl && new Date('2025-10-09') > new Date() && (
                    <a 
                      href={event.bookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-tali-lime text-[#371990] font-bold px-4 py-2 rounded-xl shadow-md hover:bg-[#d4ff3f] transition-colors duration-200 text-center w-full"
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
              className="inline-block bg-tali-lime text-[#371990] font-bold pt-2 px-14 py-3 rounded-full shadow-lg hover:bg-[#d4ff3f] transition-colors duration-200 text-lg flex items-center justify-center gap-2"
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