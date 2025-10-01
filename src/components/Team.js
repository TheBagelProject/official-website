import React from 'react';
import { Github, Linkedin, Coffee } from 'lucide-react';

// Behance Icon Component using custom SVG file
const BehanceIcon = ({ className }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24"
  >
    <path 
      fill="currentColor" 
      d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
    />
  </svg>
);

// Hashnode Icon Component
const HashnodeIcon = ({ className }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 48 48"
  >
    <path 
      fill="currentColor" 
      d="M42.164,17.126l-11.29,-11.291c-3.781,-3.781 -9.967,-3.781 -13.748,0l-11.29,11.291c-3.781,3.781 -3.781,9.967 0,13.748l11.291,11.291c3.781,3.781 9.967,3.781 13.748,0l11.291,-11.291c3.779,-3.781 3.779,-9.967 -0.002,-13.748zM24,31c-3.866,0 -7,-3.134 -7,-7c0,-3.866 3.134,-7 7,-7c3.866,0 7,3.134 7,7c0,3.866 -3.134,7 -7,7z"
    />
  </svg>
);

// X (Twitter) Icon Component
const XIcon = ({ className }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 50 50"
  >
    <path 
      fill="currentColor" 
      d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
    />
  </svg>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Aftab S",
      role: "Creator",
      bio: "DevOps chef baking infrastructure magic for everyone. Loves sprinkling open-source goodness and building a tasty community.",
      image: "/team/member1.jpg",
      github: "https://github.com/aftab-s",
      linkedin: "https://www.linkedin.com/in/aftab-s/",
      hashnode: "https://aftabs.hashnode.dev/",
      x: "https://x.com/aftab_mehrab"
    },
    {
      name: "Sangeeth Promod",
      role: "Contributor",
      bio: "Head of Engineering who layers elegant code like a perfectly toasted bagel. Keeps the backend fresh and smooth.",
      image: "/team/member2.jpg",
      github: "https://github.com/sangeethpromod",
      linkedin: "https://www.linkedin.com/in/sangeeth-promod-68b5371a9/"
    },
    {
      name: "Akhil Sasi",
      role: "Contributor",
      bio: "Lead Designer spreading the cream cheese of UI/UX over every interface. Believes infrastructure should look as good as it works.",
      image: "/team/member3.jpg",
      github: "https://github.com/akhilsasic",
      linkedin: "https://www.linkedin.com/in/akhil-sasi-642748200/",
      behance: "https://www.behance.net/akilcs"
    },
    {
      name: "Reyvanth M",
      role: "Contributor",
      bio: "Frontend wizard who toasts pixels to perfection and layers clean APIs like a bagel with just the right spread.",
      image: "/team/member4.jpg",
      github: "https://github.com/reyvanthm",
      linkedin: "https://www.linkedin.com/in/reyvanth-m/"
    },
    {
      name: "Rahul MS",
      role: "Contributor",
      bio: "Full-stack baker kneading backend and frontend together into a smooth, robust experience. Loves a fresh deployment every morning.",
      image: "/team/member5.jpg",
      github: "https://github.com/msrahul6111",
      linkedin: "https://www.linkedin.com/in/msrahul/"
    },
    {
      name: "Sahil Titto",
      role: "Contributor",
      bio: "Frontend developer spreading joy one interface at a time. Always ensures the app looks as good as your favorite bagel.",
      image: "/team/member6.jpg",
      github: "https://github.com/st1120",
      linkedin: "https://www.linkedin.com/in/sahil-titto/"
    }
  ];

  return (
    <section id="team" className="py-20 px-8 sm:px-12 lg:px-16 relative overflow-hidden">
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
            <Coffee className="h-6 w-6 text-warm-yellow" />
            <span className="text-warm-yellow font-medium">Meet the Bakers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-gray dark:text-cream mb-6">
            The Team Behind Bagel
          </h2>
          <p className="text-xl text-neutral-gray/70 dark:text-cream/70 max-w-3xl mx-auto">
            Meet the artisans who craft every feature with care, bringing together diverse talents to make infrastructure deployment delightful for everyone
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-yellow/10 to-golden-brown/5 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/60 dark:bg-neutral-gray/20 backdrop-blur-sm rounded-2xl p-6 border border-warm-yellow/10 hover:border-warm-yellow/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl">
                
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-warm-yellow/20 to-golden-brown/20 border-4 border-warm-yellow/30 group-hover:border-warm-yellow/50 transition-all duration-300 overflow-hidden">
                    {/* Placeholder for monochrome image */}
                    <div className="w-full h-full bg-gradient-to-br from-neutral-gray/20 to-neutral-gray/40 dark:from-cream/20 dark:to-cream/40 flex items-center justify-center">
                      <div className="text-4xl font-bold text-neutral-gray/50 dark:text-cream/50">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    {/* When you add actual images, replace the div above with:
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    */}
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-warm-yellow rounded-full opacity-30 group-hover:opacity-60 transition-opacity"></div>
                </div>

                {/* Member Info */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-semibold text-neutral-gray dark:text-cream group-hover:text-warm-yellow transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-warm-yellow font-medium text-sm">
                    {member.role}
                  </p>
                  <p className="text-neutral-gray/70 dark:text-cream/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 mt-6">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors group/social"
                    >
                      <Github className="h-4 w-4 text-neutral-gray/60 dark:text-cream/60 group-hover/social:text-warm-yellow transition-colors" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors group/social"
                    >
                      <Linkedin className="h-4 w-4 text-neutral-gray/60 dark:text-cream/60 group-hover/social:text-warm-yellow transition-colors" />
                    </a>
                  )}
                  {member.behance && (
                    <a
                      href={member.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors group/social"
                    >
                      <BehanceIcon className="h-4 w-4 text-neutral-gray/60 dark:text-cream/60 group-hover/social:text-warm-yellow transition-colors" />
                    </a>
                  )}
                  {member.hashnode && (
                    <a
                      href={member.hashnode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors group/social"
                    >
                      <HashnodeIcon className="h-4 w-4 text-neutral-gray/60 dark:text-cream/60 group-hover/social:text-warm-yellow transition-colors" />
                    </a>
                  )}
                  {member.x && (
                    <a
                      href={member.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors group/social"
                    >
                      <XIcon className="h-4 w-4 text-neutral-gray/60 dark:text-cream/60 group-hover/social:text-warm-yellow transition-colors" />
                    </a>
                  )}
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-warm-yellow/70">
            <span className="text-sm">Crafted with passion, served with pride</span>
            <Coffee className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;