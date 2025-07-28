import React, { useRef, useEffect, useState } from 'react';
import { BookOpen, Users, Calendar, ExternalLink, Award } from 'lucide-react';
import Tile from './Tile';

const Publications: React.FC = () => {
  const publications = [
    {
      title: 'Session-Based News Recommendation System',
      authors: ['V. Vemani', 'Vaibhav Chemboli', 'Pusarla Sindhu'],
      venue: 'Advances in Machine Learning and Big Data Analytics I (ICMLBDA 2023)',
      year: '2023',
      type: 'Conference Paper',
      status: 'Published',
      indexing: 'Springer Indexed',
      abstract: 'Developed a session-aware news recommendation system utilizing XLNet with causal language modeling and attention-based sequence processing. The system was trained and evaluated on the G1 news dataset, achieving a Recall at 20 of 0.34 and an NDCG at 20 of 0.16. The approach specifically modeled temporal dynamics and short-term user behavior to deliver highly relevant recommendations in real time.',
      citations: 0,
      links: {
        paper: 'https://link.springer.com/chapter/10.1007/978-3-031-51338-1_28'
      },
      awards: []
    },
    {
      title: 'Conditional DCGAN for Targeted Generation of MNIST Handwritten Digits',
      authors: ['Samuel Vasamsetti', 'Vaibhav Chemboli', 'G. S. S. Shreyas', 'Srikanth Thota'],
      venue: 'Accelerating Discoveries in Data Science and Artificial Intelligence I (ICDSAI 2023)',
      year: '2023',
      type: 'Conference Paper',
      status: 'Published',
      indexing: 'Springer Indexed',
      abstract: 'Constructed a cDCGAN model to generate high-quality handwritten digit images conditioned on specific labels using the MNIST dataset. Conducted extensive hyperparameter tuning (e.g., epochs, batch size, optimizers, activation functions) and achieved a discriminator accuracy of 94%, outperforming several other GAN models.',
      citations: 0,
      links: {
        paper: 'https://link.springer.com/chapter/10.1007/978-3-031-51167-7_23',
        certificate: 'https://www.linkedin.com/in/vaibhav-chemboli/overlay/1729728787073/single-media-viewer/?profileId=ACoAADSZewkBD2GtJHEWfORmvgNO-cUen403Qk0'
      },
      awards: ['Best Student Paper Award']
    },
    {
      title: 'Comparative Performance Analysis of Deep Learning Models for Lung Disease Prediction Using Chest X-Ray Images',
      authors: ['Samuel Vasamsetti', 'Vaibhav Chemboli', 'G.S.S. Shreyas', 'Srikanth Thota'],
      venue: '2023 International Conference on Inventive Computation Technologies (ICICT)',
      year: '2023',
      type: 'Conference Paper',
      status: 'Published',
      indexing: 'IEEE Indexed',
      abstract: 'Created a custom CNN-BiLSTM model to classify chest X-ray images into four categories: COVID-19, Pneumonia, Tuberculosis, and Normal. Outperformed several pre-trained models including EfficientNetB7 and VGG16, achieving 97% accuracy with high precision and recall across all classes. Integrated Grad-CAM for model explainability and clinical validation.',
      citations: 0,
      links: {
        paper: 'https://ieeexplore.ieee.org/document/10134132'
      },
      awards: []
    }
  ];

  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleTiles, setVisibleTiles] = useState<boolean[]>(Array(publications.length).fill(false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    publications.forEach((_, i) => {
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
  }, [publications.length]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Under Review':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'In Preparation':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="publications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
              Publications
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Published thoughts that survived peer review, and my own second guesses.
          </p>
        </div>

        <div className="grid gap-8">
          {publications.slice(0, 3).map((pub, index) => (
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
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                <div className="flex-grow">
                  <div className="flex items-start gap-3 mb-4">
                    <BookOpen className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {pub.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{pub.authors.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{pub.year}</span>
                    </div>
                    {pub.indexing && (
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded text-xs">
                          {pub.indexing}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-lg text-yellow-400 mb-2">{pub.venue}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{pub.abstract}</p>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(pub.status)}`}>
                    {pub.status}
                  </span>
                </div>
              </div>

              {pub.awards.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-semibold text-yellow-400">Awards</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pub.awards.map((award, awardIndex) => (
                      <span
                        key={awardIndex}
                        className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-sm"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {Object.entries(pub.links).map(([linkType, url]) => (
                  <a
                    key={linkType}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="capitalize">{linkType}</span>
                  </a>
                ))}
              </div>
            </Tile>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;