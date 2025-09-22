import { useState } from 'react';
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import myriam from "@/assets/artists/Myriamfares/myriam.jpg";
import yoyaku1 from "@/assets/artists/yoyaku/y3.png";
import background from '../assets/background/1.jpg';
import FloatingCircles from './FloatingCircles';

// KIKI's schedule artists
import notredame1 from '@/assets/artists/NOTREDAME/N1.jpg';
import caiiro1 from '@/assets/artists/caiiro/c2.jpg';
import hotsince1 from '@/assets/artists/hotsince\'82/h2.jpg';
import misty1 from '@/assets/artists/misty/m1.jpg';
import fspins1 from '@/assets/artists/f-spins/f1.jpg';
import rolbac1 from '@/assets/artists/rolbac/r1.jpg';
import thatgirl1 from '@/assets/artists/thatgirlsherryk/t1.jpg';
import paar1 from '@/assets/artists/paarmuzik/p1.jpg';
import shimza1 from '@/assets/artists/shimza,ziad,kareem/c1.jpg';
import frank from '@/assets/artists/franky/f1.jpg';
import amrdiab1 from '@/assets/artists/amrdiab/amr1.jpg';
import wegz1 from '@/assets/artists/wegz/wegz.jpg';
import pawsa1 from '@/assets/artists/pawsa/pawsa1.jpg';
import yara1 from '@/assets/artists/yaratarek/yara1.jpg';
import horrible from '@/assets/artists/horribles/h1.jpg';
import yara2 from '@/assets/artists/yaratarek/yara2.jpg';
import kzandcake from '@/assets/artists/kzandcake/k1.jpg';
import oden from '@/assets/artists/oden/o1.jpg';
import playhaus from '@/assets/artists/playhaus/p1.jpg';
import jsomar from '@/assets/artists/jsomar/j2.jpg';
import ashibah from '@/assets/artists/ashibah/a1.jpg';

