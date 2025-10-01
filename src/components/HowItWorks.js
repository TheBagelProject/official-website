import React from 'react';
import { Github, ArrowRight, MousePointer } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Push Terraform Code",
      description: "Push your Terraform infrastructure code to your GitHub repository",
      icon: <Github className="h-8 w-8" />,
      color: "from-warm-yellow to-golden-brown"
    },
    {
      number: "02", 
      title: "Connect Repository",
      description: "Connect your GitHub repo to Bagel's intuitive platform",
      icon: <ArrowRight className="h-8 w-8" />,
      color: "from-golden-brown to-warm-yellow"
    },
    {
      number: "03",
      title: "Deploy with One Click",
      description: "Deploy your infrastructure seamlessly with our user-friendly interface",
      icon: <MousePointer className="h-8 w-8" />,
      color: "from-warm-yellow to-golden-brown"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-8 sm:px-12 lg:px-16 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-gray dark:text-cream mb-6 relative">
            How It Works
          </h2>
          <p className="text-xl text-neutral-gray/70 dark:text-cream/70 max-w-2xl mx-auto relative">
            Three simple steps to deploy your infrastructure with the warmth of a European bakery
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Flowing Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-yellow/30 to-transparent transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Card */}
                <div className="bg-white/60 dark:bg-neutral-gray/40 backdrop-blur-sm rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-102 border border-neutral-gray/5 dark:border-cream/5">
                  
                  {/* Icon with glow effect */}
                  <div className="flex justify-center mb-8">
                    <div className={`p-6 rounded-3xl bg-gradient-to-br ${step.color} text-neutral-gray shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-semibold text-neutral-gray dark:text-cream group-hover:text-warm-yellow transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-neutral-gray/70 dark:text-cream/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Subtle corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-warm-yellow/20 rounded-full group-hover:bg-warm-yellow/40 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-golden-brown/15 rounded-full group-hover:bg-golden-brown/30 transition-colors duration-300"></div>
                </div>

                {/* Floating connector dots */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-warm-yellow/40 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-warm-yellow/30 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-warm-yellow/40 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
