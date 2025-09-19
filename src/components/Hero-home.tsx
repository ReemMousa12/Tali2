import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/background/8.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#371990' }}>
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
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-bold mb-8">
          <span className="text-tali-text-primary block">   TALI </span>
          <span className="text-gradient-lime hero-glow block">MOMENTS</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-tali-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
         Tali Moments brings elegance and ease to every booking — from dining to events.
          <br className="hidden md:block" />
          we make every reservation seamless, every experience unforgettable.
        </p>
        
       
      </div>
      
      {/* Animated Elements */}
     
    </section>
  );
};

export default HeroSection;