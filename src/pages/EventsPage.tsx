import Header from '../components/Header';
import Footer from '../components/Footer';
import ScheduleSection from '../components/ScheduleSection';
import { useState } from 'react';
import bg2 from '@/assets/background/3.jpg';

// Import artist images
import amr1 from '@/assets/artists/amrdiab/amr1.jpg';
import amr2 from '@/assets/artists/amrdiab/amr2.jpg';
import amr3 from '@/assets/artists/amrdiab/amr3.jpg';
import myriam from '@/assets/artists/Myriamfares/myriam.jpg';
import pawsa1 from '@/assets/artists/pawsa/pawsa1.jpg';
import pawsa2 from '@/assets/artists/pawsa/pawsa2.jpg';
import pawsa3 from '@/assets/artists/pawsa/pawsa3.jpg';
import pawsa4 from '@/assets/artists/pawsa/pawsa4.jpg';
import wegz from '@/assets/artists/wegz/wegz.jpg';
import yara1 from '@/assets/artists/yaratarek/yara1.jpg';
import yara2 from '@/assets/artists/yaratarek/yara2.jpg';
import yara3 from '@/assets/artists/yaratarek/yara3.jpg';

const allEvents = [
  { title: 'Amr Diab Live', date: '2025-08-20', artist: 'Amr Diab', img: amr1, desc: 'Experience the legendary Amr Diab live in concert with an unforgettable night of music.' },
  { title: "Myriam Fares at KIKI’s White", date: "2025-09-19", artist: 'Myriam Fares', img: myriam, desc: 'Sep 19 | 09:00 PM\nKIKI’s Beach, Hacienda White. A magical evening with Myriam Fares, full of energy and dance.' },
   { title: 'Wegz Experience', date: '2025-08-28', artist: 'Wegz', img: wegz, desc: 'Wegz brings his unique sound and energy to the stage for a one-of-a-kind show.' },
  { title: 'Yara Tarek Vibes', date: '2025-08-30', artist: 'Yara Tarek', img: yara1, desc: 'Chill and vibe with Yara Tarek’s soulful performance.' },
  { title: 'Amr Diab Encore', date: '2025-08-02', artist: 'Amr Diab', img: amr2, desc: 'Encore performance by Amr Diab—don’t miss this second chance!' },
  { title: 'PAWSA Afterparty', date: '2025-08-05', artist: 'PAWSA', img: pawsa2, desc: 'Keep the party going with PAWSA’s late-night afterparty set.' },
   { title: 'Amr Diab Finale', date: '2025-08-10', artist: 'Amr Diab', img: amr3, desc: 'The grand finale—Amr Diab closes the festival in style.' },
];

const EventsPage = () => {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const filtered = allEvents.filter(e =>
    (!search || e.title.toLowerCase().includes(search.toLowerCase()) || e.artist.toLowerCase().includes(search.toLowerCase())) &&
    (!date || e.date === date)
  );
  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        background: ` url(${bg2}) center/cover no-repeat`,
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
      <main className="flex-1">
        {/* Events Grid with Filters */}
  <section className="relative py-10 px-2 sm:px-4 overflow-hidden" >
          {/* Decorative EVENTS background text */}
          <div
            className="background-headline wm wow slideInUp animated select-none pointer-events-none"
            style={{
              color: '#fff',
              fontSize: 'clamp(3rem, 8vw, 7.5rem)',
              opacity: 0.11,
              position: 'absolute',
              left: 0,
              zIndex: 1,
              paddingTop: '2rem',
              width: '100%',
              paddingLeft: '1.2rem',
              textAlign: 'center',
              fontFamily: 'Red Hat Display, sans-serif',
              letterSpacing: 'clamp(1rem, 8vw, 6rem)',
              textTransform: 'uppercase',
              top: 60,
              userSelect: 'none',
            }}
          >
            EVENTS
          </div>
          <div className="container mx-auto max-w-7xl px-0 sm:px-4">
            <h2 className="text-5xl font-extrabold text-tali-lime text-center mb-12 pt-20 tracking-tight drop-shadow-lg relative z-10" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif'}}>All Events</h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-8 w-full md:w-[900px] mx-auto">
              {/* Search Bar with Icon */}
              <div className="relative flex-1 w-full min-w-0 md:w-[420px]">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-tali-lime text-xl pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search by event or artist..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-12 pr-5 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 border border-tali-lime/30 focus:border-tali-lime outline-none transition-all shadow-md text-base md:text-lg"
                  style={{ minWidth: 0 }}
                />
              </div>
              {/* Date Filter with Calendar Icon */}
              <div className="relative w-full min-w-0 md:w-[220px] flex-shrink-0">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-tali-lime text-xl pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4M3 9h18" />
                  </svg>
                </span>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  className="w-full pl-12 pr-5 py-3 rounded-xl bg-white/10 text-white border border-tali-lime/30 focus:border-tali-lime outline-none transition-all shadow-md text-base md:text-lg"
                  min="2025-09-01"
                  max="2025-12-31"
                  style={{ minWidth: 0 }}
                />
              </div>
            </div>
            <div>
              {/* Upcoming Events Heading */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-tali-lime mb-6 sm:mb-8 text-start tracking-tight drop-shadow-lg" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase'}}>Upcoming Events</h3>
            </div>
            {/* Upcoming Events Grid */}
            {filtered.filter(e => e.date >= new Date().toISOString().slice(0, 10)).length === 1 ? (
              <div className="flex justify-center mb-10 sm:mb-16">
                {filtered.filter(e => e.date >= new Date().toISOString().slice(0, 10)).map((event, idx, arr) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white/10 border border-white/10 hover:border-tali-lime/70 transition-all duration-400 flex flex-col min-h-[320px] w-full max-w-xl sm:min-h-[360px] sm:w-[780px]"
                    style={{boxShadow: '0 8px 32px 0 rgba(205,255,107,0.10)'}}>
                    {/* Edge-to-edge background image with overlay */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={event.img} 
                        alt={event.title}
                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500" 
                        style={{ objectPosition: event.artist === 'Myriam Fares' ? 'center 2%' : 'center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />
                    </div>
                    {/* Top left date badge */}
                    <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-tali-lime/40 text-tali-lime font-bold text-base shadow-lg flex items-center gap-2 animate-fadeInUp max-w-[60%] truncate">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4" stroke="#cdff6b" strokeWidth="2" opacity="0.3"/><rect x="7" y="8" width="10" height="10" stroke="#cdff6b" strokeWidth="2"/></svg>
                      <span className="truncate">{event.date}</span>
                    </div>
                    {event.artist === 'Myriam Fares' ? (
                      <a
                        href="https://kikis.jointali.com/event/1331/FRI+19.09+%7C+MYRIAM+FARES+%7C+KIKI%27S+WHITE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-6 right-6 z-30 px-4 py-2 rounded-xl text-[#1a1333] font-extrabold text-base shadow-lg flex items-center gap-2 animate-fadeInUp border-2 border-tali-lime/70 hover:bg-[#d4ff3f] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-tali-lime/40"
                        style={{ background: '#cdff6b', boxShadow: '0 2px 12px 0 #cdff6b55', minWidth: '110px', fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif', pointerEvents: 'auto' }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#1a1333]">
                          <rect x="3" y="7" width="18" height="10" rx="2" fill="#cdff6b" stroke="#b6e800" strokeWidth="1.5"/>
                          <path d="M7 7v10M17 7v10" stroke="#b6e800" strokeWidth="1.5"/>
                          <circle cx="12" cy="12" r="2" fill="#b6e800" />
                        </svg>
                        Book
                      </a>
                    ) : (
                      <div className="absolute top-6 right-6 z-10 px-4 py-2 rounded-xl bg-tali-lime/90 text-[#1a1333] font-bold text-base shadow-lg flex items-center gap-2 animate-fadeInUp max-w-[60%] truncate" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif'}}>
                        <span className="truncate">{event.artist}</span>
                      </div>
                    )}
                    {/* Main content: event title and description with new layout */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end pb-8 pt-24 px-8 overflow-visible">
                      <h3 className="text-2xl font-extrabold text-white mb-1 drop-shadow-lg text-left" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif', letterSpacing: '-0.01em', maxWidth: '100%'}}>
                        {event.title}
                      </h3>
                      <div className="w-10 h-1 bg-tali-lime rounded-full mb-2 ml-0" />
                      <p className="text-white/80 text-sm font-normal text-left mb-2 max-w-full" style={{fontFamily: 'Montserrat, Poppins, sans-serif', lineHeight: 1.5}}>
                        {event.desc}
                      </p>
                     
                    </div>
                    {/* Animated border glow on hover */}
                    <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(120deg, #cdff6b33 0%, #37199022 100%)', zIndex: 1, boxShadow: '0 0 32px 0 #cdff6b44'}} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
                {filtered.filter(e => e.date >= new Date().toISOString().slice(0, 10)).length === 0 ? (
                  <div className="col-span-full text-center text-white/70 text-xl py-16">No upcoming events.</div>
                ) : filtered.filter(e => e.date >= new Date().toISOString().slice(0, 10)).map((event, idx, arr) => (
                  <div
                    key={idx}
                    className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 border border-white/10 hover:border-tali-lime/70 transition-all duration-400 flex flex-col min-h-[360px]"
                    style={{boxShadow: '0 8px 32px 0 rgba(205,255,107,0.10)', width: '420px', maxWidth: '100%'}}>
                    {/* Edge-to-edge background image with overlay */}
                    <div className="absolute inset-0 z-0">
                      <img src={event.img} alt={event.title} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />
                    </div>
                    {/* Top left date badge */}
                    <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-tali-lime/40 text-tali-lime font-bold text-base shadow-lg flex items-center gap-2 animate-fadeInUp max-w-[60%] truncate">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4" stroke="#cdff6b" strokeWidth="2" opacity="0.3"/><rect x="7" y="8" width="10" height="10" stroke="#cdff6b" strokeWidth="2"/></svg>
                      <span className="truncate">{event.date}</span>
                    </div>
                    {/* Top right artist badge */}
                    <div className="absolute top-6 right-6 z-10 px-4 py-2 rounded-xl bg-tali-lime/90 text-[#1a1333] font-bold text-base shadow-lg flex items-center gap-2 animate-fadeInUp max-w-[60%] truncate" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif'}}>
                      <span className="truncate">{event.artist}</span>
                    </div>
                    {/* Main content: event title and description with new layout */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end pb-8 pt-24 px-8 overflow-visible">
                      <h3 className="text-2xl font-extrabold text-white mb-1 drop-shadow-lg text-left" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif', letterSpacing: '-0.01em', maxWidth: '100%'}}>
                        {event.title}
                      </h3>
                      <div className="w-10 h-1 bg-tali-lime rounded-full mb-2 ml-0" />
                      <p className="text-white/80 text-sm font-normal text-left mb-2 max-w-full" style={{fontFamily: 'Montserrat, Poppins, sans-serif', lineHeight: 1.5}}>
                        {event.desc}
                      </p>
                    </div>
                    {/* Animated border glow on hover */}
                    <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(120deg, #cdff6b33 0%, #37199022 100%)', zIndex: 1, boxShadow: '0 0 32px 0 #cdff6b44'}} />
                  </div>
                ))}
              </div>
            )}
            {/* Previous Events Heading */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-tali-lime mb-8 text-start tracking-tight drop-shadow-lg" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif', letterSpacing: '0.1em', textTransform: 'uppercase'}}>Previous Events</h3>
            {/* Previous Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {filtered.filter(e => e.date < new Date().toISOString().slice(0, 10)).length === 0 ? (
                <div className="col-span-full text-center text-white/70 text-xl py-16">No previous events.</div>
              ) : filtered.filter(e => e.date < new Date().toISOString().slice(0, 10)).map((event, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 border border-white/10 hover:border-tali-lime/70 transition-all duration-400 flex flex-col min-h-[360px]"
                  style={{boxShadow: '0 8px 32px 0 rgba(205,255,107,0.10)'}}
                >
                  {/* Edge-to-edge background image with overlay */}
                  <div className="absolute inset-0 z-0">
                    <img src={event.img} alt={event.title} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />
                  </div>
                  {/* Top left date badge */}
                  <div className="absolute top-6 left-6 z-10 px-4 py-0.5 rounded-xl bg-white/20 backdrop-blur-md border border-tali-lime/40 text-tali-lime font-bold text-base shadow-lg flex items-center gap-2 animate-fadeInUp max-w-[60%] truncate">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="4" stroke="#cdff6b" strokeWidth="2" opacity="0.3"/><rect x="7" y="8" width="10" height="10" stroke="#cdff6b" strokeWidth="2"/></svg>
                    <span className="truncate">{event.date}</span>
                  </div>
                  {/* Top right artist badge */}
                  <div className="absolute top-6 right-6 z-10 px-4 py-0.5 rounded-xl bg-tali-lime/90 text-[#1a1333] font-bold text-base shadow-lg flex items-center gap-2 animate-fadeInUp max-w-[60%] truncate" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif'}}>
                    <span className="truncate">{event.artist}</span>
                  </div>
                  {/* Main content: event title and description with new layout */}
                  <div className="relative z-10 flex-1 flex flex-col justify-end pb-8 pt-24 px-8 overflow-visible">
                    <h3 className="text-2xl font-extrabold text-white mb-1 drop-shadow-lg text-left" style={{fontFamily: 'Red Hat Display, Montserrat, Poppins, sans-serif', letterSpacing: '-0.01em', maxWidth: '100%'}}>
                      {event.title}
                    </h3>
                    <div className="w-10 h-1 bg-tali-lime rounded-full mb-2 ml-0" />
                    <p className="text-white/80 text-sm font-normal text-left mb-2 max-w-full" style={{fontFamily: 'Montserrat, Poppins, sans-serif', lineHeight: 1.5}}>
                      {event.desc}
                    </p>
                  </div>
                  {/* Animated border glow on hover */}
                  <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'linear-gradient(120deg, #cdff6b33 0%, #37199022 100%)', zIndex: 1, boxShadow: '0 0 32px 0 #cdff6b44'}} />
                </div>
              ))}
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
