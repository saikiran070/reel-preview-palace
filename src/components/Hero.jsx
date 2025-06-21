
import React from 'react';
import { Play, Info, Star, Volume2 } from 'lucide-react';
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

  const handleWatchlist = () => {
    console.log('Added to watchlist:', featured.title);
    alert(`➕ Added "${featured.title}" to your watchlist`);
  };

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${featured.image})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-end">
        <div className="px-4 lg:px-6 pb-16 max-w-2xl">
          {/* Prime Video Badge */}
          <div className="mb-4">
            <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">
              Prime Video Original
            </span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {featured.title}
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-200 mb-6 leading-relaxed max-w-xl">
            {featured.description}
          </p>
          
          {/* Metadata */}
          <div className="flex items-center gap-4 mb-8 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Star size={16} fill="#fbbf24" className="text-yellow-400" />
              <span className="text-white font-medium">{featured.rating}</span>
            </div>
            <span>{featured.genre}</span>
            <span>{featured.duration}</span>
            <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">HD</span>
            <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">CC</span>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handlePlay}
              className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-all duration-200 shadow-lg"
            >
              <Play size={20} fill="currentColor" />
              Play
            </button>
            
            <button 
              onClick={handleWatchlist}
              className="flex items-center gap-2 bg-gray-700/80 text-white px-8 py-3 rounded font-medium hover:bg-gray-600 transition-all duration-200 backdrop-blur-sm"
            >
              <Info size={20} />
              Watchlist
            </button>
            
            <button 
              onClick={handleMoreInfo}
              className="flex items-center gap-2 bg-transparent border-2 border-gray-600 text-white px-8 py-3 rounded font-medium hover:bg-gray-600/20 transition-all duration-200"
            >
              <Info size={20} />
              More Info
            </button>
          </div>
          
          {/* Bottom info */}
          <div className="mt-6 text-sm text-gray-400">
            <p>Watch with ads or upgrade to remove ads. Learn more about ads.</p>
          </div>
        </div>
        
        {/* Volume Button */}
        <div className="absolute bottom-24 right-6">
          <button className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-white hover:bg-gray-700/50 transition-colors">
            <Volume2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
