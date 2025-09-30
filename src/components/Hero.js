import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { BackgroundPaths } from './ui/background-paths';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 px-8 sm:px-12 lg:px-16">
      {/* Animated Background - extends beyond section */}
      <BackgroundPaths />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start animate-fade-in">
            <img 
              src="/Logo/Bagel-v1.0.1-LightMode.png" 
              alt="Bagel Logo" 
              className="h-32 md:h-40 lg:h-48 w-auto dark:hidden"
            />
            <img 
              src="/Logo/Bagel-v1.0.1-DarkMode.png" 
              alt="Bagel Logo" 
              className="h-32 md:h-40 lg:h-48 w-auto hidden dark:block"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Headlines */}
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-gray dark:text-cream leading-tight">
                Provision Cloud Infrastructure,{' '}
                <span className="text-warm-yellow">The Easy Way</span>
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-gray/80 dark:text-cream/80 leading-relaxed">
                Bagel makes deploying Terraform seamless - no workflow knowledge required.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start pt-4 animate-fade-in">
              <button className="group w-full sm:w-auto bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray px-8 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Zap className="h-4 w-4" />
                Get Started with Bagel
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Subtle breadshop elements */}
        <div className="absolute top-1/2 left-10 opacity-10 dark:opacity-15 z-0">
          <div className="w-32 h-32 rounded-full bg-warm-yellow/30 animate-bounce-subtle"></div>
        </div>
        <div className="absolute top-1/3 right-10 opacity-10 dark:opacity-15 z-0">
          <div className="w-24 h-24 rounded-full bg-golden-brown/30 animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
