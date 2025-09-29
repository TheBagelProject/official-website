import React, { useState } from 'react';
import { Download, Copy, CheckCircle, Terminal, Play } from 'lucide-react';

const HowToGetStarted = () => {
  const [copiedCommand, setCopiedCommand] = useState(false);

  const dockerCommand = 'docker-compose up -d --remove-orphans';

  const dockerComposeContent = `version: '3.8'
services:
  bagel-api:
    image: bagel/api:latest
    ports:
      - "8080:8080"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://bagel:bagel@postgres:5432/bagel
    depends_on:
      - postgres
    restart: unless-stopped

  bagel-ui:
    image: bagel/ui:latest
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://localhost:8080
    restart: unless-stopped

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=bagel
      - POSTGRES_USER=bagel
      - POSTGRES_PASSWORD=bagel
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    restart: unless-stopped

volumes:
  postgres_data:`;

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(true);
      setTimeout(() => setCopiedCommand(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const downloadDockerCompose = () => {
    const element = document.createElement('a');
    const file = new Blob([dockerComposeContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'docker-compose.yml';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const steps = [
    {
      number: "01",
      title: "Download Docker Compose",
      description: "Get the docker-compose.yml file to set up your Bagel environment",
      action: "download",
      icon: <Download className="h-6 w-6" />
    },
    {
      number: "02", 
      title: "Run the Command",
      description: "Execute the docker-compose command in your terminal",
      action: "command",
      icon: <Terminal className="h-6 w-6" />
    },
    {
      number: "03",
      title: "You're Ready!",
      description: "Your Bagel environment is now running and ready to use",
      action: "complete",
      icon: <Play className="h-6 w-6" />
    }
  ];

  return (
    <section id="how-to-start" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <Terminal className="h-6 w-6 text-warm-yellow" />
            <span className="text-warm-yellow font-medium">Quick Setup</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-gray dark:text-cream mb-6">
            How to Get Started
          </h2>
          <p className="text-xl text-neutral-gray/70 dark:text-cream/70 max-w-3xl mx-auto">
            Get Bagel running in less than 5 minutes with our simple setup process. No complex configuration required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/60 dark:bg-neutral-gray/40 backdrop-blur-sm rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-neutral-gray/5 dark:border-cream/5 h-full">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray font-bold text-lg rounded-full mb-6">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-2xl bg-warm-yellow/10 text-warm-yellow">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-neutral-gray dark:text-cream mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-gray/70 dark:text-cream/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Download Card */}
          <div className="bg-white/70 dark:bg-neutral-gray/50 backdrop-blur-sm rounded-3xl p-8 border border-neutral-gray/10 dark:border-cream/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-warm-yellow/10">
                <Download className="h-6 w-6 text-warm-yellow" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-gray dark:text-cream">
                Step 1: Download Configuration
              </h3>
            </div>
            
            <p className="text-neutral-gray/70 dark:text-cream/70 mb-6">
              Download the docker-compose.yml file that contains all the necessary services and configurations for running Bagel.
            </p>

            <button
              onClick={downloadDockerCompose}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-warm-yellow to-golden-brown text-neutral-gray px-6 py-3 rounded-2xl font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="h-5 w-5" />
              Download docker-compose.yml
            </button>
          </div>

          {/* Command Card */}
          <div className="bg-white/70 dark:bg-neutral-gray/50 backdrop-blur-sm rounded-3xl p-8 border border-neutral-gray/10 dark:border-cream/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-warm-yellow/10">
                <Terminal className="h-6 w-6 text-warm-yellow" />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-gray dark:text-cream">
                Step 2: Run Command
              </h3>
            </div>
            
            <p className="text-neutral-gray/70 dark:text-cream/70 mb-6">
              Navigate to the directory containing the docker-compose.yml file and run this command:
            </p>

            <div className="bg-neutral-gray/10 dark:bg-dark-gray/50 rounded-2xl p-4 mb-4 font-mono text-sm">
              <div className="flex items-center justify-between">
                <code className="text-neutral-gray dark:text-cream flex-1">
                  {dockerCommand}
                </code>
                <button
                  onClick={() => copyToClipboard(dockerCommand)}
                  className="ml-4 p-2 rounded-lg hover:bg-warm-yellow/10 transition-colors group"
                  title="Copy to clipboard"
                >
                  {copiedCommand ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Copy className="h-5 w-5 text-neutral-gray/60 dark:text-cream/60 group-hover:text-warm-yellow" />
                  )}
                </button>
              </div>
            </div>

            {copiedCommand && (
              <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Command copied to clipboard!
              </p>
            )}
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-gradient-to-r from-warm-yellow/10 to-golden-brown/10 dark:from-warm-yellow/5 dark:to-golden-brown/5 rounded-3xl p-8 border border-warm-yellow/20">
            <Play className="h-12 w-12 text-warm-yellow mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-neutral-gray dark:text-cream mb-4">
              That's it! 🎉
            </h3>
            <p className="text-lg text-neutral-gray/70 dark:text-cream/70 max-w-2xl mx-auto">
              Your Bagel environment will be ready in a few moments. 
              Access the dashboard at <code className="bg-neutral-gray/10 dark:bg-dark-gray/50 px-2 py-1 rounded text-warm-yellow">localhost:3000</code> 
              and start deploying your infrastructure with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGetStarted;