import background from '../assets/background/1.jpg';

const features = [
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
	return (
		<section
			id="features"
			className="py-30 px-4 relative overflow-hidden"
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
				FEATURES
			</div>
			<div className="container mx-auto section-content relative z-10">
				{/* Header */}
				<div className="text-center mb-20">
					<h2 className="text-6xl md:text-7xl font-bold mb-8">
						<span className="text-tali-lime font-semibold">02</span> Key Features
					</h2>
				</div>
						{/* Features Timeline */}
						<div className="relative flex flex-col items-center mb-5 max-w-3xl mx-auto">
							<div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-tali-lime/60 to-tali-lime/0 z-0" style={{transform: 'translateX(-50%)'}} />
							{features.map((feature, index) => (
								<div key={index} className="relative z-10 flex items-center w-full mb-16 last:mb-0">
									{/* Timeline Dot */}
									<div className="flex flex-col items-center w-1/12 min-w-[60px]">
										<div className="w-12 h-12 rounded-full bg-gradient-to-br from-tali-lime to-tali-lime-bright flex items-center justify-center text-2xl font-bold text-tali-purple-dark shadow-lg border-4 border-white/30">
											{feature.number}
										</div>
										{index < features.length - 1 && (
											<div className="flex-1 w-1 bg-gradient-to-b from-tali-lime/60 to-tali-lime/0 my-2" style={{minHeight: '40px'}} />
										)}
									</div>
									{/* Card */}
									<div className="ml-8 flex-1 bg-white/10 rounded-2xl p-8 shadow-xl backdrop-blur-md border border-tali-lime/20 group hover:scale-[1.03] transition-transform duration-300">
										<h3 className="text-2xl font-bold text-tali-text-primary mb-4 group-hover:text-tali-lime transition-colors">
											{feature.title}
										</h3>
										<p className="text-tali-text-secondary leading-relaxed text-lg">
											{feature.description}
										</p>
									</div>
								</div>
							))}
						</div>
			</div>
		</section>
	);
};

export default FeaturesSection;