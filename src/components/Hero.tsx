import { useEffect, useState } from 'react';

export const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-primary rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="ArmProgress Logo" className="w-14 h-14 rounded-lg" />
              <span className="text-white text-2xl font-bold">ArmProgress</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#download" className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-semibold transition btn-hover">
                Download Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="text-center animate-fade-in">
          <div className="inline-block mb-4">
            <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/30">
              💪 The First Dedicated Arm Wrestling Training App
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Train Harder,
            <br />
            <span className="gradient-text">Track Smarter</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-balance">
            Finally, a dedicated training companion built specifically for arm wrestlers. Track workouts, monitor progress,
            and reach your peak performance with advanced analytics and personalized training cycles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#download" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition btn-hover flex items-center gap-2 shadow-xl">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              Download for iOS
            </a>
            <a href="#download" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 px-8 py-4 rounded-full font-bold text-lg transition btn-hover flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Download for Android
            </a>
          </div>

          {/* Key Features */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-white">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">Specialized</div>
              <div className="text-gray-400 text-sm">Built for Arm Wrestling</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">Complete</div>
              <div className="text-gray-400 text-sm">Track Every Detail</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">Smart</div>
              <div className="text-gray-400 text-sm">Advanced Analytics</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
