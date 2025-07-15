import React, { useRef, useEffect, useState } from 'react';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import Tile from './Tile';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'AI/ML Intern',
      company: 'KReative Integrations LLC',
      companyUrl: 'https://www.kreativeintegrations.com/',
      location: 'Remote, Internship',
      period: 'Jun 2024 - Dec 2024',
      type: 'Internship',
      description: 'Built two RAG-based medical chatbots: one using OpenAI Assistant API and another with LLaMA2-7B, Pinecone, and Gale Encyclopedia for domain-specific reasoning.',
      achievements: [
        'Created an medical chatbot utilizing the RAG framework and the LLaMA2 model for natural language processing. The LLaMA Index was used for efficient query retrieval, while Pinecone was used for vector storage and retrieval. I used the Gale series of medical books as the knowledge base and deployed the chatbot using Gradio.',
        'Improved the chatbot by using the OpenAI Assistant API and created a custom function that allows the user to ask data-driven queries. Built and implemented a comprehensive end-to-end solution with Flask as the frontend, resulting in a fully working, robust medical chatbot.',
        'Designed database and metadata management with SQLite; optimized retrieval pipelines for both models.',
        'Contributed to system architecture design, UI/UX planning for web/mobile apps, and conducted technical interviews for full-stack and AI roles.',
        'Edited marketing videos and played a key role in developing the MVP across tech, design, and deployment stages.',
        'I got a chance to enhance my skills and keep a learning approach and explore other dimensions like marketing and talent acquisition where I was involved with a team of 5 members contributing to this startup which sums up my experience.'
      ],
      technologies: ['RAG', 'LangChain', 'LlamaIndex', 'Azure AI Studio', 'AI Agents', 'Assistant API OpenAI', 'Chat Completion API', 'Flask', 'Gradio', 'Pinecone', 'ChromaDB', 'HTML', 'CSS', 'JS']
    },
    {
      title: 'Graduate Teaching Assistant',
      company: 'Yeshiva University',
      companyUrl: 'https://www.yu.edu/katz',
      location: 'Lexington Av, Manhattan, NYC, NY',
      period: 'Jan 2025 - May 2025',
      type: 'Part-Time',
      description: 'Teaching assistant for the Neural Networks & Deep Learning course.',
      achievements: [
        'Conducted instructional sessions and tutorials to supplement core course lectures, ensuring students gained a strong foundational understanding of neural networks and deep learning concepts.',
        'Evaluated and graded student assignment submissions, providing constructive feedback to support learning and improvement.',
        'Offered individualized guidance and support by addressing students’ queries and clarifying complex topics, fostering an engaging and effective learning environment.'
      ],
      technologies: ['Neural Networks', 'Deep Learning', 'Python', 'PyTorch']
    },
    {
      title: 'Peer Reviewer',
      company: 'Springer Nature in India',
      companyUrl: 'https://group.springernature.com/gp/group',
      location: 'Remote',
      period: 'May 2023 - July 2023',
      type: 'Volunteer',
      //description: 'Reviewed and provided constructive feedback on research papers for 3rd International Conference on Machine Learning and Big Data Analytics (ICMLBDA2023) conference hosted by National Institute of Technology(NIT), Arunachal Pradesh, India.',
      achievements: [
        'Reviewed and provided constructive feedback on research papers for 3rd International Conference on Machine Learning and Big Data Analytics (ICMLBDA2023) conference hosted by National Institute of Technology(NIT), Arunachal Pradesh.',
        'Contributed to maintaining high academic standards by assessing submissions for publication.',
        'Enhanced understanding of the peer review process and emerging research in AI.'
      ],
      technologies: []
    },
    {
      title: 'Machine Learning Intern',
      company: '1stop-ai',
      companyUrl: 'https://www.1stop.ai/',
      location: 'Remote',
      period: 'May 2022 - Aug 2022',
      type: 'Internship',
      //description: 'Developed Hate Speech Detection model using Kaggle\'s \'Dynamically Generated Hate Speech Dataset\' which has 40k data points, utilizing 80% of the data for training.',
      achievements: [
        'Developed Hate Speech Detection model using Kaggle\'s \'Dynamically Generated Hate Speech Dataset\' which has 40k data points, utilizing 80% of the data for training.',
        'Employed algorithms such as small BERT, LSTM, Decision Trees, Naive Bayes, and Logistic Regression, where small BERT model demonstrated superior testing accuracy compared to other models.',
        'Additionally, enhanced a restaurant review classification dataset by preprocessing with NLP techniques and NLTK, reaching 97% classification accuracy via the small BERT model.'
      ],
      technologies: ['BERT', 'LSTM', 'Decision Trees', 'Naive Bayes', 'Logistic Regression', 'NLP', 'NLTK', 'Python', 'Machine Learning']
    }
  ];

  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleTiles, setVisibleTiles] = useState<boolean[]>(Array(experiences.length).fill(false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    experiences.forEach((_, i) => {
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
  }, [experiences.length]);

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Turned business requirements into working software, sometimes even before the meeting ended. Still waiting for someone to invent the 28-hour day.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
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
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-xl text-cyan-400 mb-2 flex items-center gap-2">
                        {exp.companyUrl ? (
                          <a 
                            href={exp.companyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2"
                          >
                            {exp.company}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <>
                            {exp.company}
                            <ExternalLink className="w-4 h-4" />
                          </>
                        )}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Responsibilities & Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.technologies.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-md text-gray-300 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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

export default Experience;