import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Github, Menu, X } from 'lucide-react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['how-it-works', 'features', 'showcase', 'how-to-start', 'team'];
      const scrollPosition = window.scrollY + 100;

      // If we're at the very top of the page, clear active section
      if (window.scrollY < 50) {
        setActiveSection('');
        return;
      }

      let foundSection = false;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            foundSection = true;
            break;
          }
        }
      }

      // If no section is found, clear active section
      if (!foundSection) {
        setActiveSection('');
      }
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="m-4 rounded-xl backdrop-blur-xl bg-cream/40 dark:bg-dark-gray/40 border border-warm-yellow/10 shadow-lg shadow-black/5 dark:shadow-black/20 transition-all duration-300">
          <div className="flex items-center justify-between h-16 px-6">
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
          <div className="hidden lg:flex items-center space-x-2">
            {isHomePage ? (
              <>
                <a href="#how-it-works" className={`px-3 py-1.5 rounded-lg text-sm font-normal transition-all duration-200 ${
                  activeSection === 'how-it-works' 
                    ? 'text-warm-yellow bg-warm-yellow/10' 
                    : 'text-neutral-gray dark:text-cream hover:text-warm-yellow hover:bg-warm-yellow/5'
                }`}>
                  How It Works
                </a>
                <a href="#features" className={`px-3 py-1.5 rounded-lg text-sm font-normal transition-all duration-200 ${
                  activeSection === 'features' 
                    ? 'text-warm-yellow bg-warm-yellow/10' 
                    : 'text-neutral-gray dark:text-cream hover:text-warm-yellow hover:bg-warm-yellow/5'
                }`}>
                  Features
                </a>
                <a href="#showcase" className={`px-3 py-1.5 rounded-lg text-sm font-normal transition-all duration-200 ${
                  activeSection === 'showcase' 
                    ? 'text-warm-yellow bg-warm-yellow/10' 
                    : 'text-neutral-gray dark:text-cream hover:text-warm-yellow hover:bg-warm-yellow/5'
                }`}>
                  Showcase
                </a>
                <a href="#how-to-start" className={`px-3 py-1.5 rounded-lg text-sm font-normal transition-all duration-200 ${
                  activeSection === 'how-to-start' 
                    ? 'text-warm-yellow bg-warm-yellow/10' 
                    : 'text-neutral-gray dark:text-cream hover:text-warm-yellow hover:bg-warm-yellow/5'
                }`}>
                  Get Started
                </a>
                <a href="#team" className={`px-3 py-1.5 rounded-lg text-sm font-normal transition-all duration-200 ${
                  activeSection === 'team' 
                    ? 'text-warm-yellow bg-warm-yellow/10' 
                    : 'text-neutral-gray dark:text-cream hover:text-warm-yellow hover:bg-warm-yellow/5'
                }`}>
                  Team
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-gray dark:text-cream hover:text-warm-yellow hover:bg-warm-yellow/10 border border-transparent hover:border-warm-yellow/20 backdrop-blur-sm">
                  Home
                </Link>
              </>
            )}
            <Link 
              to="/waitlist" 
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                location.pathname === '/waitlist'
                  ? 'bg-warm-yellow text-neutral-gray'
                  : 'bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray hover:opacity-90'
              }`}
            >
              Join Waitlist
            </Link>
          </div>

          {/* Desktop: Dark Mode Toggle & GitHub */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-transparent hover:bg-warm-yellow/10 transition-all duration-200"
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
              className="p-2 rounded-lg bg-transparent hover:bg-warm-yellow/10 transition-all duration-200"
              aria-label="GitHub repository"
            >
              <Github className="h-5 w-5 text-neutral-gray dark:text-cream" />
            </a>
                        <a
              href="https://www.patreon.com/cw/thebagelproject"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-transparent hover:bg-warm-yellow/10 transition-all duration-200"
              aria-label="Support us on Patreon"
            >
              <img 
                src={darkMode ? "/sponsorship/patreon-darkmode.svg" : "/sponsorship/patreon-lightmode.svg"} 
                alt="Support us on Patreon" 
                className="h-5 w-5 opacity-80 hover:opacity-100 transition-opacity"
              />
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
          </div>

          {/* Mobile: Hamburger Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-transparent hover:bg-warm-yellow/10 transition-all duration-200"
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
              className={`p-2 rounded-lg transition-all duration-200 ${
                isMobileMenuOpen 
                  ? 'bg-warm-yellow/15 text-warm-yellow' 
                  : 'bg-transparent hover:bg-warm-yellow/10'
              }`}
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
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="mx-4 mb-4 rounded-xl backdrop-blur-xl bg-cream/50 dark:bg-dark-gray/50 border border-warm-yellow/10 shadow-lg shadow-black/5 dark:shadow-black/20 px-8 py-6">
            
            {/* Navigation Links */}
            <div className="space-y-4 mb-6">
              {isHomePage ? (
                <>
                  <a 
                    href="#how-it-works" 
                    onClick={closeMobileMenu}
                    className="block text-gray-800 dark:text-cream hover:text-warm-yellow transition-colors text-base font-medium py-2"
                  >
                    How It Works
                  </a>
                  <a 
                    href="#features" 
                    onClick={closeMobileMenu}
                    className="block text-gray-800 dark:text-cream hover:text-warm-yellow transition-colors text-base font-medium py-2"
                  >
                    Features
                  </a>
                  <a 
                    href="#showcase" 
                    onClick={closeMobileMenu}
                    className="block text-gray-800 dark:text-cream hover:text-warm-yellow transition-colors text-base font-medium py-2"
                  >
                    Showcase
                  </a>
                  <a 
                    href="#how-to-start" 
                    onClick={closeMobileMenu}
                    className="block text-gray-800 dark:text-cream hover:text-warm-yellow transition-colors text-base font-medium py-2"
                  >
                    Get Started
                  </a>
                  <a 
                    href="#team" 
                    onClick={closeMobileMenu}
                    className="block text-gray-800 dark:text-cream hover:text-warm-yellow transition-colors text-base font-medium py-2"
                  >
                    Team
                  </a>
                </>
              ) : (
                <Link 
                  to="/" 
                  onClick={closeMobileMenu}
                  className="block text-gray-800 dark:text-cream hover:text-warm-yellow transition-colors text-base font-medium py-2"
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
                className="flex items-center justify-center gap-3 w-full px-6 py-3 border-2 border-warm-yellow text-gray-800 dark:text-warm-yellow hover:bg-warm-yellow hover:text-gray-800 dark:hover:text-neutral-gray font-medium rounded-2xl transition-all duration-300"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
              
              <a
                href="https://buymeacoffee.com/thebagelproject"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-3 w-full px-6 py-3 border-2 border-warm-yellow text-gray-800 dark:text-warm-yellow hover:bg-warm-yellow hover:text-gray-800 dark:hover:text-neutral-gray font-medium rounded-2xl transition-all duration-300 group"
              >
                <img 
                  src="/sponsorship/bmc-logo.svg" 
                  alt="Buy Me a Coffee" 
                  className="h-5 w-5 brightness-0 saturate-100"
                  style={{
                    filter: darkMode ? 'brightness(0) saturate(100%) invert(84%) sepia(58%) saturate(2476%) hue-rotate(335deg) brightness(101%) contrast(101%)' : 'brightness(0) saturate(100%) invert(31%) sepia(11%) saturate(297%) hue-rotate(169deg) brightness(95%) contrast(86%)'
                  }}
                />
                Buy Me a Coffee
              </a>
              
              <a
                href="https://www.patreon.com/cw/thebagelproject"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-3 w-full px-6 py-3 border-2 border-warm-yellow text-gray-800 dark:text-warm-yellow hover:bg-warm-yellow hover:text-gray-800 dark:hover:text-neutral-gray font-medium rounded-2xl transition-all duration-300 group"
              >
                <img 
                  src={darkMode ? "/sponsorship/patreon-darkmode.svg" : "/sponsorship/patreon-lightmode.svg"} 
                  alt="Patreon" 
                  className="h-5 w-5 brightness-0 saturate-100"
                  style={{
                    filter: darkMode ? 'brightness(0) saturate(100%) invert(84%) sepia(58%) saturate(2476%) hue-rotate(335deg) brightness(101%) contrast(101%)' : 'brightness(0) saturate(100%) invert(31%) sepia(11%) saturate(297%) hue-rotate(169deg) brightness(95%) contrast(86%)'
                  }}
                />
                Support on Patreon
              </a>
            </div>

            {/* Decorative Element */}
            <div className="mt-6 pt-4 border-t border-neutral-gray/20 dark:border-cream/20">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-1 bg-gradient-to-r from-warm-yellow to-golden-brown rounded-full opacity-30"></div>
                <p className="text-xs text-gray-600 dark:text-cream/60 font-medium">
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
