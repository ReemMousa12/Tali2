import Header from "../components/Header";
import Footer from "../components/Footer";
import ScheduleSection from "../components/ScheduleSection";
import UpcomingEventsCarousel from "../components/UpcomingEventsCarousel";
import { useState } from "react";
import bg2 from "@/assets/background/3.jpg";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";

// Import artist images

import amr1 from "@/assets/artists/amrdiab/amr1.jpg";
import amr2 from "@/assets/artists/amrdiab/amr2.jpg";
import amr3 from "@/assets/artists/amrdiab/amr3.jpg";
import myriam from "@/assets/artists/Myriamfares/myriam.jpg";
import pawsa1 from "@/assets/artists/pawsa/pawsa1.jpg";
import pawsa2 from "@/assets/artists/pawsa/pawsa2.jpg";
import pawsa3 from "@/assets/artists/pawsa/pawsa3.jpg";
import pawsa4 from "@/assets/artists/pawsa/pawsa4.jpg";
import wegz from "@/assets/artists/wegz/wegz.jpg";
import yara1 from "@/assets/artists/yaratarek/yara1.jpg";
import yara2 from "@/assets/artists/yaratarek/yara2.jpg";
import yara3 from "@/assets/artists/yaratarek/yara3.jpg";
import yoyaku1 from "@/assets/artists/yoyaku/y2.png";
import thatgirl from "@/assets/artists/thatgirlsherryk/t1.jpg";
import kz from "@/assets/artists/kzandcake/k1.jpg";

// KIKI's schedule artists
import notredame1 from "@/assets/artists/NOTREDAME/N1.jpg";
import caiiro1 from "@/assets/artists/caiiro/c2.jpg";
import hotsince1 from "@/assets/artists/hotsince'82/h2.jpg";
import misty1 from "@/assets/artists/misty/m1.jpg";
import fspins1 from "@/assets/artists/f-spins/f1.jpg";
import rolbac1 from "@/assets/artists/rolbac/r1.jpg";
import thatgirl1 from "@/assets/artists/thatgirlsherryk/t1.jpg";
import paar1 from "@/assets/artists/paarmuzik/p1.jpg";
import shimza1 from "@/assets/artists/shimza,ziad,kareem/c1.jpg";
import frank from "@/assets/artists/franky/f1.jpg";
import horrible from "@/assets/artists/horribles/h1.jpg";
import jsomar from "@/assets/artists/jsomar/j2.jpg";
import oden from "@/assets/artists/oden/o1.jpg";
import playhaus from "@/assets/artists/playhaus/p1.jpg";
import ashibah from "@/assets/artists/ashibah/a1.jpg";

