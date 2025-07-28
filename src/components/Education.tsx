import React, { useRef, useEffect, useState } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import Tile from './Tile';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Master\'s in Artificial Intelligence',
      institution: 'Yeshiva University',
      period: '2024 - 2026',
      gpa: '3.7/4.0',
      description: '',
      achievements: []
    },
    {
      degree: 'Bachelor\'s in Computer Science & Engineering',
      institution: 'GITAM University',
      period: '2019 - 2023',
      gpa: '3.58/4.0',
      description: '',
      achievements: []
    }
  ];

  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleTiles, setVisibleTiles] = useState<boolean[]>(Array(education.length).fill(false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    education.forEach((_, i) => {
      if (!tileRefs.current[i]) return;
      observers[i] = new window.IntersectionObserver(
        ([entry]) => {
          setVisibleTiles((prev) => {
            const updated = [...prev];
            updated[i] = entry.isIntersecting;
            return updated;
          });
        },
        { threshold: 0.2 }
      );
      observers[i].observe(tileRefs.current[i]!);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, [education.length]);

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Filter passing through space and time, learning features. Did undergrad before LLMs were cool. Doing my master's while AI agents still can't write bug-free code, and everyone's debating if they'll rule the world.
          </p>
        </div>

        <div className="space-y-8">
          {education.slice(0, 2).map((edu, index) => (
            <div
              key={index}
              ref={el => tileRefs.current[index] = el}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <Tile
                className={`mb-8 transition-all duration-700 ease-out transform
                  ${visibleTiles[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
                  `}
              >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-xl text-purple-400 mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {edu.achievements.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Tile>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;