import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Track your strength gains over time with beautiful charts and detailed progress reports.',
  },
  {
    icon: '🏋️',
    title: 'Workout Tracking',
    description: 'Log training sessions with exercises, sets, reps, and weights. Never miss a detail.',
  },
  {
    icon: '🎯',
    title: 'Goal Setting',
    description: 'Set personalized goals and get motivated as you track your journey to success.',
  },
  {
    icon: '📅',
    title: 'Training Cycles',
    description: 'Organize workouts into periodized training programs for optimal performance.',
  },
  {
    icon: '📏',
    title: 'Body Measurements',
    description: 'Track arm circumference, weight, and other measurements to visualize your progress.',
  },
  {
    icon: '⏰',
    title: 'Scheduled Training',
    description: 'Plan your workouts in advance and receive notifications to stay on track.',
  },
  {
    icon: '🌙',
    title: 'Dark Mode',
    description: 'Eye-friendly dark theme for training late at night without strain.',
  },
  {
    icon: '☁️',
    title: 'Cloud Sync',
    description: 'Your data is safely stored and synced across all your devices automatically.',
  },
  {
    icon: '📤',
    title: 'Export Data',
    description: 'Export your training data in various formats for deeper analysis and record keeping.',
  },
];

export const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Everything You Need to
            <span className="gradient-text"> Dominate</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built for serious arm wrestlers who demand the best tools for their training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
    </div>
  );
};
