import { useInView } from 'react-intersection-observer';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      'Basic workout tracking',
      'Up to 10 workouts per month',
      'Basic progress charts',
      'Community support',
      'Dark mode',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Premium',
    price: '$9.99',
    period: 'per month',
    description: 'For serious athletes',
    features: [
      'Unlimited workout tracking',
      'Advanced analytics & charts',
      'Training cycles & programs',
      'Body measurements tracking',
      'Export your data',
      'Priority support',
      'No advertisements',
      'Cloud backup',
    ],
    cta: 'Go Premium',
    popular: true,
  },
];

export const Pricing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Simple, Transparent
            <span className="gradient-text"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that's right for you. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        <div className="text-center mt-12 text-gray-400">
          <p>💳 All plans include a 7-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, index }: { plan: typeof plans[0]; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`relative glass rounded-3xl p-8 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${plan.popular ? 'border-2 border-primary pulse-glow' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
            🔥 MOST POPULAR
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-gray-400 mb-4">{plan.description}</p>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-extrabold text-white">{plan.price}</span>
          <span className="text-gray-400 ml-2">/{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#download"
        className={`block w-full text-center py-4 rounded-full font-bold transition btn-hover ${
          plan.popular
            ? 'bg-primary text-white hover:bg-primary/90'
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        {plan.cta}
      </a>
    </div>
  );
};
