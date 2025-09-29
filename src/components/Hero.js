import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
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
                Bagel makes deploying Terraform seamless — no workflow knowledge required.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start pt-4 animate-fade-in">
              <button className="group bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <Zap className="h-5 w-5" />
                Get Started with Bagel
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Subtle breadshop elements */}
        <div className="absolute top-1/2 left-10 opacity-5 dark:opacity-10 -z-10">
          <div className="w-32 h-32 rounded-full bg-warm-yellow animate-bounce-subtle"></div>
        </div>
        <div className="absolute top-1/3 right-10 opacity-5 dark:opacity-10 -z-10">
          <div className="w-24 h-24 rounded-full bg-golden-brown animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
