import React from 'react';
import { Settings, Github, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Self-Service Deployment",
      description: "Deploy infrastructure independently with no DevOps bottlenecks. Simple, intuitive, and powerful.",
      gradient: "from-warm-yellow to-golden-brown"
    },
    {
      icon: <Github className="h-8 w-8" />,
      title: "GitHub Integration", 
      description: "Seamlessly connect your repositories and trigger deployments directly from your existing workflow.",
      gradient: "from-golden-brown to-warm-yellow"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "User-Friendly UI",
      description: "Beautiful, artisanal interface that makes complex infrastructure management feel effortless.",
      gradient: "from-warm-yellow to-golden-brown"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Open-Source Community",
      description: "Built by developers, for developers. Join our growing community of infrastructure enthusiasts.",
      gradient: "from-golden-brown to-warm-yellow"
    }
  ];

  return (
    <section id="features" className="py-20 px-8 sm:px-12 lg:px-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-warm-yellow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-golden-brown"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-warm-yellow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-gray dark:text-cream mb-6">
            Crafted with Care
          </h2>
          <p className="text-xl text-neutral-gray/70 dark:text-cream/70 max-w-3xl mx-auto">
            Like a master baker perfecting their craft, we've carefully designed each feature to make infrastructure deployment a delightful experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-yellow/10 to-golden-brown/5 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/60 dark:bg-neutral-gray/20 backdrop-blur-sm rounded-2xl p-6 h-full border border-warm-yellow/10 hover:border-warm-yellow/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
                
                {/* Icon Container */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-warm-yellow/20 to-golden-brown/10 group-hover:from-warm-yellow/30 group-hover:to-golden-brown/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-gray dark:text-cream">
                    {feature.title}
                  </h3>
                </div>

                {/* Content */}
                <p className="text-neutral-gray/70 dark:text-cream/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-warm-yellow rounded-full opacity-30 group-hover:opacity-60 transition-opacity"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
