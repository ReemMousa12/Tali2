import { useState, useEffect, useRef } from 'react';
import background from '../assets/background/1.jpg';
import FloatingCircles from './FloatingCircles';

const features= [
	{
		number: '1',
		title: 'Unified Dashboard',
		description:
			'Centralized control for all your venues and events, with real-time analytics and performance metrics.',
	},
	{
		number: '2',
		title: 'Elite Analytics',
		description:
			'AI-powered insights, predictive analytics, and custom reports to optimize your business performance.',
	},
	{
		number: '3',
		title: 'Global Scale',
		description:
			'Enterprise-ready infrastructure, auto-scaling, multi-language support, and global compliance.',
	},
];

const FeaturesSection = () => {
	const [visibleFeatures, setVisibleFeatures] = useState(new Set());
	const [hoveredFeature, setHoveredFeature] = useState(null);
	const featuresRef = useRef(null);

	// Scroll-triggered animations for features section
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Trigger staggered animations for feature cards sliding from right
						features.forEach((_, index) => {
							setTimeout(() => {
								setVisibleFeatures(prev => new Set([...prev, index]));
							}, index * 200);
						});
					}
				});
			},
			{ threshold: 0.3 }
		);

		if (featuresRef.current) {
			observer.observe(featuresRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="features"
			className="py-20 px-4 relative overflow-hidden"
			style={{
        paddingTop: '8rem',
				backgroundImage: `url(${background})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				minHeight: '100vh',
			}}
		>
			{/* Background Headline */}
			<div
				className="background-headline wm wow slideInUp animated"
				style={{
          color: '#fff',
          fontSize: 'clamp(2rem, 8vw, 7.5rem)',
          opacity: 0.2,
          position: 'absolute',
          left: 0,
          zIndex: 0,
          width: '100%',
          textAlign: 'center',
          fontFamily: 'Red Hat Display, sans-serif',
          paddingLeft: 'clamp(0px, 4vw, 60px)',
          letterSpacing: 'clamp(1rem, 7vw, 5rem)',
          textTransform: 'uppercase',
          visibility: 'visible',
          animationName: 'slideInUp',
          backgroundSize: 'cover',
          transform: 'translate3d(0px, 0px, 0px)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
			>
				FEATURES
			</div>
			<div className="container mx-auto section-content relative z-10">
				{/* Header */}
				<div className="text-center mb-20">
					<h2 className="text-4xl md:text-6xl pt-4 font-bold mb-8">
						<span className="text-tali-lime font-semibold">02</span> Features
					</h2>
				</div>
				{/* Floating Circles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles numberOfCircles={8} />
      </div>
						{/* Features Timeline */}
						<div ref={featuresRef} className="relative flex flex-col items-center mb-5 max-w-3xl mx-auto">
							<div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-tali-lime/60 to-tali-lime/0 z-0" style={{transform: 'translateX(-50%)'}} />
							{features.map((feature, index) => {
								const isVisible = visibleFeatures.has(index);
								const isHovered = hoveredFeature === index;
								return (
									<div 
										key={index} 
										className="relative z-10 flex items-center w-full mb-16 last:mb-0"
										onMouseEnter={() => setHoveredFeature(index)}
										onMouseLeave={() => setHoveredFeature(null)}
									>
										{/* Timeline Dot - Static, no animation */}
										<div className="flex flex-col items-center w-1/12 min-w-[60px]">
											<div className="w-12 h-12 rounded-full bg-gradient-to-br from-tali-lime to-tali-lime-bright flex items-center justify-center text-2xl font-bold text-tali-purple-dark shadow-lg border-4 border-white/30">
												{feature.number}
											</div>
											{index < features.length - 1 && (
												<div className="flex-1 w-1 bg-gradient-to-b from-tali-lime/60 to-tali-lime/0 my-2" style={{minHeight: '40px'}} />
											)}
										</div>
										{/* Card - Slides from right */}
										<div className={`ml-8 flex-1 bg-white/10 rounded-2xl p-4 md:p-8 shadow-xl backdrop-blur-md border border-tali-lime/20 transition-all duration-700 ${
											isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
										} ${isHovered ? 'scale-[1.03] border-tali-lime/40 bg-white/15' : 'hover:scale-[1.02]'}`}
										style={{ transitionDelay: `${index * 200}ms` }}>
											<h3 className={`text-lg md:text-2xl font-bold text-tali-text-primary mb-2 md:mb-4 transition-colors duration-300 ${
												isHovered ? 'text-tali-lime' : 'group-hover:text-tali-lime'
											}`}>
												{feature.title}
											</h3>
											<p className="text-tali-text-secondary leading-relaxed text-sm md:text-lg">
												{feature.description}
											</p>
											{/* Animated accent line */}
											<div className={`mt-4 h-1 bg-gradient-to-r from-tali-lime to-transparent rounded-full transition-all duration-500 ${
												isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'
											}`} style={{ transitionDelay: `${index * 200 + 300}ms` }} />
										</div>
									</div>
								);
							})}
						</div>
			</div>
		</section>
	);
};

export default FeaturesSection;