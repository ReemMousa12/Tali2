import { Button } from "@/components/ui/button";
import entertainmentImg from "@/assets/entertainment.jpg";
import hospitalityImg from "@/assets/hospitality.jpg";
import corporateImg from "@/assets/corporate.jpg";

const SolutionsSection = () => {
  const solutions = [
    {
      number: "01",
      title: "Entertainment & Events",
      description: "Premium ticketing, QR smart passes, access control, and festival optimization tools",
      image: entertainmentImg,
      link: "#entertainment"
    },
    {
      number: "02", 
      title: "Hospitality & Culinary",
      description: "Real-time reservations, dynamic table & room management, and upsell opportunities",
      image: hospitalityImg,
      link: "#hospitality"
    },
    {
      number: "03",
      title: "Corporate & Business", 
      description: "Branded portals, secure invoicing, compliance-ready, networking tools, and digital ID badges",
      image: corporateImg,
      link: "#corporate"
    }
  ];

  const categories = [
    "Entertainment & Nightlife",
    "Hospitality & Culinary", 
    "Lifestyle & Luxury Events",
    "Festivals & Concerts",
    "Fine Dining",
    "Business Conferences",
    "Private Events",
    "Nightclubs",
    "Restaurants"
  ];

  return (
    <section id="solutions" className="py-24 px-4 relative overflow-hidden" style={{ background: '#371990' }}>
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
         
          letterSpacing: '3rem',
          textTransform: 'uppercase',
          visibility: 'visible',
          animationName: 'slideInUp',
          backgroundSize: 'cover',
          transform: 'translate3d(0px, 0px, 0px)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        SOLUTIONS
      </div>
      
      <div className="container mx-auto max-w-7xl section-content">
        {/* Header */}
        <div className="text-center mb-20">
        <h2 className="text-6xl md:text-7xl pt-4 font-bold mb-4">
						<span className="text-tali-lime font-semibold">01</span> Our Solutions
					</h2>
          
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="card-glass rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tali-purple-dark/80 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="text-tali-lime font-bold text-lg mb-2">{solution.number}</div>
                  <h3 className="text-2xl font-bold text-tali-text-primary mb-4 group-hover:text-tali-lime transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-tali-text-secondary leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <span 
                key={index}
                className="px-4 py-2 border border-tali-lime/30 rounded-full text-tali-text-secondary hover:text-tali-lime hover:border-tali-lime transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;