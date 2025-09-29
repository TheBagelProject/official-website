import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Showcase from './components/Showcase';
import HowToGetStarted from './components/HowToGetStarted';
import WaitlistForm from './components/WaitlistForm';
import Team from './components/Team';
import OpenSource from './components/OpenSource';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    const isDarkMode = storedDarkMode !== null ? storedDarkMode === 'true' : true;
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-dark-gray text-cream' 
        : 'bg-cream text-neutral-gray'
    }`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <HowItWorks />
      <Features />
      <Showcase />
      <HowToGetStarted />
      <WaitlistForm />
      <Team />
      <OpenSource />
      <Footer />
    </div>
  );
}

export default App;