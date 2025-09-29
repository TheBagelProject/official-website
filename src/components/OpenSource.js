import React from 'react';
import { Github, Star, GitFork, Heart, ExternalLink } from 'lucide-react';

const OpenSource = () => {
  return (
    <section id="open-source" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle bagel background elements */}
      <div className="absolute inset-0 opacity-2 dark:opacity-3">
        {/* Large bagel */}
        <div className="absolute top-1/4 left-1/6">
          <svg width="160" height="160" viewBox="0 0 160 160" className="text-warm-yellow/10">
            <circle cx="80" cy="80" r="70" fill="currentColor" />
            <circle cx="80" cy="80" r="35" fill="none" stroke="currentColor" strokeWidth="8" opacity="0.6" />
            <circle cx="65" cy="65" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="95" cy="75" r="2.5" fill="currentColor" opacity="0.7" />
            <circle cx="85" cy="95" r="2" fill="currentColor" opacity="0.6" />
            <circle cx="70" cy="95" r="2.5" fill="currentColor" opacity="0.7" />
          </svg>
        </div>
        
        {/* Medium bagel */}
        <div className="absolute bottom-1/3 right-1/5">
          <svg width="128" height="128" viewBox="0 0 128 128" className="text-golden-brown/10">
            <circle cx="64" cy="64" r="56" fill="currentColor" />
            <circle cx="64" cy="64" r="28" fill="none" stroke="currentColor" strokeWidth="6" opacity="0.6" />
            <circle cx="52" cy="52" r="2.5" fill="currentColor" opacity="0.8" />
            <circle cx="76" cy="60" r="2" fill="currentColor" opacity="0.7" />
            <circle cx="68" cy="76" r="1.5" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
        
        {/* Small bagel */}
        <div className="absolute top-2/3 left-1/3">
          <svg width="96" height="96" viewBox="0 0 96 96" className="text-warm-yellow/10">
            <circle cx="48" cy="48" r="42" fill="currentColor" />
            <circle cx="48" cy="48" r="21" fill="none" stroke="currentColor" strokeWidth="5" opacity="0.6" />
            <circle cx="39" cy="39" r="2" fill="currentColor" opacity="0.8" />
            <circle cx="57" cy="45" r="1.5" fill="currentColor" opacity="0.7" />
            <circle cx="51" cy="57" r="1.5" fill="currentColor" opacity="0.6" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <Heart className="h-6 w-6 text-red-400" />
            <span className="text-warm-yellow font-medium">Open Source</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-gray dark:text-cream mb-6">
            Built by the Community, 
            <br />
            <span className="text-warm-yellow">For the Community</span>
          </h2>
          <p className="text-xl text-neutral-gray/70 dark:text-cream/70 max-w-3xl mx-auto">
            Like the finest artisanal bread, Bagel is crafted with love and shared freely. 
            Join our growing community of developers who believe infrastructure should be accessible to everyone.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left: Community Stats & Features */}
          <div className="space-y-8 animate-slide-up">
            
            {/* GitHub Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/60 dark:bg-neutral-gray/40 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-neutral-gray/10 dark:border-cream/10">
                <div className="flex items-center justify-center mb-3">
                  <Star className="h-8 w-8 text-warm-yellow" />
                </div>
                <div className="text-2xl font-bold text-neutral-gray dark:text-cream">2.3k</div>
                <div className="text-sm text-neutral-gray/70 dark:text-cream/70">GitHub Stars</div>
              </div>

              <div className="bg-white/60 dark:bg-neutral-gray/40 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-neutral-gray/10 dark:border-cream/10">
                <div className="flex items-center justify-center mb-3">
                  <GitFork className="h-8 w-8 text-golden-brown" />
                </div>
                <div className="text-2xl font-bold text-neutral-gray dark:text-cream">400+</div>
                <div className="text-sm text-neutral-gray/70 dark:text-cream/70">Forks</div>
              </div>
            </div>

            {/* Community Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-neutral-gray dark:text-cream">
                Why Open Source?
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Transparency",
                    description: "Every line of code is open for inspection and improvement"
                  },
                  {
                    title: "Collaboration", 
                    description: "Built with contributions from developers worldwide"
                  },
                  {
                    title: "Innovation",
                    description: "Community-driven features that solve real problems"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-warm-yellow rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-medium text-neutral-gray dark:text-cream mb-1">
                        {item.title}
                      </h4>
                      <p className="text-neutral-gray/70 dark:text-cream/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contribution CTA */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-warm-yellow/10 to-golden-brown/10 dark:from-warm-yellow/5 dark:to-golden-brown/5 rounded-3xl p-8 border border-warm-yellow/20">
              
              {/* GitHub Logo */}
              <div className="text-center mb-8">
                <div className="inline-flex p-6 rounded-full bg-neutral-gray dark:bg-cream/10">
                  <Github className="h-12 w-12 text-cream dark:text-warm-yellow" />
                </div>
              </div>

              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold text-neutral-gray dark:text-cream">
                  Ready to Contribute?
                </h3>
                
                <p className="text-neutral-gray/70 dark:text-cream/70">
                  Whether you're fixing bugs, adding features, or improving documentation, 
                  every contribution makes Bagel better for everyone.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://github.com/bagel-org/bagel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray px-6 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 justify-center"
                  >
                    <Github className="h-5 w-5" />
                    View on GitHub
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  
                  <a
                    href="https://github.com/bagel-org/bagel/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border-2 border-warm-yellow text-warm-yellow px-6 py-3 rounded-2xl font-medium hover:bg-warm-yellow hover:text-neutral-gray transition-all duration-300 justify-center"
                  >
                    Contribute Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center animate-fade-in">
          <blockquote className="text-xl md:text-2xl italic text-neutral-gray/70 dark:text-cream/70 max-w-3xl mx-auto">
            "Like sharing a recipe that's been in the family for generations, 
            we believe great infrastructure tools should be available to everyone."
          </blockquote>
          <div className="mt-4 text-warm-yellow font-medium">— The Bagel Team</div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
