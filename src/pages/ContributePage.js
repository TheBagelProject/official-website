import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code } from 'lucide-react';

const ContributePage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen pt-20 pb-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-warm-yellow to-golden-brown transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-golden-brown to-warm-yellow transform -rotate-12"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-warm-yellow to-golden-brown transform rotate-90"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-warm-yellow to-golden-brown transform rotate-45"></div>
      </div>

      <div className="relative z-10">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-6 mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-warm-yellow hover:text-golden-brown transition-all duration-200 hover:underline group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-warm-yellow to-golden-brown mb-8 shadow-lg">
            <Code className="w-10 h-10 text-dark-gray" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 bg-gradient-to-r from-warm-yellow to-golden-brown bg-clip-text text-transparent leading-tight py-2">
            Coming Soon!
          </h1>
          
          <p className="text-lg md:text-xl dark:text-cream/80 text-neutral-gray/80 max-w-3xl mx-auto leading-relaxed mb-10">
            We're crafting the perfect contribution guide to help you join our growing community of developers. Like preparing the perfect batch of bagels, we want to make sure every detail is just right.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm dark:text-cream/60 text-neutral-gray/60 mb-16">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-warm-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Comprehensive guide
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-warm-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Easy to follow steps
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-warm-yellow" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Community focused
            </div>
          </div>
        </div>

      {/* Contribution Guide Content */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <div className="bg-gradient-to-r from-warm-yellow/10 to-golden-brown/10 rounded-2xl p-8 border border-warm-yellow/20">
          <p className="text-lg md:text-xl dark:text-cream/80 text-neutral-gray/80 leading-relaxed mb-8">
            In the meantime, feel free to explore our{" "}
            <a 
              href="https://github.com/TheBagelProject" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warm-yellow hover:text-golden-brown transition-colors underline"
            >
              GitHub repository
            </a>{" "}
            and see how you can contribute today.
          </p>
          <Link
            to="/waitlist"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-warm-yellow to-golden-brown text-dark-gray px-8 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Notified When Ready
          </Link>
        </div>
      </div>

      {/* Additional Info */}
      <div className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="bg-gradient-to-r from-warm-yellow/10 to-golden-brown/10 rounded-2xl p-8 border border-warm-yellow/20">
          <h3 className="text-2xl font-semibold mb-4 text-warm-yellow">What's coming?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-warm-yellow text-dark-gray font-bold text-sm mr-3">1</span>
                <h4 className="font-semibold">Setup Guide</h4>
              </div>
              <p className="text-sm dark:text-cream/70 text-neutral-gray/70">Step-by-step instructions for setting up your development environment.</p>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-warm-yellow text-dark-gray font-bold text-sm mr-3">2</span>
                <h4 className="font-semibold">Best Practices</h4>
              </div>
              <p className="text-sm dark:text-cream/70 text-neutral-gray/70">Coding standards and guidelines to ensure quality contributions.</p>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-warm-yellow text-dark-gray font-bold text-sm mr-3">3</span>
                <h4 className="font-semibold">Community</h4>
              </div>
              <p className="text-sm dark:text-cream/70 text-neutral-gray/70">How to connect with other contributors and get support when needed.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContributePage;