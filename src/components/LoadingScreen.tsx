import React, { useState, useEffect } from 'react';
import { Brain, Zap, Activity } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  const [currentEpoch, setCurrentEpoch] = useState(1);
  const [loss, setLoss] = useState(2.4567);
  const [accuracy, setAccuracy] = useState(0.1234);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const totalEpochs = 128;
    const epochDuration = 20; // 20ms per epoch for ~2.5 second total

    const interval = setInterval(() => {
      setCurrentEpoch(prev => {
        const nextEpoch = prev + 1;
        
        // Update metrics based on epoch
        const progressPercent = (nextEpoch / totalEpochs) * 100;
        setProgress(progressPercent);
        
        // Simulate decreasing loss and increasing accuracy
        const newLoss = Math.max(0.0234, 2.4567 - (nextEpoch * 0.019));
        const newAccuracy = Math.min(0.9876, 0.1234 + (nextEpoch * 0.0067));
        
        setLoss(newLoss);
        setAccuracy(newAccuracy);
        
        return nextEpoch;
      });
    }, epochDuration);

    // Clear interval after training completes
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, totalEpochs * epochDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Neural Network Icon */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
              <Brain className="w-10 h-10 text-cyan-400 animate-pulse" />
            </div>
          </div>
          
          {/* Animated neural connections */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32">
            <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-6 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-6 left-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-700"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-ping delay-1000"></div>
          </div>
        </div>

        {/* Training Status */}
        <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 bg-clip-text text-transparent">
              Advanced tqdm Visualization
            </h2>
          </div>

          {/* Epoch Counter */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-300 text-sm">Epoch</span>
              <span className="text-cyan-400 font-mono font-bold">
                {currentEpoch}/128
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400">Loss</span>
              </div>
              <span className="text-red-400 font-mono font-bold">
                {loss.toFixed(4)}
              </span>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400">Accuracy</span>
              </div>
              <span className="text-green-400 font-mono font-bold">
                {(accuracy * 100).toFixed(2)}%
              </span>
            </div>
          </div>

          {/* Training Status Text */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-gray-400 text-sm animate-pulse">
              Optimizing parameters...
            </span>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center gap-1 mt-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;