const allEvents = [
  {
    title: "Myriam Fares at KIKI’s White",
    date: "2025-09-19",
    artist: "Myriam Fares",
    img: myriam,
    desc: "Sep 19 | 09:00 PM\nKIKI’s Beach, Hacienda White. A magical evening with Myriam Fares, full of energy and dance.",
  },
  {
    title: "Wegz Closing",
    date: "2025-08-29",
    artist: "Wegz",
    img: wegz,
    desc: "This weekend, our star Wegz takes over Kiki’s for an unforgettable finale for his official album launch.",
  },
  {
    title: "Yara Tarek & George Gehad",
    date: "2025-08-14",
    artist: "Yara Tarek",
    img: yara2,
    desc: "Experience our communal family-style dinner with Live music by Yara Tarek, then let the night flow with cocktails & music from George Gehad.",
  },
  {
    title: "Amr Diab - 2nd Opening",
    date: "2025-07-19",
    artist: "Amr Diab",
    img: amr1,
    desc: "The second night at KIKIs Sage opening was pure magic as Amr Diab lit up the stage with hit after hit and unstoppable energy.",
  },
  {
    title: "Yoyaku 10th Anniversary Showcase",
    date: "2025-10-09",
    artist: "Yoyaku",
    img: yoyaku1,
    desc: `Yoyaku celebrates 10 years in Cairo! Join O.bee B2B Toman Station, Mari.te, Zeina, and Hermit B2B Joey for a special night at The Warehouse, Cairo Business Park. Early Bird: 1500 EGP. Doors open 7 PM.`,
  },

  // KIKI's Schedule Events - July 2025
  {
    title: "Notre Dame Dou Arshad",
    date: "2025-07-03",
    artist: "Notre Dame",
    img: notredame1,
    desc: "An exclusive night with Notre Dame Dou Arshad at KIKI's Hacienda White. Experience authentic music in a magical setting.",
  },

  {
    title: "Rolbac, Thatgirl Sherryk & Paar Muzik",
    date: "2025-07-10",
    artist: "Rolbac",
    img: rolbac1,
    desc: "An eclectic mix of sounds with Rolbac, Thatgirl Sherryk, and Paar Muzik. Three unique artists, one incredible night.",
  },

  {
    title: "Hot Since 82, Awadly & Azaar",
    date: "2025-07-17",
    artist: "Hot Since 82",
    img: hotsince1,
    desc: "The legendary Hot Since 82 brings his signature sound with support from Awadly and Azaar.",
  },
  {
    title: "Pawsa - KIKI's Opening",
    date: "2025-07-18",
    artist: "Pawsa",
    img: pawsa1,
    desc: "Join us for the opening party featuring Pawsa with special guests Aly B and Delrady at KIKI's Sage.",
  },
  {
    title: "Caiiro, George Gehad & Hey-D",
    date: "2025-07-21",
    artist: "Caiiro",
    img: caiiro1,
    desc: "South African house master Caiiro headlines with George Gehad and Hey-D.",
  },
  {
    title: "Carlita, Misty & F-Spins",
    date: "2025-07-24",
    artist: "Carlita",
    img: misty1,
    desc: "International DJ Carlita joins forces with Misty and F-Spins for a night of cutting-edge electronic music.",
  },
  {
    title: "DJ Habibeats, Moody Jones, KZ & Cake, and Horrible",
    date: "2025-07-25",
    artist: "DJ Habibeats",
    img: horrible,
    desc: "You don't want to miss the second Friday at Kiki's Sage at Hacienda Heneish, featuring DJ Habibeats, Moody Jones, KZ & Cake, and Horrible!",
  },
  {
    title: "KZ & Cake",
    date: "2025-07-25",
    artist: "KZ & Cake",
    img: kz,
    desc: "An afternoon session with KZ & Cake bringing their unique sound and energy to KIKI's Sage.",
  },
  {
    title: "PLAYHAUS Showcase ft. Laidlaw",
    date: "2025-08-16",
    artist: "Laidlaw",
    img: playhaus,
    desc: "UK sensation Laidlaw makes his Egypt debut alongside Youssef Awadly, Hisham Zahran, Maie, Safe Sol & Toola. Two stages from 3 PM late into the night with open bar & food 3-5 PM.",
  },
  {
    title: "Sweely, Talaia, and Jjust Omar",
    date: "2025-08-01",
    artist: "Sweely",
    img: jsomar,
    desc: "Friday, August 1st is hitting hard with Sweely, Talaia, and Jjust Omar at Hacienda Heneish. Get ready for an intense night of beats!",
  },
  {
    title: "Ashibah, ThatGirl SherryK, and Mady 303",
    date: "2025-08-08",
    artist: "Ashibah",
    img: ashibah,
    desc: "Join us on August 8th with Ashibah, ThatGirl SherryK, and Mady 303 at Hacienda Heneish for an afternoon of incredible music!",
  },
  {
    title: "Oden & Fatzo",
    date: "2025-08-15",
    artist: "Oden & Fatzo",
    img: oden,
    desc: "KIKI'S Sage presents Oden & Fatzo, Madmotormiquel & Hisham Zahran at Hacienda Heneish for an electrifying Friday night!",
  },
  {
    title: "Yara Tarek LIVE at KIKI'S SAGE",
    date: "2025-08-21",
    artist: "Yara Tarek",
    img: yara1,
    desc: "gather around our long tables for a true seaside experience! Communal family-style dining paired with Yara Tarek's live performance.",
  },
  {
    title: "Gerd Janson, Mall Grab & Misty",
    date: "2025-08-22",
    artist: "Gerd Janson",
    img: event1,
    desc: "Next Friday will hit different with Gerd Janson, Mall Grab & Misty! An exceptional lineup that promises an unforgettable night.",
  },
  {
    title: "Franky Rizardo, Misty & Sonii",
    date: "2025-08-28",
    artist: "Franky Rizardo",
    img: frank,
    desc: "Dutch house legend Franky Rizardo takes the stage with Misty and Sonii for an epic night of house music.",
  },
  {
    title: "Shimza, Ziad Mousa & Kareem Saber",
    date: "2025-07-31",
    artist: "Shimza",
    img: shimza1,
    desc: "South African techno master Shimza closes the month with Ziad Mousa and Kareem Saber for an unforgettable finale.",
  },
];

