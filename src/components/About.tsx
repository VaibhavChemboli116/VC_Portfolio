import React, { useEffect, useRef } from 'react';
import { Code, Lightbulb, Target, Zap } from 'lucide-react';
import Tile from './Tile';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            if (entry.target === highlightsRef.current) {
              const highlights = entry.target.querySelectorAll('.highlight-item');
              highlights.forEach((highlight, index) => {
                setTimeout(() => {
                  highlight.classList.add('animate-fade-in-up');
                }, index * 200);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    [aboutRef.current, highlightsRef.current].forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'AI Development',
      description: 'Delved into the nuances of AI model behavior by building, tweaking, and benchmarking countless architectures.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Research & Innovation',
      description: 'Documented project outcomes and lessons learned in academic and technical papers.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Approaching tough AI tasks by blending practical solutions with solid reasoning.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Model Optimization',
      description: 'Optimizing neural networks for performance, efficiency, and real-world deployment.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={aboutRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Genius, AI engineer, nice guy. Known to solve puzzles and invent a few along the way.
          </p>
        </div>

        <div 
          ref={highlightsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center mx-auto max-w-3xl"
        >
          {highlights.map((highlight, index) => (
            <Tile key={index} className="highlight-item mb-8 h-full">
              <div className="flex flex-col items-start justify-center min-h-[200px] h-full">
                <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-500 transform group-hover:scale-110">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </div>
            </Tile>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;