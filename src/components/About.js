import React from 'react';
import { Server, Shield, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-8 sm:px-12 lg:px-16 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-warm-yellow/5 to-golden-brown/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-golden-brown/8 to-warm-yellow/5 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-warm-yellow/3 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content Container */}
        <div className="bg-white/40 dark:bg-neutral-gray/10 backdrop-blur-sm rounded-3xl border border-warm-yellow/10 shadow-xl p-8 md:p-12">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-warm-yellow/10 to-golden-brown/10 border border-warm-yellow/20 mb-6">
              <Server className="h-5 w-5 text-warm-yellow" />
              <span className="text-warm-yellow font-semibold text-sm">What is Bagel?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-gray dark:text-cream mb-4">
              Infrastructure Deployment
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-warm-yellow to-golden-brown mb-6">
              Made Simple
            </h3>
            <p className="text-lg text-neutral-gray/70 dark:text-cream/70 max-w-2xl mx-auto leading-relaxed">
              Bagel is an open-source, self-service platform that makes Terraform-based infrastructure provisioning simple, fast, and intuitive - built for developers who just want to ship.
            </p>
          </div>

          {/* Features Cards - Horizontal Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-yellow/10 to-golden-brown/5 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 dark:bg-neutral-gray/20 backdrop-blur-sm rounded-2xl p-6 border border-warm-yellow/10 hover:border-warm-yellow/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-warm-yellow/20 to-golden-brown/10 group-hover:from-warm-yellow/30 group-hover:to-golden-brown/20 transition-all duration-300">
                    <Zap className="h-7 w-7 text-warm-yellow" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-gray dark:text-cream">
                    Self-Service Platform
                  </h3>
                </div>
                <p className="text-neutral-gray/70 dark:text-cream/70 leading-relaxed">
                  Empower teams to deploy infrastructure seamlessly with minimal dependencies. Simple, intuitive, and powerful.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-golden-brown/10 to-warm-yellow/5 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 dark:bg-neutral-gray/20 backdrop-blur-sm rounded-2xl p-6 border border-warm-yellow/10 hover:border-golden-brown/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-golden-brown/20 to-warm-yellow/10 group-hover:from-golden-brown/30 group-hover:to-warm-yellow/20 transition-all duration-300">
                    <Server className="h-7 w-7 text-golden-brown" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-gray dark:text-cream">
                    Terraform Integration
                  </h3>
                </div>
                <p className="text-neutral-gray/70 dark:text-cream/70 leading-relaxed">
                  Built on industry-standard Terraform with a beautiful, user-friendly interface that makes complex deployments feel effortless.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-yellow/10 to-golden-brown/5 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-white/60 dark:bg-neutral-gray/20 backdrop-blur-sm rounded-2xl p-6 border border-warm-yellow/10 hover:border-warm-yellow/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-warm-yellow/20 to-golden-brown/10 group-hover:from-warm-yellow/30 group-hover:to-golden-brown/20 transition-all duration-300">
                    <Shield className="h-7 w-7 text-warm-yellow" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-gray dark:text-cream">
                    Open Source
                  </h3>
                </div>
                <p className="text-neutral-gray/70 dark:text-cream/70 leading-relaxed">
                  Completely open source and community-driven. Self-hosted for complete control with all your data staying with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;