const allEvents = [
  // KIKI's Schedule Events - July 2025
  {
    month: "JULY",
    date: "Jul 3, 2025",
    title: "Notre Dame Dou Arshad",
    description: "An exclusive night with Notre Dame Dou Arshad at KIKI's Hacienda White. Experience authentic music in a magical setting.",
    time: "9:00 PM",
    venue: "KIKI's Hacienda White",
    image: notredame1
  },

  {
    month: "JULY",
    date: "Jul 10, 2025",
    title: "Rolbac, Thatgirl Sherryk & Paar Muzik",
    description: "An eclectic mix of sounds with Rolbac, Thatgirl Sherryk, and Paar Muzik. Three unique artists, one incredible night.",
    time: "9:00 PM",
    venue: "KIKI's Hacienda White",
    image: rolbac1
  },

  
  {
    month: "JULY",
    date: "Jul 17, 2025",
    title: "Hot Since 82, Awadly & Azaar",
    description: "The legendary Hot Since 82 brings his signature sound with support from Awadly and Azaar.",
    time: "9:00 PM",
    venue: "KIKI's Hacienda White",
    image: hotsince1
  },
  {
    month: "JULY",
    date: "Jul 18, 2025",
    title: "Pawsa - KIKI's Opening",
    description: "Join us for the opening party featuring Pawsa with special guests Aly B and Delrady.",
    time: "5:00 PM",
    venue: "KIKI's Sage",
    image: pawsa1
  },
  {
    month: "JULY",
    date: "Jul 21, 2025",
    title: "Caiiro, George Gehad & Hey-D",
    description: "South African house master Caiiro headlines with George Gehad and Hey-D for an Afro-house celebration.",
    time: "9:00 PM",
    venue: "KIKI's Hacienda White",
    image: caiiro1
  },
  {
    month: "JULY",
    date: "Jul 24, 2025",
    title: "Carlita, Misty & F-Spins",
    description: "International DJ Carlita joins forces with Misty and F-Spins for a night of cutting-edge electronic music.",
    time: "9:00 PM",
    venue: "KIKI's Hacienda White",
    image: misty1
  },
  {
    month: "JULY",
    date: "Jul 25, 2025",
    title: "DJ Habibeats, Moody Jones, KZ & Cake, and Horrible",
    description: "the second Friday, featuring DJ Habibeats, Moody Jones, KZ & Cake, and Horrible!",
    time: "9:00 PM",
    venue: "KIKI'S SAGE HENEISH",
    image: horrible
  },
  {
    month: "JULY",
    date: "Jul 25, 2025",
    title: "KZ & Cake",
    description: "An afternoon session with KZ & Cake bringing their unique sound and energy to KIKI's Sage.",
    time: "4:00 PM",
    venue: "KIKI'S SAGE HENEISH",
    image: kzandcake
  },
  {
    month: "AUGUST",
    date: "Aug 16, 2025",
    title: "PLAYHAUS Showcase ft. Laidlaw",
    description: "UK sensation Laidlaw makes his Egypt debut alongside Youssef Awadly, Hisham Zahran, Maie, Safe Sol & Toola. ",
    time: "3:00 PM",
    venue: "KIKI'S SAGE HENEISH",
    image: playhaus
  },

  {
    month: "AUGUST",
    date: "Aug 1, 2025",
    title: "Sweely, Talaia, and Jjust Omar",
    description: "Friday, August 1st is hitting hard with Sweely, Talaia, and Jjust Omar at Hacienda Heneish. Get ready for an intense night of beats!",
    time: "8:00 PM",
    venue: "KIKI'S SAGE HENEISH",
    image: jsomar
  },
  {
    month: "AUGUST",
    date: "Aug 8, 2025",
    title: "Ashibah, ThatGirl SherryK, and Mady 303",
    description: "Join us on August 8th with Ashibah, ThatGirl SherryK, and Mady 303 at Hacienda Heneish for an afternoon of incredible music!",
    time: "5:00 PM",
    venue: "KIKI'S SAGE HENEISH",
    image: ashibah
  },
  {
    month: "AUGUST",
    date: "Aug 14, 2025",
    title: "Yara Tarek & George Gehad",
    description: "Experience our communal family-style dinner with Live music by Yara Tarek, then let the night flow with cocktails & music from George Gehad.",
    time: "9:00 PM",
    venue: "KIKI'S SAGE HENEISH",
    image: yara2
  },
  {
    month: "AUGUST",
    date: "Aug 15, 2025",
    title: "Oden & Fatzo, Madmotormiquel & Hisham Zahran",
    description: "Join us for an electrifying Friday night at KIKI's Sage!",
    time: "8:00 PM",
    venue: "KIKI'S SAGE HENEISH",
    image: oden
  },
  {
    month: "AUGUST",
    date: "Aug 21, 2025",
    title: "Yara Tarek LIVE at KIKI'S SAGE",
    description: "This Thursday, gather around our long tables for a true seaside experience! Communal family-style dining paired with Yara Tarek's live performance.",
    time: "7:00 PM",
    venue: "KIKI'S SAGE HENEISH",
    image: yara1
  },
  {
    month: "AUGUST",
    date: "Aug 22, 2025",
    title: "Gerd Janson, Mall Grab & Misty",
    description: "Next Friday will hit different with Gerd Janson, Mall Grab & Misty! An exceptional lineup that promises an unforgettable night.",
    time: "8:00 PM",
    venue: "KIKI's Hacienda White",
    image: event1
  },
  {
    month: "AUGUST",
    date: "Aug 28, 2025",
    title: "Franky Rizardo, Misty & Sonii",
    description: "Dutch house legend Franky Rizardo takes the stage with Misty and Sonii for an epic night of house music.",
    time: "9:00 PM",
    venue: "KIKI's Hacienda White",
    image: frank
  },
  {
    month: "JULY",
    date: "Jul 31, 2025",
    title: "Shimza, Ziad Mousa & Kareem Saber",
    description: "South African techno master Shimza closes the month with Ziad Mousa and Kareem Saber for an unforgettable finale.",
    time: "9:00 PM",
    venue: "KIKI's Hacienda White",
    image: shimza1
  },

  // Existing events
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
    month: "SEPTEMBER",
    date: "Sep 19, 2025",
    title: "Myriam Fares at KIKI’s White",
    description: "Sep 19 | 09:00 PM\nKIKI’s Beach, Hacienda White. A magical evening with Myriam Fares, full of energy and dance.",
    time: "09:00 PM",
    venue: "KIKI’s Beach, Hacienda White",
    image: myriam,
  
  },
  {
    month: "OCTOBER",
    date: "Oct 9, 2025",
    title: "Yoyaku 10th Anniversary Showcase",
    description: "Yoyaku celebrates 10 years in Cairo! Join O.bee B2B Toman Station, Mari.te, Zeina, and Hermit B2B Joey for a special night ",
    time: "07:00 PM",
    venue: "The Warehouse, Cairo Business Park",
    image: yoyaku1,
    bookUrl: "https://human-figures.jointali.com/event/81/PHXYOYAKU"
  },
  {
    month: "JULY",
    date: "Jul 19, 2025",
    title: "Amr Diab - KIKI's Opening",
    description: "The second night at KIKI's opening was pure magic as Amr Diab lit up the stage with hit after hit and unstoppable energy.",
    time: "8:00 PM",
    venue: "KIKI's Hacienda White",
    image: amrdiab1
  },
  {
    month: "AUGUST",
    date: "Aug 29, 2025",
    title: "Wegz Closing",
    description: "This weekend, our star Wegz takes over Kiki’s for an unforgettable finale for his official album launch.",
    time: "9:00 PM",
    venue: "KIKI's Hacienda White",
    image: wegz1
  },
  // Add more events for AUGUST as needed
];

const months = ["JULY", "AUGUST", "SEPTEMBER", "OCTOBER"];
const monthsShort = ["JUL", "AUG", "SEPT", "OCT"];

