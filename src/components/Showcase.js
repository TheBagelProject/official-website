import React from 'react';
import { Play, Server, Users, MousePointer, Shield } from 'lucide-react';

const Showcase = () => {
  return (
    <section id="showcase" className="py-20 px-8 sm:px-12 lg:px-16 bg-gradient-to-br from-cream/50 to-warm-yellow/10 dark:from-dark-gray/50 dark:to-neutral-gray/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-gray dark:text-cream mb-6">
            See Bagel in Action
          </h2>
          <p className="text-xl text-neutral-gray/70 dark:text-cream/70 max-w-2xl mx-auto">
            Experience the beautiful simplicity of our dashboard and deployment flows
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Dashboard Preview */}
          <div className="order-2 lg:order-1 animate-slide-up">
            <div className="relative group">
              {/* Mock Dashboard */}
              <div className="bg-white dark:bg-neutral-gray rounded-3xl shadow-2xl overflow-hidden border border-neutral-gray/10 dark:border-cream/10">
                
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-warm-yellow to-golden-brown p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-neutral-gray font-medium">Bagel Dashboard</div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Project Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-cream/50 dark:bg-dark-gray/50 rounded-2xl p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="font-medium text-neutral-gray dark:text-cream">Production</span>
                        </div>
                        <div className="text-sm text-neutral-gray/70 dark:text-cream/70">AWS Infrastructure</div>
                      </div>
                      <div className="bg-cream/50 dark:bg-dark-gray/50 rounded-2xl p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-3 h-3 bg-warm-yellow rounded-full animate-pulse"></div>
                          <span className="font-medium text-neutral-gray dark:text-cream">Staging</span>
                        </div>
                        <div className="text-sm text-neutral-gray/70 dark:text-cream/70">Deploying...</div>
                      </div>
                    </div>

                    {/* Deploy Button */}
                    <div className="flex justify-center pt-4">
                      <button className="bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray px-8 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        Deploy Infrastructure
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-warm-yellow rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-golden-brown rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
          </div>

          {/* Description */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-in">
            <div>
              <h3 className="text-3xl font-bold text-neutral-gray dark:text-cream mb-4">
                Beautifully Simple Interface
              </h3>
              <p className="text-lg text-neutral-gray/70 dark:text-cream/70 leading-relaxed">
                Our dashboard brings the warmth and attention to detail of a European bakery to infrastructure management. Every button, every workflow, crafted with care.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                { icon: <Server className="h-5 w-5" />, text: "Self-hosted for complete control" },
                { icon: <Shield className="h-5 w-5" />, text: "All of the data stays with you" },
                { icon: <Users className="h-5 w-5" />, text: "User-friendly interface for everyone" },
                { icon: <MousePointer className="h-5 w-5" />, text: "Minimal clicks, maximum efficiency" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-2 rounded-xl bg-warm-yellow/10 text-warm-yellow">
                    {item.icon}
                  </div>
                  <span className="text-neutral-gray dark:text-cream">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="text-warm-yellow font-medium hover:text-golden-brown transition-colors flex items-center gap-2 group">
                Try the demo
                <Play className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in">
          {[
            { number: "10k+", label: "Deployments" },
            { number: "500+", label: "Happy Developers" },
            { number: "99.9%", label: "Uptime" }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-warm-yellow">{stat.number}</div>
              <div className="text-neutral-gray/70 dark:text-cream/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
