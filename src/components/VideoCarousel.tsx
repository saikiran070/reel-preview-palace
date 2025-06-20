
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VideoCard from './VideoCard';

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

interface VideoCarouselProps {
  title: string;
  videos: Video[];
  onPreview: (video: Video) => void;
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ title, videos, onPreview }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const currentScroll = scrollRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-bold text-white px-4 lg:px-8">
        {title}
      </h2>
      
      <div className="group relative">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-all hover:bg-black/70 group-hover:opacity-100 lg:left-4"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {videos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onPreview={onPreview}
            />
          ))}
        </div>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white opacity-0 transition-all hover:bg-black/70 group-hover:opacity-100 lg:right-4"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
