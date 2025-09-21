import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/background/8.jpg";
import React, { useState } from "react";
import FloatingCircles from "@/components/FloatingCircles";

const HeroSection = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12" style={{ background: '#371990' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          // filter: 'brightness(0.4) saturate(1.2)'
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(55,25,144,0.65)' }} />
      {/* Geometric Overlay */}
      <div className="absolute inset-0 geometric-overlay" />
      {/* Floating Circles (z-10, above overlays) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <FloatingCircles />
      </div>
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="mb-8 relative">
          <span 
            className="text-tali-text-primary block mb-1 md:mb-2"
            style={{
              fontWeight: 500,
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              letterSpacing: '0.04em',
              lineHeight: 1,
              marginRight: '0.03em',
              position: 'relative'
            }}
          >
            TALI
          
          </span>
          <span 
            className="text-gradient-lime hero-glow block relative italic" 
            style={{
              fontFamily: "'Playfair Display', 'Baskerville', serif",
              fontStyle: "italic",
              letterSpacing: "0.03em",
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              lineHeight: 1.1
            }}
          >MOMENTS</span>
          <div className="absolute h-[2px] w-[80%] bg-gradient-to-r from-transparent via-lime-400 to-transparent left-[10%] -bottom-4"></div>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-tali-text-secondary max-w-4xl mx-auto mb-6 md:mb-12 leading-relaxed px-2">
         Tali Moments brings elegance and ease to every booking — from dining to events.
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
      
      
     
    </section>
  );
};

export default HeroSection;