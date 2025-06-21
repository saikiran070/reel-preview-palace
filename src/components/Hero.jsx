
import React from 'react';
import { Play, Info, Star } from 'lucide-react';
import videoData from '../data/videoData.json';

const Hero = () => {
  const featured = videoData.featured;

  const handlePlay = () => {
    console.log('Play button clicked for:', featured.title);
    alert(`▶️ Playing: ${featured.title}`);
  };

  const handleMoreInfo = () => {
    console.log('More Info clicked for:', featured.title);
    alert(`ℹ️ More info about: ${featured.title}\n\n${featured.description}`);
  };

  return (
    <div className="relative h-[75vh] min-h-[600px] w-full overflow-hidden rounded-2xl shadow-2xl">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: `url(${featured.image})` }}
      />
      
      {/* Multiple Gradient Overlays for Better Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-purple-900/20" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-end p-8 lg:p-16">
        <div className="max-w-3xl space-y-6">
          {/* Title with Animation */}
          <h1 className="text-5xl font-black text-white lg:text-7xl leading-tight animate-fade-in bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text">
            {featured.title}
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-200 leading-relaxed max-w-2xl animate-fade-in lg:text-xl">
            {featured.description}
          </p>
          
          {/* Metadata with Enhanced Styling */}
          <div className="flex flex-wrap items-center gap-4 text-sm animate-fade-in">
            <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1.5 rounded-full font-bold shadow-lg">
              <Star size={16} fill="currentColor" />
              {featured.rating}
            </div>
            <span className="bg-gray-800/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full font-medium border border-gray-700">
              {featured.genre}
            </span>
            <span className="bg-gray-800/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full font-medium border border-gray-700">
              {featured.duration}
            </span>
            <span className="bg-red-600/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full font-medium border border-red-500/50">
              HD
            </span>
          </div>
          
          {/* Action Buttons with Enhanced Design */}
          <div className="flex flex-wrap gap-4 animate-fade-in pt-4">
            <button 
              onClick={handlePlay}
              className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-black transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="p-1 rounded-full bg-black/10 group-hover:bg-black/20 transition-colors">
                <Play size={20} fill="currentColor" />
              </div>
              Play Now
            </button>
            
            <button 
              onClick={handleMoreInfo}
              className="group flex items-center gap-3 rounded-full bg-gray-800/80 backdrop-blur-sm px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-gray-700/80 hover:scale-105 border border-gray-600 shadow-lg hover:shadow-xl"
            >
              <div className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <Info size={20} />
              </div>
              More Info
            </button>
          </div>
        </div>
      </div>
      
      {/* Subtle Animation Indicator */}
      <div className="absolute bottom-8 right-8 animate-pulse">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;
