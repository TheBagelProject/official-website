import React from 'react';
import { Github, Linkedin, Coffee } from 'lucide-react';

const Team = () => {
  // Placeholder team members - you can replace with actual data
  const teamMembers = [
    {
      name: "Aftab S",
      role: "Founder & CEO",
      bio: "Former DevOps engineer who dreamed of making infrastructure accessible to everyone.",
      image: "/team/member1.jpg", // You'll add actual images here
      github: "https://github.com/alexchen",
      linkedin: "https://linkedin.com/in/alexchen"
    },
    {
      name: "Sangeeth Promod",
      role: "Head of Engineering",
      bio: "Full-stack developer with a passion for elegant solutions and beautiful code.",
      image: "/team/member2.jpg",
      github: "https://github.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    {
      name: "Akhil Sasi",
      role: "Lead Designer",
      bio: "UI/UX designer who believes infrastructure tools should be as beautiful as they are functional.",
      image: "/team/member3.jpg",
      github: "https://github.com/marcusrodriguez",
      linkedin: "https://linkedin.com/in/marcusrodriguez"
    },
    {
      name: "Reyvanth",
      role: "Frontend Developer",
      bio: "Frontend developer with a love for clean APIs and robust system architecture.",
      image: "/team/member4.jpg",
      github: "https://github.com/emilyzhang",
      linkedin: "https://linkedin.com/in/emilyzhang"
    },
    {
      name: "Rahul MS",
      role: "Full-Stack Engineer", 
      bio: "Full-stack developer with a love for clean APIs and robust system architecture.",
      image: "/team/member5.jpg",
      github: "https://github.com/davidkim",
      linkedin: "https://linkedin.com/in/davidkim"
    },
    {
      name: "Sahil Titto",
      role: "Frontend Developer",
      bio: "Frontend developer with a love for clean APIs and robust system architecture.",
      image: "/team/member6.jpg",
      github: "https://github.com/lunamartinez",
      linkedin: "https://linkedin.com/in/lunamartinez"
    }
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
              <div className="bg-white/60 dark:bg-neutral-gray/40 backdrop-blur-sm rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-102 border border-neutral-gray/5 dark:border-cream/5">
                
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
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors group/social"
                  >
                    <Github className="h-4 w-4 text-neutral-gray/60 dark:text-cream/60 group-hover/social:text-warm-yellow transition-colors" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-warm-yellow/10 transition-colors group/social"
                  >
                    <Linkedin className="h-4 w-4 text-neutral-gray/60 dark:text-cream/60 group-hover/social:text-warm-yellow transition-colors" />
                  </a>
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