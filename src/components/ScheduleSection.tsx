import { useState } from 'react';
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import myriam from "@/assets/artists/Myriamfares/myriam.jpg";
import background from '../assets/background/1.jpg';

const allEvents = [
  {
    month: "JUNE",
    date: "Jun 28, 2025",
    title: "Sunset Grooves",
    description: "Chill house beats and sunset views for an unforgettable night.",
    time: "9:00 PM",
    venue: "Kikis Sage",
    image: event1
  },
  {
    month: "JULY",
    date: "Jul 12, 2025",
    title: "Electro Night",
    description: "A night of electrifying beats and high-energy performances.",
    time: "8:30 PM",
    venue: "Kikis Beach",
    image: event2
  },
  {
    month: "JULY",
    date: "Jul 26, 2025",
    title: "Deep House Vibes",
    description: "Immerse yourself in deep house music with top DJs.",
    time: "9:30 PM",
    venue: "Kikis Sage",
    image: event3
  },
  {
    month: "SEPTEMBER",
    date: "Sep 19, 2025",
    title: "Myriam Fares at KIKI’s White",
    description: "Sep 19 | 09:00 PM\nKIKI’s Beach, Hacienda White. A magical evening with Myriam Fares, full of energy and dance.",
    time: "09:00 PM",
    venue: "KIKI’s Beach, Hacienda White",
    image: myriam
  },
  // Add more events for AUGUST as needed
];

const months = ["JUNE", "JULY", "AUGUST", "SEPTEMBER"];
const monthsShort = ["JUN", "JUL", "AUG", "SEPT"];

const ScheduleSection = () => {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const events = allEvents.filter(e => e.month === selectedMonth);

  return (
    <section
      id="schedule"
  className="py-12 px-2 sm:px-4 relative overflow-hidden"
      style={{
        paddingTop: '8rem',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
          paddingLeft: '60px',
          letterSpacing: '5rem',
          textTransform: 'uppercase',
          visibility: 'visible',
          animationName: 'slideInUp',
          backgroundSize: 'cover',
          transform: 'translate3d(0px, 0px, 0px)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        SCHEDULE
      </div>
  <div className="container mx-auto max-w-7xl section-content px-0 sm:px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 pt-4">
           <span className="text-tali-lime font-semibold">02</span> Schedule
          </h2>
        </div>
        {/* Month Navigation */}
        <div className="flex justify-center mb-10 sm:mb-16">
          <div className="flex space-x-4 sm:space-x-8 overflow-x-auto">
            {months.map((month, index) => (
              <button
                key={index}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 sm:px-6 py-3 text-base sm:text-lg font-semibold whitespace-nowrap transition-colors ${
                  selectedMonth === month ? 'text-tali-lime border-b-2 border-tali-lime' : 'text-tali-text-secondary hover:text-tali-lime'
                }`}
              >
                <span className="block sm:hidden">{monthsShort[index]}</span>
                <span className="hidden sm:block">{month}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Events Grid */}
        {events.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-full flex flex-col items-center justify-center py-20">
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="mb-3 text-tali-text-secondary"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.15"/></svg>
              <div className="text-base text-tali-text-secondary text-center">No events scheduled for this month.</div>
            </div>
          </div>
        ) : (
          events.length <= 2 ? (
            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 flex-wrap">
              {events.map((event, index) => (
                <div key={index} className="group cursor-pointer flex justify-center w-full sm:w-auto" style={{maxWidth: 400}}>
                  <div className="card-glass rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 flex flex-col w-full sm:w-[350px] min-w-0 max-w-[400px] h-auto min-h-[320px] sm:min-h-[370px] sm:h-[370px]">
                    <div className="relative w-full" style={{height: 180, minHeight: 140, maxHeight: 200}}>
                      <img
                        src={event.image}
                        alt={event.title}
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-110 object-cover${event.title.includes('Myriam Fares') ? ' object-top' : ''}`}
                        style={{height: '100%', width: '100%', objectFit: 'cover'}} 
                      />
                      <div className="absolute inset-0 " />
                      <div className="absolute top-4 left-4 bg-tali-lime text-tali-purple-dark px-3 py-1 rounded-full text-sm font-semibold">
                        {event.date}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-tali-text-primary mb-3 group-hover:text-tali-lime transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-tali-text-secondary mb-4 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-sm mt-auto mb-6" style={{marginBottom: '1.5rem'}}>
                        <span className="text-tali-lime font-semibold">{event.time}</span>
                        <span className="text-tali-text-secondary">{event.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
              {events.map((event, index) => (
                <div key={index} className="group cursor-pointer flex justify-center w-full sm:w-auto" style={{maxWidth: 400}}>
                  <div className="card-glass rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 flex flex-col w-full sm:w-[350px] min-w-0 max-w-[400px] h-auto min-h-[320px] sm:min-h-[370px] sm:h-[370px]">
                    <div className="relative w-full" style={{height: 180, minHeight: 140, maxHeight: 200}}>
                      <img
                        src={event.image}
                        alt={event.title}
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-110 object-cover${event.title.includes('Myriam Fares') ? ' object-top' : ''}`}
                        style={{height: '100%', width: '100%'}}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-tali-purple-dark/80 to-transparent" />
                      <div className="absolute top-4 left-4 bg-tali-lime text-tali-purple-dark px-3 py-1 rounded-full text-sm font-semibold">
                        {event.date}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-tali-text-primary mb-3 group-hover:text-tali-lime transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-tali-text-secondary mb-4 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center text-sm mt-auto mb-3">
                        <span className="text-tali-lime font-semibold">{event.time}</span>
                        <span className="text-tali-text-secondary">{event.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ScheduleSection;