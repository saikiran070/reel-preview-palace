
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VideoCard from './VideoCard';

const VideoCarousel = ({ title, videos, onPreview }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
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
      
      console.log(`Scrolled ${direction} in carousel: ${title}`);
    }
  };

  return (
    <div className="mb-10">
      <h2 className="mb-4 text-xl font-bold text-white px-4 lg:px-6">
        {title}
      </h2>
      
      <div className="group relative">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 lg:left-4"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div 
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-4 lg:px-6"
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
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 lg:right-4"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
