import { useInView } from 'react-intersection-observer';

const earlyAdopterBenefits = [
  {
    icon: '🎯',
    title: 'Made for Arm Wrestling',
    description: 'Unlike generic fitness apps, every feature is designed specifically for arm wrestling athletes. Track what actually matters.',
  },
  {
    icon: '💎',
    title: 'Be a Pioneer',
    description: 'Join the founding community of a specialized tool that understands your sport. Your input shapes future features.',
  },
  {
    icon: '🤝',
    title: 'Direct Support',
    description: 'Get personalized assistance from developers who are passionate about arm wrestling. Fast responses, real solutions.',
  },
  {
    icon: '🚀',
    title: 'Growing With You',
    description: 'As we add new features and improvements, you will be the first to benefit. Regular updates based on athlete feedback.',
  },
];

export const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Why Athletes
            <span className="gradient-text"> Choose ArmProgress</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The only training app built exclusively for arm wrestling. Here's what makes us different:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {earlyAdopterBenefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        <div ref={ref} className={`mt-16 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Start Training Smarter Today</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Generic fitness apps weren't built for arm wrestling. ArmProgress was. Track your specific movements,
              monitor arm-specific metrics, and follow training cycles designed for strength sports.
              Whether you're competing at nationals or just starting out, get the specialized tools you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#download" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition btn-hover">
                Download Now
              </a>
              <a href="mailto:support@armprogress.app" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 px-6 py-3 rounded-full font-semibold transition btn-hover">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ benefit, index }: { benefit: typeof earlyAdopterBenefits[0]; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <div className="text-5xl mb-4">{benefit.icon}</div>
      <h4 className="text-white font-bold text-xl mb-3">{benefit.title}</h4>
      <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
    </div>
  );
};
