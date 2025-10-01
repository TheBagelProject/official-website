import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Showcase from '../components/Showcase';
import HowToGetStarted from '../components/HowToGetStarted';
import Team from '../components/Team';
import OpenSource from '../components/OpenSource';

const HomePage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Showcase />
      <HowToGetStarted />
      
      {/* Join Waitlist Section - replacing the full form */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-warm-yellow to-golden-brown transform rotate-45"></div>
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-golden-brown to-warm-yellow transform -rotate-12"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-warm-yellow to-golden-brown transform rotate-90"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-warm-yellow to-golden-brown mb-6">
              <UserPlus className="w-8 h-8 text-dark-gray" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-yellow to-golden-brown bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl mb-8 dark:text-cream/80 text-neutral-gray/80 max-w-2xl mx-auto leading-relaxed">
              Join our waitlist to be the first to try Bagel's official release when it's ready. In the meantime, you can already explore our development version with Docker Compose.
            </p>
            
            <div className="flex justify-center">
              <Link
                to="/waitlist"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray font-medium rounded-2xl hover:shadow-lg transition-all duration-300 gap-2"
              >
                <UserPlus className="h-4 w-4" />
                Save My Spot
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm dark:text-cream/60 text-neutral-gray/60">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-warm-yellow" />
                Free to join
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-warm-yellow" />
                Early access
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-warm-yellow" />
                No commitments
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />
      <OpenSource />
    </>
  );
};

export default HomePage;