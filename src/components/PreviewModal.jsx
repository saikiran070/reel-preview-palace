
import React from 'react';
import { X, Play, Plus, ThumbsUp, Star } from 'lucide-react';

const PreviewModal = ({ video, isOpen, onClose }) => {
  if (!isOpen || !video) return null;

  const handlePlay = () => {
    console.log('Playing from modal:', video.title);
    alert(`Now playing: ${video.title}`);
  };

  const handleAddToList = () => {
    console.log('Added to list:', video.title);
    alert(`Added "${video.title}" to My List!`);
  };

  const handleLike = () => {
    console.log('Liked:', video.title);
    alert(`Liked "${video.title}"!`);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={handleBackdropClick} 
      />
      
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-lg shadow-2xl animate-scale-in">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="relative">
          <img 
            src={video.image} 
            alt={video.title}
            className="h-[250px] w-full rounded-t-lg object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent rounded-t-lg" />
          
          <div className="absolute bottom-6 left-6 right-16">
            <h2 className="mb-3 text-2xl font-bold text-white">
              {video.title}
            </h2>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1">
                <Star size={14} fill="#fbbf24" className="text-yellow-400" />
                <span className="text-white font-medium">{video.rating}</span>
              </div>
              <span className="text-gray-300">{video.genre}</span>
              <span className="text-gray-300">{video.duration}</span>
              <span className="bg-gray-700 text-white px-2 py-1 rounded text-xs">HD</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="mb-6 text-gray-300 leading-relaxed">
            {video.description}
          </p>
          
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={handlePlay}
              className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded font-bold hover:bg-gray-200 transition-colors"
            >
              <Play size={18} fill="currentColor" />
              Play
            </button>
            <button 
              onClick={handleAddToList}
              className="flex items-center gap-2 bg-gray-700 text-white px-6 py-2.5 rounded font-medium hover:bg-gray-600 transition-colors"
            >
              <Plus size={18} />
              My List
            </button>
            <button 
              onClick={handleLike}
              className="flex items-center gap-2 bg-gray-700 text-white px-6 py-2.5 rounded font-medium hover:bg-gray-600 transition-colors"
            >
              <ThumbsUp size={18} />
              Like
            </button>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              Similar titles you might like will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
