
import React, { useState } from 'react';
import { Play, Info } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  image: string;
  genre: string;
  rating: string;
  duration: string;
  progress?: number;
  description: string;
}

interface VideoCardProps {
  video: Video;
  onPreview: (video: Video) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onPreview }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative min-w-[280px] cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPreview(video)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={video.image} 
          alt={video.title}
          className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {video.progress && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
            <div 
              className="h-full bg-red-600 transition-all duration-300"
              style={{ width: `${video.progress}%` }}
            />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex gap-2">
            <button className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30">
              <Play size={24} className="text-white" fill="currentColor" />
            </button>
            <button className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30">
              <Info size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 px-2">
        <h3 className="font-semibold text-white truncate group-hover:text-blue-400 transition-colors">
          {video.title}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-sm text-gray-400">
          <span className="rounded bg-yellow-500/20 px-2 py-1 text-yellow-400 text-xs">
            ⭐ {video.rating}
          </span>
          <span>{video.genre}</span>
          <span>{video.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
