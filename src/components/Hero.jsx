
import React from 'react';
import { Play, Info } from 'lucide-react';
import videoData from '../data/videoData.json';

const Hero = () => {
  const featured = videoData.featured;

  const handlePlay = () => {
    console.log('Play button clicked for:', featured.title);
    alert(`Playing: ${featured.title}`);
  };

  const handleMoreInfo = () => {
    console.log('More Info clicked for:', featured.title);
    alert(`More info about: ${featured.title}\n\n${featured.description}`);
  };

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden rounded-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${featured.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      <div className="relative z-10 flex h-full items-end p-8 lg:p-16">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold text-white lg:text-6xl animate-fade-in">
            {featured.title}
          </h1>
          <p className="mb-6 text-lg text-gray-200 leading-relaxed animate-fade-in">
            {featured.description}
          </p>
          <div className="mb-8 flex items-center gap-4 text-sm text-gray-300 animate-fade-in">
            <span className="rounded bg-yellow-500 px-2 py-1 text-black font-semibold">
              ⭐ {featured.rating}
            </span>
            <span>{featured.genre}</span>
            <span>{featured.duration}</span>
          </div>
          <div className="flex gap-4 animate-fade-in">
            <button 
              onClick={handlePlay}
              className="flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-black transition-all hover:bg-gray-200 hover:scale-105"
            >
              <Play size={20} fill="currentColor" />
              Play
            </button>
            <button 
              onClick={handleMoreInfo}
              className="flex items-center gap-2 rounded-lg bg-gray-600/50 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:bg-gray-600/70 hover:scale-105"
            >
              <Info size={20} />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
