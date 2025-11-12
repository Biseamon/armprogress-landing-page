export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 backdrop-blur-lg border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">💪</span>
              </div>
              <span className="text-white text-2xl font-bold">ArmProgress</span>
            </div>
            <p className="text-gray-400 max-w-md mb-4">
              The ultimate training companion for arm wrestlers. Track your progress,
              analyze your performance, and dominate the competition.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/armprogress" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://instagram.com/armprogress" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="https://facebook.com/armprogress" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#download" className="text-gray-400 hover:text-white transition">Download</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/help" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} ArmProgress. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with ❤️ for arm wrestlers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};
