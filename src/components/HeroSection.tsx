import { Button } from "@/components/ui/button";
import heroImage from "@/assets/1.jpg";

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
      
      {/* Gradient Overlay */}
      <div />
      
      {/* Geometric Overlay */}
      <div className="absolute inset-0 geometric-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-7xl md:text-9xl font-bold mb-8">
          <span className="text-tali-text-primary block">PREMIUM </span>
          <span className="text-gradient-lime hero-glow block">PLATFORM</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-tali-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
          Where Every Booking Becomes an Experience. Seamlessly merging technology, luxury, and scale across 
          <br className="hidden md:block" />
          Entertainment, Hospitality & Corporate events.
        </p>
        
            <a href="/solutions">
              <Button variant="lime" size="lg" className="text-lg px-8 py-2 h-auto rounded-xl ">
                DISCOVER SOLUTIONS
              </Button>
            </a>
      </div>
      
      {/* Animated Elements */}
     
    </section>
  );
};

export default HeroSection;