const EventsPage = () => {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const filtered = allEvents.filter(
    (e) =>
      (!search ||
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.artist.toLowerCase().includes(search.toLowerCase())) &&
      (!date || e.date === date)
  );
  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        background: ` url(${bg2}) center/cover no-repeat`,
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <main className="flex-1">
        {/* Events Grid with Filters */}
        <section className="relative py-10 px-2 sm:px-4 overflow-hidden">
          {/* Decorative EVENTS background text */}
          <div
            className="background-headline wm wow slideInUp animated select-none pointer-events-none"
            style={{
              color: "#fff",
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              opacity: 0.17,
              position: "absolute",
              left: 0,
              zIndex: 1,
              paddingTop: "2rem",
              width: "100%",
              paddingLeft: "1.2rem",
              textAlign: "center",
              fontFamily: "Red Hat Display, sans-serif",
              letterSpacing: "clamp(1rem, 8vw, 6rem)",
              textTransform: "uppercase",
              top: 60,
              userSelect: "none",
            }}
          >
            EVENTS
          </div>
          <div className="container mx-auto max-w-7xl px-0 sm:px-4">
            <h2
              className="text-5xl font-extrabold text-tali-lime text-center mb-12 pt-20 tracking-tight drop-shadow-lg relative z-10"
              style={{
                fontFamily: "Red Hat Display, Montserrat, Poppins, sans-serif",
              }}
            >
              All Events
            </h2>
           
            <div>
              {/* Upcoming Events Heading */}
              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-tali-lime mb-6 sm:mb-8 text-start tracking-tight drop-shadow-lg"
                style={{
                  fontFamily:
                    "Red Hat Display, Montserrat, Poppins, sans-serif",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Upcoming Events
              </h3>
            </div>
            {/* Upcoming Events Carousel */}
            <UpcomingEventsCarousel
              events={filtered
                .filter((e) => e.date >= new Date().toISOString().slice(0, 10))
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())}
            />
            {/* Previous Events Heading */}
            <h3
              className="text-3xl md:text-4xl font-extrabold text-tali-lime mb-8 text-start tracking-tight drop-shadow-lg"
              style={{
                fontFamily: "Red Hat Display, Montserrat, Poppins, sans-serif",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Previous Events
            </h3>
            {/* Previous Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {filtered.filter(
                (e) => e.date < new Date().toISOString().slice(0, 10)
              ).length === 0 ? (
                <div className="col-span-full text-center text-white/70 text-xl py-16">
                  No previous events.
                </div>
              ) : (
                filtered
                  .filter((e) => e.date < new Date().toISOString().slice(0, 10))
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map((event, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 border border-white/10 hover:border-tali-lime/70  flex flex-col min-h-[360px]"
                      style={{
                        boxShadow: "0 8px 32px 0 rgba(205,255,107,0.10)",
                      }}
                    >
                      {/* Edge-to-edge background image with overlay */}
                      <div className="absolute inset-0 z-0">
                        <img
                          src={event.img}
                          alt={event.title}
                          className="w-full h-full object-cover scale-105 group-hover:scale-110 "
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />
                      </div>
                      {/* Top left date badge */}
                      <div className="absolute top-6 left-6 z-10 px-4 py-0.5 rounded-xl bg-white/20 backdrop-blur-md border border-tali-lime/40 text-tali-lime font-bold text-base shadow-lg flex items-center gap-2 animate-fadeInUp max-w-[60%] truncate">
                        <svg
                          width="18"
                          height="18"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="4"
                            stroke="#cdff6b"
                            strokeWidth="2"
                            opacity="0.3"
                          />
                          <rect
                            x="7"
                            y="8"
                            width="10"
                            height="10"
                            stroke="#cdff6b"
                            strokeWidth="2"
                          />
                        </svg>
                        <span className="truncate">{event.date}</span>
                      </div>
                      {/* Top right artist badge or Book Now for Yoyaku */}
                      {event.artist === "Yoyaku" ? (
                        <a
                          href="https://human-figures.jointali.com/event/81/PHXYOYAKU"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-6 right-6 z-10 px-4 py-1 rounded-xl bg-tali-lime/90 text-[#1a1333] font-bold text-base shadow-lg animate-fadeInUp max-w-[60%] truncate hover:bg-[#d4ff3f] transition-colors duration-200"
                          style={{
                            fontFamily:
                              "Red Hat Display, Montserrat, Poppins, sans-serif",
                            display: "inline-block",
                          }}
                        >
                          Book Now
                        </a>
                      ) : (
                        <div
                          className="absolute top-6 right-6 z-10 px-4 py-0.5 rounded-xl bg-tali-lime/90 text-[#1a1333] font-bold text-base shadow-lg flex items-center gap-2 animate-fadeInUp max-w-[60%] truncate"
                          style={{
                            fontFamily:
                              "Red Hat Display, Montserrat, Poppins, sans-serif",
                          }}
                        >
                          <span className="truncate">{event.artist}</span>
                        </div>
                      )}
                      {/* Main content: event title and description with new layout */}
                      <div className="relative z-10 flex-1 flex flex-col justify-end pb-8 pt-24 px-8 overflow-visible">
                        <h3
                          className="text-2xl font-extrabold text-white mb-1 drop-shadow-lg text-left"
                          style={{
                            fontFamily:
                              "Red Hat Display, Montserrat, Poppins, sans-serif",
                            letterSpacing: "-0.01em",
                            maxWidth: "100%",
                          }}
                        >
                          {event.title}
                        </h3>
                        <div className="w-10 h-1 bg-tali-lime rounded-full mb-2 ml-0" />
                        <p
                          className="text-white/80 text-sm font-normal text-left mb-2 max-w-full"
                          style={{
                            fontFamily: "Montserrat, Poppins, sans-serif",
                            lineHeight: 1.5,
                          }}
                        >
                          {event.desc}
                        </p>
                      </div>
                      {/* Animated border glow on hover */}
                      <div
                        className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "linear-gradient(120deg, #cdff6b33 0%, #37199022 100%)",
                          zIndex: 1,
                          boxShadow: "0 0 32px 0 #cdff6b44",
                        }}
                      />
                    </div>
                  ))
              )}
            </div>
          </div>
        </section>
        <ScheduleSection />
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
