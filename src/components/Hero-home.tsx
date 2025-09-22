import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/background/8.jpg";
import React, { useState, useEffect } from "react";
import FloatingCircles from "@/components/FloatingCircles";

// Import videos
import video1 from "@/assets/videos/1.mp4";
import video2 from "@/assets/videos/2.mp4";
import video3 from "@/assets/videos/3.mp4";

const HeroSection = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const videos = [video1, video2, video3];
  const headlines = ["EXPERIENCE", "VIBES", "LIVE THE BEAT"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  useEffect(() => {
    // Inject dynamic concert-style animations
    if (!document.getElementById('concert-hero-animations')) {
      const style = document.createElement('style');
      style.id = 'concert-hero-animations';
      style.innerHTML = `
        @keyframes concertPulse {
          0%, 100% { 
            transform: scale(1); 
            text-shadow: 0 0 20px rgba(205,255,107,0.6), 0 0 40px rgba(205,255,107,0.4), 0 0 60px rgba(205,255,107,0.2);
          }
          50% { 
            transform: scale(1.02); 
            text-shadow: 0 0 30px rgba(205,255,107,0.8), 0 0 60px rgba(205,255,107,0.6), 0 0 90px rgba(205,255,107,0.4);
          }
        }
        @keyframes neonFlicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
          75% { opacity: 0.9; }
        }
        @keyframes rhythmBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
        @keyframes waveText {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(1deg); }
          50% { transform: translateY(-8px) rotate(0deg); }
          75% { transform: translateY(-3px) rotate(-1deg); }
        }
        @keyframes energyGlow {
          0%, 100% { 
            background: linear-gradient(45deg, #cdff6b, #ff6b9d, #6bcfff, #ff6bcd);
            background-size: 400% 400%;
            background-position: 0% 50%;
          }
          50% { 
            background-position: 100% 50%;
          }
        }
        @keyframes headlineChange {
          0%, 90% { opacity: 1; transform: translateY(0); }
          95% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInFromRight {
          0% { opacity: 0; transform: translateX(100px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutToLeft {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-100px); }
        }
        @keyframes smoothSlideTransition {
          0%, 85% { 
            opacity: 1; 
            transform: translateX(0) scale(1); 
          }
          90% { 
            opacity: 0; 
            transform: translateX(-50px) scale(0.95); 
          }
          95% { 
            opacity: 0; 
            transform: translateX(50px) scale(0.95); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) scale(1); 
          }
        }
        @keyframes smoothSlideIn {
          0% { 
            opacity: 0; 
            transform: translateX(60px) scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) scale(1); 
          }
        }
        @keyframes smoothSlideOut {
          0% { 
            opacity: 1; 
            transform: translateX(0) scale(1); 
          }
          100% { 
            opacity: 0; 
            transform: translateX(-60px) scale(0.9); 
          }
        }
        @keyframes chicLineGlow {
          0%, 100% { 
            width: 60px;
            opacity: 0.8;
            box-shadow: 0 0 10px rgba(205,255,107,0.6);
          }
          50% { 
            width: 80px;
            opacity: 1;
            box-shadow: 0 0 20px rgba(205,255,107,0.9), 0 0 40px rgba(205,255,107,0.4);
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 sm:pt-12 pb-0" style={{ background: '#371990' }}>
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
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 z-5" style={{ background: 'rgba(55,25,144,0.5)' }} />
      {/* Geometric Overlay */}
      <div className="absolute inset-0 geometric-overlay z-5" />
      {/* Video indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentVideo ? 'bg-lime-400' : 'bg-white/40'
            }`}
            onClick={() => setCurrentVideo(index)}
          />
        ))}
      </div>
     
      {/* Floating Circles (z-10, above overlays) - Extended to bottom */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <FloatingCircles numberOfCircles={6} />
      </div>
      {/* Additional floating circles for bottom area */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none">
        <FloatingCircles numberOfCircles={6} />
      </div>
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        {/* Animated Concert-Style Headline */}
        <div className="mb-8 relative overflow-hidden">
          {/* Dynamic subtitle with wave effect */}
          <div className="relative">
            <h1 
              key={currentVideo}
              className="text-lime-400 font-bold tracking-widest relative"
              style={{
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                fontFamily: "'Montserrat', sans-serif",
                animation: 'neonFlicker 4s ease-in-out infinite, smoothSlideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                textShadow: '0 0 15px rgba(205,255,107,0.9), 0 0 30px rgba(205,255,107,0.6)',
                letterSpacing: '0.3em',
              }}
            >
              {headlines[currentVideo].split('').map((letter, index) => (
                <span
                  key={`${currentVideo}-${index}`}
                  className="inline-block"
                  style={{
                    animation: `waveText 2s ease-in-out infinite, smoothSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
                    animationDelay: `${index * 0.1}s, ${index * 0.03}s`,
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>
            
            {/* Chic Thin Line Under Headlines */}
            <div 
              key={`line-${currentVideo}`}
              className="mx-auto mt-3 bg-lime-400 rounded-full"
              style={{
                height: '1px',
                width: '60px',
                animation: 'chicLineGlow 3s ease-in-out infinite, smoothSlideIn 0.6s ease-out',
                animationDelay: '0s, 0.3s',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
            
            {/* Floating music notes */}
            <div className="absolute -top-4 -right-8 text-lime-400 opacity-70">
              <span 
                className="text-2xl inline-block"
                style={{ animation: 'rhythmBounce 1.5s ease-in-out infinite' }}
              >
                ♪
              </span>
            </div>
            <div className="absolute -top-2 -left-6 text-lime-400 opacity-50">
              <span 
                className="text-xl inline-block"
                style={{ animation: 'rhythmBounce 1.8s ease-in-out infinite 0.5s' }}
              >
                ♫
              </span>
            </div>
            <div className="absolute -bottom-3 left-1/4 text-lime-400 opacity-60">
              <span 
                className="text-lg inline-block"
                style={{ animation: 'rhythmBounce 2.2s ease-in-out infinite 1s' }}
              >
                ♪
              </span>
            </div>
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
      
      {/* Seamless transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#371990] z-5"></div>
     
    </section>
  );
};

export default HeroSection;