const ScheduleSection = () => {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mouseStart, setMouseStart] = useState(null);
  const [mouseEnd, setMouseEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Month navigation functions
  const nextMonth = () => {
    const currentIndex = months.indexOf(selectedMonth);
    // Only advance if not at the last month
    if (currentIndex < months.length - 1) {
      setSelectedMonth(months[currentIndex + 1]);
    }
  };

  const prevMonth = () => {
    const currentIndex = months.indexOf(selectedMonth);
    // Only go back if not at the first month
    if (currentIndex > 0) {
      setSelectedMonth(months[currentIndex - 1]);
    }
  };

  // Check if we can navigate in each direction
  const canGoNext = months.indexOf(selectedMonth) < months.length - 1;
  const canGoPrev = months.indexOf(selectedMonth) > 0;

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

    // Only allow navigation if we can move in that direction
    if (isLeftSwipe && canGoNext) {
      nextMonth();
    } else if (isRightSwipe && canGoPrev) {
      prevMonth();
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

    // Only allow navigation if we can move in that direction
    if (isLeftDrag && canGoNext) {
      nextMonth();
    } else if (isRightDrag && canGoPrev) {
      prevMonth();
    }
    
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const events = allEvents
    .filter(e => e.month === selectedMonth)
    .sort((a, b) => {
      // Convert date strings to Date objects for proper sorting
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime(); // Newest first (descending order)
    });

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
          fontSize: 'clamp(2.5rem, 8vw, 7.5rem)',
          opacity: 0.2,
          position: 'absolute',
          left: 0,
          zIndex: 0,
          width: '100%',
          textAlign: 'center',
          fontFamily: 'Red Hat Display, sans-serif',
          paddingLeft: 'clamp(0px, 4vw, 60px)',
          letterSpacing: 'clamp(1rem, 5vw, 5rem)',
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
             <h2 className="text-4xl md:text-6xl font-bold mb-8 pt-4">
            <span className="text-tali-lime font-semibold">02</span> Schedule
          </h2>
        </div>
        {/* Floating Circles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles numberOfCircles={15} />
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
        {/* Events Grid with Swipe Functionality */}
        <div 
          className="cursor-grab active:cursor-grabbing select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
         
          
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
                    <div className="relative w-full" style={{height: 220, minHeight: 160, maxHeight: 260}}>
                      <img
                        src={event.image}
                        alt={event.title}
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-110 object-cover${event.title.includes('Myriam Fares') ? ' object-top' : ''}`}
                        style={{
                          height: '100%', 
                          width: '100%', 
                          objectFit: 'cover',
                          objectPosition: event.title.includes('Wegz') ? '50% 40%' : 
                                        event.title.includes('DJ Habibeats, Moody Jones, KZ & Cake, and Horrible') ? '50% 20%' :
                                        event.image.includes('yara1') ? '50% 20%' : 
                                        event.image === playhaus ? '50% 20%' : undefined
                        }} 
                      />
                      <div className="absolute inset-0 " />
                      <div className="absolute top-4 left-4 bg-tali-lime text-tali-purple-dark px-3 py-1 rounded-full text-sm font-semibold">
                        {event.date}
                      </div>
                      {(event.title === 'Yoyaku 10th Anniversary Showcase' ) && event.bookUrl && (
                        <a
                          href={event.bookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 bg-tali-lime text-[#371990] font-bold px-4 py-1 rounded-full text-sm shadow hover:bg-[#d4ff3f] transition-colors duration-200 text-center"
                          style={{zIndex: 10}}
                        >
                          Book Now
                        </a>
                      )}
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
                      {event.title === 'Yoyaku 10th Anniversary Showcase' && event.bookUrl ? (
                        <div className="flex justify-between items-center text-sm mt-auto mb-6 gap-2" style={{marginBottom: '1.5rem'}}>
                          <span className="text-tali-lime font-semibold">{event.time}</span>
                          <span className="text-tali-text-secondary">{event.venue}</span>
                          
                        </div>
                      ) : (
                        <div className="flex justify-between items-center text-sm mt-auto mb-6" style={{marginBottom: '1.5rem'}}>
                          <span className="text-tali-lime font-semibold">{event.time}</span>
                          <span className="text-tali-text-secondary">{event.venue}</span>
                        </div>
                      )}
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
                    <div className="relative w-full" style={{height: 180, minHeight: 160, maxHeight: 250}}>
                      <img
                        src={event.image}
                        alt={event.title}
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-110 object-cover${event.title.includes('Myriam Fares') ? ' object-top' : ''}`}
                        style={{
                          height: '100%', 
                          width: '100%',
                          objectPosition: event.title.includes('Wegz') ? '50% 20%' : 
                                        event.title.includes('DJ Habibeats, Moody Jones, KZ & Cake, and Horrible') ? '50% 20%' :
                                        event.image.includes('yara1') ? '50% 20%' :
                                        event.image === playhaus ? '50% 20%' : undefined
                        }}
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
                      <div className="flex justify-between items-center text-sm mt-auto mb-3">
                        <span className="text-tali-lime font-semibold">{event.time}</span>
                        <span className="text-tali-text-secondary">{event.venue}</span>
                      </div>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;