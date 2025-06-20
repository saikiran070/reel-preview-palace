
import React from 'react';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  image: string;
  genre: string;
  rating: string;
  duration: string;
  description: string;
}

interface PreviewModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ video, isOpen, onClose }) => {
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-4xl rounded-lg bg-gray-900 shadow-2xl animate-scale-in">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70"
        >
          <X size={24} />
        </button>

        <div className="relative">
          <img 
            src={video.image} 
            alt={video.title}
            className="h-[300px] w-full rounded-t-lg object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-t-lg" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="mb-2 text-3xl font-bold text-white">
              {video.title}
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span className="rounded bg-yellow-500 px-2 py-1 text-black font-semibold">
                ⭐ {video.rating}
              </span>
              <span>{video.genre}</span>
              <span>{video.duration}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="mb-6 text-gray-300 leading-relaxed">
            {video.description}
          </p>
          
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:bg-gray-200">
              <Play size={20} fill="currentColor" />
              Play
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-gray-700 px-6 py-3 font-semibold text-white transition-all hover:bg-gray-600">
              <Plus size={20} />
              My List
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-gray-700 px-6 py-3 font-semibold text-white transition-all hover:bg-gray-600">
              <ThumbsUp size={20} />
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
