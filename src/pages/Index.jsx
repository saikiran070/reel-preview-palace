
import React, { useState, useMemo } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import CategoryFilter from '../components/CategoryFilter';
import VideoCarousel from '../components/VideoCarousel';
import PreviewModal from '../components/PreviewModal';
import videoData from '../data/videoData.json';

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const handlePreview = (video) => {
    console.log('Opening preview for:', video.title);
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  const handleCategoryChange = (category) => {
    console.log('Category filter changed to:', category);
    setActiveCategory(category);
  };

  const filteredVideos = useMemo(() => {
    if (activeCategory === 'All') {
      return videoData.trending;
    }
    return videoData.trending.filter(video => 
      video.genre.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  const allVideos = [
    ...videoData.trending,
    ...videoData.continueWatching,
    ...videoData.newReleases
  ];

  const filteredAllVideos = useMemo(() => {
    if (activeCategory === 'All') {
      return allVideos;
    }
    return allVideos.filter(video => 
      video.genre.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory, allVideos]);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="pb-8">
        <div className="px-4 lg:px-8 pt-8">
          <Hero />
        </div>

        <div className="mt-12">
          <CategoryFilter 
            categories={videoData.categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />

          {activeCategory === 'All' ? (
            <>
              <VideoCarousel 
                title="Trending Now"
                videos={videoData.trending}
                onPreview={handlePreview}
              />
              
              <VideoCarousel 
                title="Continue Watching"
                videos={videoData.continueWatching}
                onPreview={handlePreview}
              />
              
              <VideoCarousel 
                title="New Releases"
                videos={videoData.newReleases}
                onPreview={handlePreview}
              />
            </>
          ) : (
            <VideoCarousel 
              title={`${activeCategory} Content`}
              videos={filteredAllVideos}
              onPreview={handlePreview}
            />
          )}
        </div>
      </div>

      <PreviewModal 
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Index;
