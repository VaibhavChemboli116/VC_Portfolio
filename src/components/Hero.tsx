import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

// Custom ResearchGate icon component
const ResearchGateIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`${className} flex items-center justify-center w-6 h-6 font-bold text-sm`}>
    R<sup className="text-xs">G</sup>
  </div>
);

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [displayText, setDisplayText] = useState('');
  const [displayDescription, setDisplayDescription] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const subtitle = "AI Engineer";
  const description = "Passionate about creating innovative AI solutions at the intersection of technology and research. Specializing in machine learning, deep learning, AI system optimization and context engineering.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typing animation for subtitle
  useEffect(() => {
    if (currentIndex < subtitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(subtitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100); // Speed of typing

      return () => clearTimeout(timeout);
    } else {
      // Start typing description after subtitle is complete
      setTimeout(() => {
        setIsTypingComplete(true);
      }, 500);
    }
  }, [currentIndex, subtitle]);

  // Typing animation for description
  useEffect(() => {
    if (isTypingComplete && descriptionIndex < description.length) {
      const timeout = setTimeout(() => {
        setDisplayDescription(description.slice(0, descriptionIndex + 1));
        setDescriptionIndex(descriptionIndex + 1);
      }, 30); // Faster typing for description

      return () => clearTimeout(timeout);
    }
  }, [descriptionIndex, description, isTypingComplete]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden opacity-0 translate-y-8 transition-all duration-1000 ease-out"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-yellow-500/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 hero-text-container">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 transform transition-all duration-1000 delay-300 text-render-fix">
            <span className="gradient-text-bing-fix">
              Vaibhav Chemboli
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light transform transition-all duration-1000 delay-500 text-render-fix">
            {displayText}
            {currentIndex < subtitle.length && (
              <span className="animate-pulse text-white">_</span>
            )}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-700 text-render-fix" style={{ fontSize: '22px' }}>
            {displayDescription}
            {isTypingComplete && descriptionIndex < description.length && (
              <span className="animate-pulse text-white">_</span>
            )}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 transform transition-all duration-1000 delay-900">
          <a href="https://github.com/VaibhavChemboli116" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-500 group hover:scale-110">
            <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-chemboli/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-500 group hover:scale-110">
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
          </a>
          <a href="mailto:vchembol@mail.yu.edu" className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-500 group hover:scale-110">
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
          </a>
          <a href="https://www.researchgate.net/profile/Vaibhav-Chemboli?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-green-400 hover:bg-green-400/10 transition-all duration-500 group hover:scale-110">
            <ResearchGateIcon className="text-gray-400 group-hover:text-green-400 transition-colors duration-300" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 transform transition-all duration-1000 delay-1100">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-400 hover:text-white transition-all duration-500 transform hover:scale-125"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;