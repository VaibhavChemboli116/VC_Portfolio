import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [fact, setFact] = useState('');
  const [isFactLoading, setIsFactLoading] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Add smooth scrolling behavior
  useEffect(() => {
    if (!isLoading) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, [isLoading]);



  // Content filter to check for inappropriate keywords
  const inappropriateKeywords = [
    'sex', 'sexual', 'porn', 'nude', 'naked', 'breast', 'penis', 'vagina', 
    'orgasm', 'masturbat', 'erotic', 'adult', '18+', 'xxx', 'intercourse',
    'genitals', 'prostitut', 'rape', 'violence', 'kill', 'murder', 'death',
    'suicide', 'drug', 'cocaine', 'heroin', 'marijuana', 'alcohol', 'drunk',
    'dildo', 'vibrator', 'condom', 'sperm', 'ejaculat', 'climax', 'horny',
    'fetish', 'bdsm', 'kink', 'bondage', 'cum', 'cock', 'dick', 'pussy',
    'tits', 'ass', 'butt', 'anal', 'oral', 'blow', 'suck', 'fuck', 'shit',
    'damn', 'hell', 'bitch', 'slut', 'whore', 'gay', 'lesbian', 'homo',
    'virgin', 'puberty', 'menstruat', 'abortion', 'contracepti', 'viagra',
    'boob', 'smoking', 'tobacco', 'weed', 'meth', 'crack', 'addiction',
    'overdose', 'abuse', 'torture', 'assault', 'victim', 'criminal', 'crime' 
  ];

  const isContentAppropriate = (text: string) => {
    const lowerText = text.toLowerCase();
    return !inappropriateKeywords.some(keyword => lowerText.includes(keyword));
  };

  // Fetch a shocking rare fact from the web
  const fetchFact = async (retryCount = 0) => {
    setIsFactLoading(true);
    setFact('');
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
      const data = await response.json();
      
      // Check if content is appropriate
      if (isContentAppropriate(data.text)) {
        setFact(data.text);
      } else {
        // If inappropriate content detected and we haven't retried too many times, try again
        if (retryCount < 5) {
          await fetchFact(retryCount + 1);
        } else {
          setFact('Here\'s an amazing fact: The human brain contains approximately 86 billion neurons!');
        }
      }
    } catch (error) {
      setFact('Could not fetch a fact. Please try again!');
    }
    setIsFactLoading(false);
  };

  const handleChatClick = () => {
    setIsChatOpen(true);
    fetchFact();
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleShowAnotherFact = () => {
    fetchFact();
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <LoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Navigation />
          <main className="relative">
            <Hero />
            <About />
            <Education />
            <Experience />
            <Publications />
            <Projects />
            <Contact />
          </main>
          
          {/* Floating Chat Icon and Window */}
          <div className="fixed bottom-14 right-4 sm:right-14 z-50 group">
            <button
              onClick={handleChatClick}
              className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110"
              aria-label="Chat with me"
            >
              <span className="text-white font-bold text-lg transition-transform duration-300">O!O</span>
            </button>
            
            {/* Tooltip */}
            {!isChatOpen && (
              <div className="absolute top-1/2 right-full -translate-y-1/2 mr-2 sm:mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap flex items-center">
                <span className="hidden sm:inline">Want to know an amazing fact?</span>
                <span className="sm:hidden">Amazing fact?</span>
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-900"></div>
              </div>
            )}
            {/* Chat Window */}
            {isChatOpen && (
              <div className="absolute bottom-20 right-0 w-72 sm:w-80 bg-gray-900 rounded-xl shadow-2xl p-6 flex flex-col items-start animate-fade-in-up">
                <button onClick={handleCloseChat} className="absolute top-2 right-2 text-gray-400 hover:text-white"><X size={20} /></button>
                <h4 className="text-lg font-bold mb-2 text-cyan-400">Shocking Rare Fact</h4>
                <div className="text-white text-base min-h-[60px] flex items-center">
                  {isFactLoading ? (
                    <span className="animate-pulse text-gray-400">Loading...</span>
                  ) : (
                    fact
                  )}
                </div>
                <button onClick={handleShowAnotherFact} className="mt-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all">Show Another Fact</button>
              </div>
            )}
          </div>
          
          {/* Footer */}
          <footer className="py-8 bg-black border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-gray-400">
                © 2025 Vaibhav Chemboli. Built with React, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;