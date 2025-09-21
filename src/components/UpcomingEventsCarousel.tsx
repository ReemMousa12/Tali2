import React, { useState } from "react";

const UpcomingEventsCarousel = ({ events }) => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mouseStart, setMouseStart] = useState(null);
  const [mouseEnd, setMouseEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Navigation functions
  const next = () => setCurrent((prev) => (prev + 1) % events.length);
  const prev = () => setCurrent((prev) => (prev - 1 + events.length) % events.length);

  // Swipe/drag functionality
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

  if (!events.length) {
    return <div className="col-span-full text-center text-white/70 text-xl py-16">No upcoming events.</div>;
  }

  const event = events[current];

  return (
    <div className="flex justify-center mb-10 sm:mb-16 w-full  sm:px-4">
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
            src={event.img}
            alt={event.title}
            className={`w-full h-full object-cover ${event.artist === "Myriam Fares" ? "" : "group-hover:scale-110"}`}
            style={{ objectPosition: event.artist === "Myriam Fares" ? "center 2%" : event.artist === "Yoyaku" ? "center 10%" : "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />
        </div>
        {/* Top left date badge */}
        <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-10 px-2 py-1 sm:px-4 sm:py-2 rounded-xl bg-white/20 backdrop-blur-md border border-tali-lime/40 text-tali-lime font-bold text-sm sm:text-base shadow-lg flex items-center gap-1 sm:gap-2 animate-fadeInUp max-w-[60%] truncate">
          <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4" stroke="#cdff6b" strokeWidth="2" opacity="0.3"/><rect x="7" y="8" width="10" height="10" stroke="#cdff6b" strokeWidth="2"/></svg>
          <span className="truncate">{event.date}</span>
        </div>
        {/* Top right artist badge or Book button */}
        {event.artist === "Myriam Fares" ? (
          <a
            href="https://kikis.jointali.com/event/1331/FRI+19.09+%7C+MYRIAM+FARES+%7C+KIKI%27S+WHITE"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 sm:top-6 sm:right-6 z-30 px-2 py-1 sm:px-4 sm:py-2 rounded-xl text-[#1a1333] font-extrabold text-sm sm:text-base shadow-lg flex items-center gap-1 sm:gap-2 animate-fadeInUp border-2 border-tali-lime/70 hover:bg-[#d4ff3f] hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-tali-lime/40"
            style={{ background: "#cdff6b", boxShadow: "0 2px 12px 0 #cdff6b55", minWidth: "80px", fontFamily: "Red Hat Display, Montserrat, Poppins, sans-serif", pointerEvents: "auto" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a1333]">
              <rect x="3" y="7" width="18" height="10" rx="2" fill="#cdff6b" stroke="#b6e800" strokeWidth="1.5" />
              <path d="M7 7v10M17 7v10" stroke="#b6e800" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="2" fill="#b6e800" />
            </svg>
            Book
          </a>
        ) : event.artist === "Yoyaku" ? (
          <a
            href="https://human-figures.jointali.com/event/81/PHXYOYAKU"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 sm:top-6 sm:right-6 z-30 px-2 py-1 sm:px-4 sm:py-2 rounded-xl text-[#1a1333] font-extrabold text-sm sm:text-base shadow-lg flex items-center gap-1 sm:gap-2 animate-fadeInUp border-2 border-tali-lime/70 hover:bg-[#d4ff3f] hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-tali-lime/40"
            style={{ background: "#cdff6b", boxShadow: "0 2px 12px 0 #cdff6b55", minWidth: "80px", fontFamily: "Red Hat Display, Montserrat, Poppins, sans-serif", pointerEvents: "auto" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a1333]">
              <rect x="3" y="7" width="18" height="10" rx="2" fill="#cdff6b" stroke="#b6e800" strokeWidth="1.5" />
              <path d="M7 7v10M17 7v10" stroke="#b6e800" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="2" fill="#b6e800" />
            </svg>
            Book
          </a>
        ) : (
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 px-2 py-1 sm:px-4 sm:py-2 rounded-xl bg-tali-lime/90 text-[#1a1333] font-bold text-sm sm:text-base shadow-lg flex items-center gap-1 sm:gap-2 animate-fadeInUp max-w-[60%] truncate" style={{ fontFamily: "Red Hat Display, Montserrat, Poppins, sans-serif" }}>
            <span className="truncate">{event.artist}</span>
          </div>
        )}
        {/* Main content: event title and description with new layout */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pb-4 pt-16 px-4 sm:pb-8 sm:pt-24 sm:px-8 overflow-visible">
          <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-1 drop-shadow-lg text-left" style={{ fontFamily: "Red Hat Display, Montserrat, Poppins, sans-serif", letterSpacing: "-0.01em", maxWidth: "100%" }}>
            {event.title}
          </h3>
          <div className="w-8 sm:w-10 h-1 bg-tali-lime rounded-full mb-2 ml-0" />
          <p className="text-white/80 text-xs sm:text-sm font-normal text-left mb-2 max-w-full" style={{ fontFamily: "Montserrat, Poppins, sans-serif", lineHeight: 1.5 }}>
            {event.desc}
          </p>
        </div>
        {/* Animated border glow on hover */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(120deg, #cdff6b33 0%, #37199022 100%)", zIndex: 1, boxShadow: "0 0 32px 0 #cdff6b44" }} />
        
        {/* Swipe indicators - only show if more than 1 event */}
        {events.length > 1 && (
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {events.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === current ? 'bg-tali-lime scale-125' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
        </div>
        
        {/* Navigation instruction for multiple events */}
      
      </div>
    </div>
  );
};

export default UpcomingEventsCarousel;