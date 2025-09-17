import React, { useEffect, useRef, useState } from "react";

const CARD_WIDTH = 600;
const CARD_HEIGHT = 360;
const SLIDE_INTERVAL = 3500;

const UpcomingEventsCarousel = ({ events }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (events.length <= 1) return;
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % events.length);
    }, SLIDE_INTERVAL);
    return () => clearTimeout(timeoutRef.current);
  }, [current, events.length]);

  if (!events.length) {
    return <div className="col-span-full text-center text-white/70 text-xl py-16">No upcoming events.</div>;
  }

  const event = events[current];

  return (
    <div className="flex justify-center mb-10 sm:mb-16 w-full">
      <div
        className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 border border-white/10 hover:border-tali-lime/70 transition-all duration-400 flex flex-col"
        style={{
          boxShadow: "0 8px 32px 0 rgba(205,255,107,0.10)",
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          maxWidth: "100%",
          minHeight: CARD_HEIGHT,
        }}
      >
        {/* Edge-to-edge background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={event.img}
            alt={event.title}
            className="w-full h-full object-cover scale-105 group-hover:scale-110 "
            style={{ objectPosition: event.artist === "Myriam Fares" ? "center 2%" : "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />
        </div>
        {/* Top left date badge */}
        <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-tali-lime/40 text-tali-lime font-bold text-base shadow-lg flex items-center gap-2 animate-fadeInUp max-w-[60%] truncate">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4" stroke="#cdff6b" strokeWidth="2" opacity="0.3"/><rect x="7" y="8" width="10" height="10" stroke="#cdff6b" strokeWidth="2"/></svg>
          <span className="truncate">{event.date}</span>
        </div>
        {/* Top right artist badge or Book button */}
        {event.artist === "Myriam Fares" ? (
          <a
            href="https://kikis.jointali.com/event/1331/FRI+19.09+%7C+MYRIAM+FARES+%7C+KIKI%27S+WHITE"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 right-6 z-30 px-4 py-2 rounded-xl text-[#1a1333] font-extrabold text-base shadow-lg flex items-center gap-2 animate-fadeInUp border-2 border-tali-lime/70 hover:bg-[#d4ff3f] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-tali-lime/40"
            style={{ background: "#cdff6b", boxShadow: "0 2px 12px 0 #cdff6b55", minWidth: "110px", fontFamily: "Red Hat Display, Montserrat, Poppins, sans-serif", pointerEvents: "auto" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#1a1333]">
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
            className="absolute top-6 right-6 z-30 px-4 py-2 rounded-xl text-[#1a1333] font-extrabold text-base shadow-lg flex items-center gap-2 animate-fadeInUp border-2 border-tali-lime/70 hover:bg-[#d4ff3f] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-tali-lime/40"
            style={{ background: "#cdff6b", boxShadow: "0 2px 12px 0 #cdff6b55", minWidth: "110px", fontFamily: "Red Hat Display, Montserrat, Poppins, sans-serif", pointerEvents: "auto" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#1a1333]">
              <rect x="3" y="7" width="18" height="10" rx="2" fill="#cdff6b" stroke="#b6e800" strokeWidth="1.5" />
              <path d="M7 7v10M17 7v10" stroke="#b6e800" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="2" fill="#b6e800" />
            </svg>
            Book
          </a>
        ) : (
          <div className="absolute top-6 right-6 z-10 px-4 py-2 rounded-xl bg-tali-lime/90 text-[#1a1333] font-bold text-base shadow-lg flex items-center gap-2 animate-fadeInUp max-w-[60%] truncate" style={{ fontFamily: "Red Hat Display, Montserrat, Poppins, sans-serif" }}>
            <span className="truncate">{event.artist}</span>
          </div>
        )}
        {/* Main content: event title and description with new layout */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pb-8 pt-24 px-8 overflow-visible">
          <h3 className="text-2xl font-extrabold text-white mb-1 drop-shadow-lg text-left" style={{ fontFamily: "Red Hat Display, Montserrat, Poppins, sans-serif", letterSpacing: "-0.01em", maxWidth: "100%" }}>
            {event.title}
          </h3>
          <div className="w-10 h-1 bg-tali-lime rounded-full mb-2 ml-0" />
          <p className="text-white/80 text-sm font-normal text-left mb-2 max-w-full" style={{ fontFamily: "Montserrat, Poppins, sans-serif", lineHeight: 1.5 }}>
            {event.desc}
          </p>
        </div>
        {/* Animated border glow on hover */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(120deg, #cdff6b33 0%, #37199022 100%)", zIndex: 1, boxShadow: "0 0 32px 0 #cdff6b44" }} />
      </div>
    </div>
  );
};

export default UpcomingEventsCarousel;