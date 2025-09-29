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
        { name: "GitHub", href: "https://github.com/bagel-org/bagel", external: true },
        { name: "Discussions", href: "https://github.com/bagel-org/bagel/discussions", external: true },
        { name: "Issues", href: "https://github.com/bagel-org/bagel/issues", external: true },
      ]
    },
    {
      title: "Resources", 
      links: [
        { name: "Documentation", href: "https://docs.bagel.dev", external: true },
        { name: "API Reference", href: "https://docs.bagel.dev/api", external: true },
        { name: "Tutorials", href: "https://docs.bagel.dev/tutorials", external: true },
      ]
    }
  ];

  return (
    <footer className="bg-neutral-gray dark:bg-dark-gray text-cream border-t border-neutral-gray/20 dark:border-cream/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center">
              <img 
                src="/Logo/Bagel-v1.0.1-DarkMode.png" 
                alt="Bagel Logo" 
                className="h-8 w-auto"
              />
            </div>
            
            <p className="text-cream/70 leading-relaxed">
              Making infrastructure deployment as simple and delightful as a fresh-baked bagel.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/bagel-org/bagel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-warm-yellow/10 transition-colors group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-cream/70 group-hover:text-warm-yellow transition-colors" />
              </a>
              <a
                href="https://docs.bagel.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-warm-yellow/10 transition-colors group"
                aria-label="Documentation"
              >
                <BookOpen className="h-5 w-5 text-cream/70 group-hover:text-warm-yellow transition-colors" />
              </a>
              <a
                href="https://github.com/bagel-org/bagel/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-warm-yellow/10 transition-colors group"
                aria-label="Community"
              >
                <MessageCircle className="h-5 w-5 text-cream/70 group-hover:text-warm-yellow transition-colors" />
              </a>
              <a
                href="mailto:hello@bagel.dev"
                className="p-2 rounded-lg hover:bg-warm-yellow/10 transition-colors group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-cream/70 group-hover:text-warm-yellow transition-colors" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-semibold text-cream">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      className="text-cream/70 hover:text-warm-yellow transition-colors flex items-center gap-2 group"
                    >
                      {link.name}
                      {link.external && (
                        <span className="text-xs opacity-50 group-hover:opacity-70 transition-opacity">↗</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 mt-12 pt-8">
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-cream/70 text-sm">
              <span>© {currentYear} Bagel.</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>for the open source community</span>
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="https://bagel.dev/privacy" className="text-cream/70 hover:text-warm-yellow transition-colors">
                Privacy Policy
              </a>
              <a href="https://bagel.dev/terms" className="text-cream/70 hover:text-warm-yellow transition-colors">
                Terms of Service
              </a>
              <a href="https://github.com/bagel-org/bagel/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-warm-yellow transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>

          {/* Breadshop Pattern */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-cream/30 text-xs">
              <div className="w-2 h-2 bg-warm-yellow/30 rounded-full"></div>
              <span>Freshly baked infrastructure, served daily</span>
              <div className="w-2 h-2 bg-golden-brown/30 rounded-full"></div>
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
