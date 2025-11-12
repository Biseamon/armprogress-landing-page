import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Mike Johnson',
    role: 'Professional Arm Wrestler',
    image: '👨‍🦰',
    rating: 5,
    text: 'ArmProgress completely transformed my training. The analytics help me identify weak points and the progress tracking keeps me motivated. Best investment I\'ve made!',
  },
  {
    name: 'Sarah Martinez',
    role: 'National Champion',
    image: '👩‍🦱',
    rating: 5,
    text: 'I\'ve tried every fitness app out there, but nothing comes close to ArmProgress for arm wrestling-specific training. The cycle planning is genius!',
  },
  {
    name: 'Tom Anderson',
    role: 'Competitive Athlete',
    image: '👨',
    rating: 5,
    text: 'The detailed tracking and export features are incredible. I can share my progress with my coach and we can analyze everything together. Game changer!',
  },
  {
    name: 'Lisa Chen',
    role: 'Training Enthusiast',
    image: '👩',
    rating: 5,
    text: 'Finally, an app that understands arm wrestling! The goal setting and measurement tracking help me stay focused and see real results.',
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
            Loved by
            <span className="gradient-text"> Athletes Worldwide</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of arm wrestlers who are crushing their goals with ArmProgress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
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
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-3">{testimonial.image}</div>
        <div>
          <h4 className="text-white font-bold">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.text}"</p>
    </div>
  );
};
