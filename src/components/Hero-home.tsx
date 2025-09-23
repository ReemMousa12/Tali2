import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/background/8.jpg";
import React, { useState, useEffect } from "react";
import logo from "@/assets/logo/logo_colored.png";

// Import videos
import video1 from "@/assets/videos/5.mp4";
import video2 from "@/assets/videos/2.mp4";
import video3 from "@/assets/videos/3.mp4";

const HeroSection = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>([false, false, false]);
  const [allVideosReady, setAllVideosReady] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderProgress, setPreloaderProgress] = useState(0);
  
  const videos = [video1, video2, video3];
  const headlines = ["EXPERIENCE", "VIBES", "LIVE THE BEAT"];

  // Handle video loading
  const handleVideoLoad = (index: number) => {
    setVideosLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  // Preloader progress simulation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setPreloaderProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2; // Increment by 2% every 40ms (2 seconds total)
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  // Check if all videos are loaded
  useEffect(() => {
    if (videosLoaded.every(loaded => loaded)) {
      setAllVideosReady(true);
    }
  }, [videosLoaded]);

  // Hide preloader after 2 seconds AND when all videos are ready
  useEffect(() => {
    if (allVideosReady && preloaderProgress >= 100) {
      const hideTimer = setTimeout(() => {
        setShowPreloader(false);
      }, 500); // Small delay for smooth transition

      return () => clearTimeout(hideTimer);
    }
  }, [allVideosReady, preloaderProgress]);

  useEffect(() => {
    // Only start the interval when preloader is hidden and videos are ready
    if (showPreloader || !allVideosReady) return;
    
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, [videos.length, allVideosReady, showPreloader]);

  useEffect(() => {
    // Inject elegant and creative animations
    if (!document.getElementById('elegant-hero-animations')) {
      const style = document.createElement('style');
      style.id = 'elegant-hero-animations';
      style.innerHTML = `
        @keyframes elegantFadeUp {
          0% { 
            opacity: 0; 
            transform: translateY(40px) scale(0.95);
            filter: blur(4px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        
        @keyframes dynamicGlow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(255,255,255,0.1), 0 0 40px rgba(205,255,107,0.2);
            transform: scale(1);
          }
          50% { 
            text-shadow: 0 0 30px rgba(255,255,255,0.2), 0 0 60px rgba(205,255,107,0.3);
            transform: scale(1.02);
          }
        }
        
        @keyframes creativeSlide {
          0% { 
            opacity: 0;
            transform: translateX(-100px) rotate(-2deg);
            filter: blur(3px);
          }
          60% {
            opacity: 0.8;
            transform: translateX(10px) rotate(0.5deg);
            filter: blur(1px);
          }
          100% { 
            opacity: 1;
            transform: translateX(0) rotate(0deg);
            filter: blur(0px);
          }
        }
        
        @keyframes modernPulse {
          0%, 100% { 
            width: 50px;
            opacity: 0.7;
            background: linear-gradient(90deg, transparent, #cdff6b, transparent);
          }
          50% { 
            width: 150px;
            opacity: 1;
            background: linear-gradient(90deg, transparent, #cdff6b, #ffffff, #cdff6b, transparent);
          }
        }
        
        @keyframes floatingElements {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          33% { 
            transform: translateY(-20px) rotate(1deg);
            opacity: 0.8;
          }
          66% { 
            transform: translateY(-10px) rotate(-0.5deg);
            opacity: 0.9;
          }
        }
        
        @keyframes sophisticatedTransition {
          0% { 
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0px) hue-rotate(0deg);
          }
          25% { 
            opacity: 0.7;
            transform: scale(1.05) rotate(0.5deg);
            filter: blur(2px) hue-rotate(15deg);
          }
          75% { 
            opacity: 0.3;
            transform: scale(0.95) rotate(-0.5deg);
            filter: blur(4px) hue-rotate(-15deg);
          }
          50% { 
            width: 80px;
            opacity: 1;
            transform: scale(1) rotate(0deg);
            filter: blur(0px) hue-rotate(0deg);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    // Inject keyword animations
    if (!document.getElementById('keyword-animations')) {
      const style = document.createElement('style');
      style.id = 'keyword-animations';
      style.innerHTML = `
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; transform: translateY(0px); }
          50% { opacity: 0.8; transform: translateY(-10px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <>
      {/* Logo Preloader */}
      {showPreloader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: '#371990' }}>
          <div className="text-center animate-pulse">
            {/* Same Logo as Header */}
            <div className="flex items-center justify-center space-x-2 select-none">
              <img src={logo} alt="Tali Logo" className="h-16 w-auto md:h-20" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span
                  style={{
                    color: '#ffffffff',
                    fontFamily: 'Montserrat, Poppins, Inter, Arial, sans-serif',
                    fontWeight: 900,
                    fontSize: '3.5rem',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    marginRight: '0.03em',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    textTransform: 'lowercase',
                  }}
                >
                  tali
                </span>
                <span
                  style={{
                    position: 'absolute',
                    paddingRight: "7rem",
                    fontSize: '0.7rem',
                    color: '#ffffffff',
                    fontFamily: 'Montserrat, Poppins, Inter, Arial, sans-serif',
                    fontWeight: 400,
                    opacity: 0.85,
                    paddingTop: '3em'
                  }}
                >
                  ®
                </span>
              </span>
            </div>
          </div>
        </div>
      )}

      <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 sm:pt-12 pb-0" style={{ background: '#371990' }}>
      {/* Video Background Banner */}
      <div className="absolute inset-0 z-0">
        {videos.map((video, index) => (
          <video
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideo ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => handleVideoLoad(index)}
            onCanPlay={() => handleVideoLoad(index)}
            style={{
              willChange: 'opacity',
              transform: 'translateZ(0)', // Force hardware acceleration
              backfaceVisibility: 'hidden', // Optimize rendering
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 z-5" style={{ background: 'rgba(55,25,144,0.4)' }} />
      {/* Geometric Overlay */}
      <div className="absolute inset-0 geometric-overlay z-5" />
      {/* Video indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`relative group transition-all duration-500 ${
              index === currentVideo ? 'scale-110' : 'hover:scale-105'
            }`}
            onClick={() => setCurrentVideo(index)}
          >
            <div className={`w-8 h-0.5 rounded-full transition-all duration-500 ${
              index === currentVideo 
                ? 'bg-lime-400 shadow-lg shadow-lime-400/50' 
                : 'bg-white/30 group-hover:bg-white/50'
            }`} />
            {index === currentVideo && (
              <div className="absolute inset-0 bg-lime-400/20 rounded-full blur-sm animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Elegant Content Container */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Sophisticated Header */}
        <div className="mb-16 relative">
          {/* Elegant Subtitle */}
         

          {/* Dynamic Creative Headline */}
          <div className="relative">
            <h1 
              key={currentVideo}
              className="text-white font-extralight relative mb-8"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: '200',
                animation: 'creativeSlide 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), dynamicGlow 4s ease-in-out infinite 2s',
                letterSpacing: '-0.02em',
                lineHeight: '0.9',
                background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 50%, #cdff6b 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {headlines[currentVideo]}
            </h1>

            {/* Modern Accent Line */}
            <div 
              key={`line-${currentVideo}`}
              className="mx-auto rounded-full"
              style={{
                height: '2px',
                width: '50px',
                animation: 'modernPulse 3s ease-in-out infinite, elegantFadeUp 1.5s ease-out 0.8s both',
              }}
            />
          </div>

         
           
        
        </div>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-tali-text-secondary max-w-4xl mx-auto mb-6 md:mb-12 leading-relaxed px-2">
         Tali Moments brings elegance and ease to every booking from dining to events.
          <br className="hidden md:block" />
          we make every reservation seamless, every experience unforgettable.
        </p>
      
        {/* Email Signup Form */}
       <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const email = (form.elements.namedItem('email') as HTMLInputElement).value;
            const formData = new FormData();
            formData.append('entry.525117737', email);
            await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScdcQk5SrTP5KwtQPphtWRLUnKEbk0iZNUgwd3DVIY7d42X1Q/formResponse', {
              method: 'POST',
              mode: 'no-cors',
              body: formData,
            });
            setShowThankYou(true);
            form.reset();
            setTimeout(() => setShowThankYou(false), 4000);
          }}
          className="flex items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-4 sm:mt-6 px-2"
        >
          <div className="relative flex-1">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="peer w-full pr-20 sm:pr-32 pl-3 sm:pl-4 py-2 sm:py-3 rounded-3xl border-2 border-lime-400 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:border-lime-500 transition-colors duration-200 shadow-md text-sm sm:text-base"
            />
            <button
              type="submit"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-lime-500 hover:bg-lime-400 text-white font-semibold rounded-3xl px-3 sm:px-6 py-1 text-xs sm:text-base shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lime-300"
            >
              Sign Up
            </button>
            <fieldset className="absolute inset-0 pointer-events-none border-2 border-lime-400 rounded-3xl" aria-hidden="true"></fieldset>
            {showThankYou && (
              <div className="absolute left-0 -bottom-6 text-lime-300 text-xs sm:text-sm font-medium animate-fade-in">
                Thank you for signing up!
              </div>
            )}
          </div>
        </form>
       
      </div>
      
      {/* Perfect Seamless Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#371990]"></div>
      </div>
     
    </section>
    </>
  );
};

export default HeroSection;