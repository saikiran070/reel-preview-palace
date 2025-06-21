
import React, { useState } from 'react';
import { Play, Info } from 'lucide-react';

const VideoCard = ({ video, onPreview }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    console.log('Video card clicked:', video.title);
    onPreview(video);
  };

  const handlePlayClick = (e) => {
    e.stopPropagation();
    console.log('Play clicked for:', video.title);
    alert(`Playing: ${video.title}`);
  };

  const handleInfoClick = (e) => {
    e.stopPropagation();
    console.log('Info clicked for:', video.title);
    onPreview(video);
  };

  return (
    <div 
      className="group relative min-w-[280px] cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-800 shadow-lg border border-gray-600">
        <img 
          src={video.image} 
          alt={video.title}
          className="h-[160px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Progress Bar */}
        {video.progress && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
            <div 
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${video.progress}%` }}
            />
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <div className="flex gap-3">
            <button 
              onClick={handlePlayClick}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors border border-white/20"
            >
              <Play size={20} className="text-white" fill="currentColor" />
            </button>
            <button 
              onClick={handleInfoClick}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors border border-white/20"
            >
              <Info size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="mt-3">
        <h3 className="font-bold text-white text-sm truncate group-hover:text-blue-300 transition-colors">
          {video.title}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-xs">
          <span className="bg-yellow-500 text-black px-2 py-0.5 rounded text-xs font-bold">
            {video.rating}
          </span>
          <span className="bg-gray-700 text-white px-2 py-0.5 rounded font-medium">{video.genre}</span>
          <span className="text-gray-200 font-medium">{video.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
