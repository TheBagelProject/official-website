import React from 'react';
import { Github, BookOpen, MessageCircle, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "#how-it-works" },
        { name: "Showcase", href: "#showcase" },
      ]
    },
    {
      title: "Community",
      links: [
        { name: "GitHub", href: "https://github.com/TheBagelProject", external: true },
        { name: "Discussions", href: "https://github.com/TheBagelProject/bagel/discussions", external: true },
        { name: "Issues", href: "https://github.com/TheBagelProject/bagel/issues", external: true },
      ]
    }
    // {
    //   title: "Resources", 
    //   links: [
    //     { name: "Documentation", href: "https://docs.bagel.dev", external: true },
    //     { name: "API Reference", href: "https://docs.bagel.dev/api", external: true },
    //     { name: "Tutorials", href: "https://docs.bagel.dev/tutorials", external: true },
    //   ]
    // }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-dark-gray to-dark-gray/95 text-cream border-t border-warm-yellow/20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 rounded-full bg-warm-yellow transform rotate-45"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 rounded-full bg-golden-brown transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-warm-yellow transform rotate-90"></div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center">
              <img 
                src="/Logo/Bagel-v1.0.1-DarkMode.png" 
                alt="Bagel Logo" 
                className="h-10 w-auto hover:scale-105 transition-transform duration-200"
              />
            </div>
            
            <div className="space-y-4">
              <p className="text-cream/80 leading-relaxed text-lg">
                Making infrastructure deployment as simple and delightful as a fresh-baked bagel.
              </p>
              <p className="text-cream/60 text-sm">
                Open-source, self-service platform for seamless cloud infrastructure provisioning with Terraform.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-warm-yellow font-medium mb-4 text-sm uppercase tracking-wider">Connect with us</h4>
              <div className="flex items-center space-x-3">
                <a
                  href="https://github.com/TheBagelProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-cream/5 hover:bg-warm-yellow/10 border border-cream/10 hover:border-warm-yellow/20 transition-all duration-200 group"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-cream/70 group-hover:text-warm-yellow transition-colors" />
                </a>
                <a
                  href="https://docs.bagel.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-cream/5 hover:bg-warm-yellow/10 border border-cream/10 hover:border-warm-yellow/20 transition-all duration-200 group"
                  aria-label="Documentation"
                >
                  <BookOpen className="h-5 w-5 text-cream/70 group-hover:text-warm-yellow transition-colors" />
                </a>
                <a
                  href="https://github.com/TheBagelProject/bagel/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-cream/5 hover:bg-warm-yellow/10 border border-cream/10 hover:border-warm-yellow/20 transition-all duration-200 group"
                  aria-label="Community"
                >
                  <MessageCircle className="h-5 w-5 text-cream/70 group-hover:text-warm-yellow transition-colors" />
                </a>
                <a
                  href="mailto:hello@bagel.dev"
                  className="p-3 rounded-xl bg-cream/5 hover:bg-warm-yellow/10 border border-cream/10 hover:border-warm-yellow/20 transition-all duration-200 group"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-cream/70 group-hover:text-warm-yellow transition-colors" />
                </a>
                <a
                  href="https://buymeacoffee.com/thebagelproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-90 transition-all duration-200"
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
                  className="p-3 rounded-xl bg-cream/5 hover:bg-warm-yellow/10 border border-cream/10 hover:border-warm-yellow/20 transition-all duration-200 group"
                  aria-label="Support us on Patreon"
                >
                  <img 
                    src="/sponsorship/patreon-darkmode.svg" 
                    alt="Support us on Patreon" 
                    className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-warm-yellow font-semibold text-sm uppercase tracking-wider mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="text-cream/70 hover:text-warm-yellow transition-all duration-200 flex items-center gap-2 group py-1 hover:translate-x-1"
                    >
                      <span className="w-1 h-1 bg-warm-yellow/50 rounded-full group-hover:bg-warm-yellow transition-colors"></span>
                      {link.name}
                      {link.external && (
                        <span className="text-xs opacity-40 group-hover:opacity-80 transition-opacity ml-1">↗</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative mt-16 pt-8">
          {/* Decorative divider */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-warm-yellow to-transparent"></div>
          
          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
              <div className="text-cream/70 text-sm">
                <div className="mb-1 sm:mb-0 sm:inline">© {currentYear} Bagel.</div>
                <div className="flex items-center justify-center sm:inline-flex gap-1 sm:ml-2">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                  <span>for the open source community</span>
                </div>
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm">
              <a href="https://bagel.dev/privacy" className="text-cream/60 hover:text-warm-yellow transition-colors duration-200 hover:underline">
                Privacy Policy
              </a>
              <span className="text-cream/30">•</span>
              <a href="https://bagel.dev/terms" className="text-cream/60 hover:text-warm-yellow transition-colors duration-200 hover:underline">
                Terms of Service
              </a>
              <span className="text-cream/30">•</span>
              <a href="https://github.com/TheBagelProject/bagel/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-warm-yellow transition-colors duration-200 hover:underline">
                Code of Conduct
              </a>
            </div>
          </div>

          {/* Breadshop Pattern */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 text-cream/40 text-sm bg-cream/5 px-6 py-3 rounded-full border border-cream/10">
              <div className="w-2 h-2 bg-warm-yellow/50 rounded-full animate-pulse"></div>
              <span className="font-medium">Freshly baked infrastructure</span>
              <div className="w-2 h-2 bg-golden-brown/50 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-warm-yellow via-golden-brown to-warm-yellow"></div>
    </footer>
  );
};

export default Footer;
