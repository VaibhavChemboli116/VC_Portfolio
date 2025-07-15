import React from 'react';

interface TileProps {
  children: React.ReactNode;
  className?: string;
}

const Tile: React.FC<TileProps> = ({ children, className = '' }) => (
  <div className={`relative group ${className}`} style={{ overflow: 'visible' }}>
    {/* Enhanced Radial Gradient Glow - only visible on hover */}
    <div 
      className="absolute inset-0 z-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
      style={{
        background: 'radial-gradient(ellipse 120% 120% at center, rgba(96,165,250,0.35) 0%, rgba(168,139,250,0.25) 50%, rgba(96,165,250,0.15) 75%, rgba(168,139,250,0.08) 90%, transparent 100%)',
        filter: 'blur(20px)',
      }} 
    />
    {/* Additional corner glow - only visible on hover */}
    <div 
      className="absolute inset-0 z-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-90 transition-opacity duration-500" 
      style={{
        background: 'radial-gradient(ellipse 150% 150% at center, rgba(96,165,250,0.2) 0%, rgba(168,139,250,0.15) 40%, rgba(96,165,250,0.1) 70%, transparent 100%)',
        filter: 'blur(35px)',
        transform: 'scale(1.2)',
      }} 
    />
    {/* Corner enhancement layer - only visible on hover */}
    <div 
      className="absolute inset-0 z-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-70 transition-opacity duration-500" 
      style={{
        background: 'conic-gradient(from 0deg at 50% 50%, rgba(96,165,250,0.1) 0deg, rgba(168,139,250,0.08) 90deg, rgba(96,165,250,0.1) 180deg, rgba(168,139,250,0.08) 270deg, rgba(96,165,250,0.1) 360deg)',
        filter: 'blur(25px)',
        transform: 'scale(1.1)',
      }} 
    />
    <div className="relative z-10 bg-black rounded-2xl border border-gray-800 p-8 group-hover:border-gray-700 transition-colors duration-300">
      {children}
    </div>
  </div>
);

export default Tile;