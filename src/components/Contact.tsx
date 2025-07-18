import React from 'react';
import { Mail, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import Tile from './Tile';

const ResearchGateIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`${className} flex items-center justify-center w-6 h-6 font-bold text-sm`}>
    R<sup className="text-xs">G</sup>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-bing-fix">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            "Questions? Ideas? Hit me up, just don't ask for my OpenAI API Key"
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mx-auto max-w-2xl">
          <div className="space-y-6 w-full">
            {[
              {
                icon: <Mail className="w-6 h-6 text-white" />, label: 'Email', value: 'vchembol@mail.yu.edu', gradient: 'from-green-500 to-blue-500', hover: 'hover:border-green-500/50'
              },
              {
                icon: <MapPin className="w-6 h-6 text-white" />, label: 'Location', value: 'Jersey City, New Jersey, 07307', gradient: 'from-purple-500 to-pink-500', hover: 'hover:border-purple-500/50'
              },
              {
                icon: <ExternalLink className="w-6 h-6 text-white" />, 
                label: 'Creative Portfolio', 
                value: 'Want to see my other portfolio which is creative? Click on the icon.', 
                gradient: 'from-yellow-500 to-orange-500', 
                hover: 'hover:border-yellow-500/50',
                link: 'https://vaibhavchemboli116.github.io/Windows8_Portfolio/'
              }
            ].map((item, idx) => (
              <Tile key={idx} className="mb-8">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 min-w-[3rem] min-h-[3rem] bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="ml-4 sm:ml-6 flex flex-col justify-center flex-1 min-w-0">
                        <h4 className="text-white text-lg sm:text-xl font-bold">{item.label}</h4>
                        <p className="text-gray-400 text-base sm:text-lg hover:text-white transition-colors duration-300 break-words">{item.value}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center">
                    <div className={`w-12 h-12 min-w-[3rem] min-h-[3rem] bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="ml-4 sm:ml-6 flex flex-col justify-center flex-1 min-w-0">
                      <h4 className="text-white text-lg sm:text-xl font-bold">{item.label}</h4>
                      <p className="text-gray-400 text-base sm:text-lg break-words">{item.value}</p>
                    </div>
                  </div>
                )}
              </Tile>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-8 w-full">
            <h4 className="text-xl font-semibold text-white mb-4 text-center">Follow Me</h4>
            <div className="flex gap-4 justify-center">
              <a href="https://github.com/VaibhavChemboli116" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 group">
                <Github className="w-6 h-6 text-gray-400 group-hover:text-green-400" />
              </a>
              <a href="https://www.linkedin.com/in/vaibhav-chemboli/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 group">
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400" />
              </a>
              <a href="https://www.researchgate.net/profile/Vaibhav-Chemboli?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-full flex items-center justify-center hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 group">
                <ResearchGateIcon className="text-gray-400 group-hover:text-green-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;