import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      features: [
        "Basic booking system",
        "Up to 1,000 bookings/month", 
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional", 
      price: "$299",
      period: "/month",
      features: [
        "Advanced booking system",
        "Up to 10,000 bookings/month",
        "Priority support", 
        "Custom branding",
        "Advanced analytics",
        "Multi-currency support",
        "API access"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Quote",
      features: [
        "Unlimited bookings",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations", 
        "White-label solution",
        "Advanced security",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden" style={{ background: '#371990' }}>
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
        PRICING
      </div>
      
      <div className="container mx-auto max-w-7xl section-content">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-gradient-lime">Pricing</span>
          </h2>
          <p className="text-2xl text-tali-text-secondary">
            <span className="text-tali-lime font-semibold">03</span> Pricing Plans
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative group ${plan.popular ? 'scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-tali-lime text-tali-purple-dark px-6 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className={`card-glass rounded-2xl p-8 transition-all duration-500 hover:scale-105 ${
                plan.popular ? 'border-2 border-tali-lime' : ''
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-tali-text-primary mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-tali-lime">{plan.price}</span>
                    <span className="text-tali-text-secondary text-lg">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-tali-text-secondary">
                      <div className="w-2 h-2 bg-tali-lime rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "lime" : "outline"} 
                  size="lg" 
                  className={`w-full ${
                    !plan.popular ? 'border-tali-lime text-tali-lime hover:bg-tali-lime hover:text-tali-purple-dark' : ''
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;