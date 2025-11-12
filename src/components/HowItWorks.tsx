import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: '01',
    title: 'Download & Sign Up',
    description: 'Get the app from the App Store or Google Play. Create your free account in seconds.',
    icon: '📱',
  },
  {
    number: '02',
    title: 'Set Your Goals',
    description: 'Define your training objectives and let ArmProgress create a personalized plan.',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Track Workouts',
    description: 'Log your training sessions with detailed exercise data and measurements.',
    icon: '💪',
  },
  {
    number: '04',
    title: 'Monitor Progress',
    description: 'View analytics, charts, and insights to optimize your training and smash goals.',
    icon: '📈',
  },
];

export const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get Started in
            <span className="gradient-text"> 4 Simple Steps</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From download to domination in minutes. It's that easy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Connection line (hidden on last item) */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -z-10"></div>
      )}

      <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
          {step.icon}
        </div>

        <div className="text-primary/40 text-6xl font-black mb-4">{step.number}</div>

        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
        <p className="text-gray-400 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};
