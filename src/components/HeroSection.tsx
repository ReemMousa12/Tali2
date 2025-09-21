import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-dj.jpg";
import FloatingCircles from "@/components/FloatingCircles";

const HeroSection = () => {
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
              letterSpacing: '-0.04em',
              lineHeight: 1,
              marginRight: '0.03em',
              position: 'relative'
            }}
          >
            PREMIUM
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
          >PLATFORM</span>
          <div className="absolute h-[2px] w-[80%] bg-gradient-to-r from-transparent via-lime-400 to-transparent left-[10%] -bottom-4"></div>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-tali-text-secondary max-w-4xl mx-auto mb-6 md:mb-12 leading-relaxed px-2">
          Where Every Booking Becomes an Experience. Seamlessly merging technology, luxury, and scale across 
          <br className="hidden md:block" />
          Entertainment, Hospitality & Corporate events.
        </p>
        
        <Link to="/solutions">
          <Button variant="lime" size="lg" className="text-lg px-8 py-3 h-auto rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
            DISCOVER SOLUTIONS
          </Button>
        </Link>
      </div>
      
      {/* Animated Elements */}
     
    </section>
  );
};

export default HeroSection;