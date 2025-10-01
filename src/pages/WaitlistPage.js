import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ClipboardList } from 'lucide-react';
import WaitlistForm from '../components/WaitlistForm';

const WaitlistPage = () => {
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
          <ClipboardList className="w-10 h-10 text-dark-gray" />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-warm-yellow to-golden-brown bg-clip-text text-transparent">
          Join the Waitlist
        </h1>
        
        <p className="text-lg md:text-xl dark:text-cream/80 text-neutral-gray/80 max-w-3xl mx-auto leading-relaxed mb-10">
          Be among the first to experience Bagel's official release. We'll notify you as soon as v1.0 is ready. Until then, you can play around with our development version today.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm dark:text-cream/60 text-neutral-gray/60 mb-16">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-warm-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Be first to try the official release
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-warm-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Exclusive updates & insights
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-warm-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No spam
          </div>
        </div>
      </div>

      {/* Waitlist Form */}
      <div className="relative -mx-6">
        <WaitlistForm />
      </div>

      {/* Additional Info */}
      <div className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="bg-gradient-to-r from-warm-yellow/10 to-golden-brown/10 rounded-2xl p-8 border border-warm-yellow/20">
          <h3 className="text-2xl font-semibold mb-4 text-warm-yellow">What happens next?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-warm-yellow text-dark-gray font-bold text-sm mr-3">1</span>
                <h4 className="font-semibold">Confirmation</h4>
              </div>
              <p className="text-sm dark:text-cream/70 text-neutral-gray/70">You'll receive an instant confirmation that you've joined our waitlist.</p>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-warm-yellow text-dark-gray font-bold text-sm mr-3">2</span>
                <h4 className="font-semibold">Updates</h4>
              </div>
              <p className="text-sm dark:text-cream/70 text-neutral-gray/70">Get exclusive development updates and behind-the-scenes insights.</p>
            </div>
            <div>
              <div className="flex items-center mb-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-warm-yellow text-dark-gray font-bold text-sm mr-3">3</span>
                <h4 className="font-semibold">Early Access</h4>
              </div>
              <p className="text-sm dark:text-cream/70 text-neutral-gray/70">Bagel's development version is already fresh out of the oven! Try it today with Docker Compose, and join the waitlist to be the first to experience our official release when it's ready.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WaitlistPage;