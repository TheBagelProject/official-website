import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen pt-20 pb-12 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-warm-yellow to-golden-brown flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold text-dark-gray">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-warm-yellow to-golden-brown bg-clip-text text-transparent">
            Page Not Found
          </h1>
          <p className="text-lg dark:text-cream/70 text-neutral-gray/70 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-warm-yellow to-golden-brown text-dark-gray font-semibold rounded-lg hover:from-golden-brown hover:to-warm-yellow transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          
          <div className="text-center">
            <Link
              to="/waitlist"
              className="inline-flex items-center text-warm-yellow hover:text-golden-brown transition-colors duration-200"
            >
              Or join our waitlist
              <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;