import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Github, Menu, X } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 bg-cream dark:bg-dark-gray border-b border-neutral-gray/10 dark:border-cream/10">
      <nav className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <img 
                src={darkMode ? "/Logo/Bagel-v1.0.1-DarkMode.png" : "/Logo/Bagel-v1.0.1-LightMode.png"} 
                alt="Bagel Logo" 
                className="h-10 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {isHomePage ? (
              <>
                <a href="#features" className="text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors text-sm">
                  Features
                </a>
                <a href="#how-it-works" className="text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors text-sm">
                  How It Works
                </a>
                <a href="#showcase" className="text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors text-sm">
                  Showcase
                </a>
                <a href="#how-to-start" className="text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors text-sm">
                  Get Started
                </a>
                <a href="#team" className="text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors text-sm">
                  Team
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors text-sm">
                  Home
                </Link>
              </>
            )}
            <Link 
              to="/waitlist" 
              className={`px-6 py-2 rounded-2xl font-medium text-sm transition-all duration-300 hover:shadow-lg ${
                location.pathname === '/waitlist'
                  ? 'bg-warm-yellow text-neutral-gray'
                  : 'bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray'
              }`}
            >
              Join Waitlist
            </Link>
          </div>

          {/* Desktop: Dark Mode Toggle & GitHub */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-warm-yellow" />
              ) : (
                <Moon className="h-5 w-5 text-neutral-gray" />
              )}
            </button>
            <a
              href="https://github.com/TheBagelProject"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors"
              aria-label="GitHub repository"
            >
              <Github className="h-5 w-5 text-neutral-gray dark:text-cream" />
            </a>
            <a
              href="https://buymeacoffee.com/thebagelproject"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity"
              aria-label="Buy Me a Coffee"
            >
              <img 
                src="/sponsorship/bmc-button.svg" 
                alt="Buy Me a Coffee" 
                className="h-8 w-auto"
              />
            </a>
            <a
              href="https://patreon.com/thebagelproject?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors"
              aria-label="Support us on Patreon"
            >
              <img 
                src={darkMode ? "/sponsorship/patreon-darkmode.svg" : "/sponsorship/patreon-lightmode.svg"} 
                alt="Support us on Patreon" 
                className="h-5 w-5 opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {/* Mobile: Hamburger Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-warm-yellow" />
              ) : (
                <Moon className="h-4 w-4 text-neutral-gray" />
              )}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-warm-yellow/10 transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-neutral-gray dark:text-cream" />
              ) : (
                <Menu className="h-5 w-5 text-neutral-gray dark:text-cream" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-8 py-6 bg-cream/95 dark:bg-dark-gray/95 backdrop-blur-md border-t border-neutral-gray/10 dark:border-cream/10">
            
            {/* Navigation Links */}
            <div className="space-y-4 mb-6">
              {isHomePage ? (
                <>
                  <a 
                    href="#features" 
                    onClick={closeMobileMenu}
                    className="block text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors text-base font-medium py-2"
                  >
                    Features
                  </a>
                  <a 
                    href="#how-it-works" 
                    onClick={closeMobileMenu}
                    className="block text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors text-base font-medium py-2"
                  >
                    How It Works
                  </a>
                  <a 
                    href="#showcase" 
                    onClick={closeMobileMenu}
                    className="block text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors text-base font-medium py-2"
                  >
                    Showcase
                  </a>
                  <a 
                    href="#how-to-start" 
                    onClick={closeMobileMenu}
                    className="block text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors text-base font-medium py-2"
                  >
                    Get Started
                  </a>
                  <a 
                    href="#team" 
                    onClick={closeMobileMenu}
                    className="block text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors text-base font-medium py-2"
                  >
                    Team
                  </a>
                </>
              ) : (
                <Link 
                  to="/" 
                  onClick={closeMobileMenu}
                  className="block text-neutral-gray dark:text-cream hover:text-warm-yellow transition-colors text-base font-medium py-2"
                >
                  Home
                </Link>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-4 border-t border-neutral-gray/20 dark:border-cream/20">
              <Link 
                to="/waitlist" 
                onClick={closeMobileMenu}
                className={`block w-full text-center px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 hover:shadow-lg ${
                  location.pathname === '/waitlist'
                    ? 'bg-warm-yellow text-neutral-gray'
                    : 'bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray'
                }`}
              >
                Join Waitlist
              </Link>
              
              <a
                href="https://github.com/TheBagelProject"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-warm-yellow text-warm-yellow hover:bg-warm-yellow hover:text-neutral-gray font-medium rounded-2xl transition-all duration-300"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </a>
              
              <a
                href="https://buymeacoffee.com/thebagelproject"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-center w-full py-2 hover:opacity-90 transition-all duration-300"
              >
                <img 
                  src="/sponsorship/bmc-button.svg" 
                  alt="Buy Me a Coffee" 
                  className="h-12 w-auto"
                />
              </a>
              
              <a
                href="https://patreon.com/thebagelproject?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-3 w-full px-6 py-3 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-cream font-medium rounded-2xl transition-all duration-300"
              >
                <img 
                  src={darkMode ? "/sponsorship/patreon-darkmode.svg" : "/sponsorship/patreon-lightmode.svg"} 
                  alt="Patreon" 
                  className="h-5 w-5"
                />
                Support on Patreon
              </a>
            </div>

            {/* Decorative Element */}
            <div className="mt-6 pt-4 border-t border-neutral-gray/20 dark:border-cream/20">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-1 bg-gradient-to-r from-warm-yellow to-golden-brown rounded-full opacity-30"></div>
                <p className="text-xs text-neutral-gray/60 dark:text-cream/60 font-medium">
                  Crafted with passion, served with pride
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
