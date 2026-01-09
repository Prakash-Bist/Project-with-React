import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight, Play, Pause } from 'lucide-react';

// Configuration for your local image directory
const IMAGE_DIR = './src/assets/image/carousel';

const ALL_SLIDES = [
  {
    id: 1,
    fileName: 'Bankok.jpeg', // Ensure your file in src/images/carousel matches this
    category: 'Aviation',
    title: 'Modern Fleet Logistics',
    location: 'International Hub',
    description: 'Explore our latest fleet enhancements designed for maximum efficiency.'
  },
  {
    id: 2,
    fileName: 'Kuala lumpur.jpeg',
    category: 'Experience',
    title: 'Sky-High Hospitality',
    location: 'Premium Class',
    description: 'Redefining the journey with world-class dining and personalized service.'
  },
  {
    id: 3,
    fileName: 'london.jpeg',
    category: 'Destinations',
    title: 'Tropical Horizon',
    location: 'Maldives Archipelago',
    description: 'From turquoise waters to pristine white sands, discover peak luxury.'
  },
  {
    id: 4,
    fileName: 'penang.jpeg',
    category: 'Urban',
    title: 'Urban Exploration',
    location: 'Shibuya, Tokyo',
    description: 'Immerse yourself in the vibrant energy of Tokyo with our city guides.'
  }
];

const CATEGORIES = ['All', 'Aviation', 'Experience', 'Destinations', 'Urban'];

const App = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const autoPlayRef = useRef(null);

  const filteredSlides = useMemo(() => {
    return activeFilter === 'All' 
      ? ALL_SLIDES 
      : ALL_SLIDES.filter(slide => slide.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setCurrentIndex(0);
    setProgress(0);
  }, [activeFilter]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === filteredSlides.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, [filteredSlides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredSlides.length - 1 : prev - 1));
    setProgress(0);
  };

  useEffect(() => {
    if (isAutoPlaying && filteredSlides.length > 1) {
      const interval = 50; 
      const step = (interval / 5000) * 100;
      autoPlayRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextSlide();
            return 0;
          }
          return prev + step;
        });
      }, interval);
    } else {
      clearInterval(autoPlayRef.current);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, nextSlide, filteredSlides.length]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl space-y-8">
        
        {/* Header and Filter */}
        

        {/* Main Stage */}
        <div className="relative group overflow-hidden rounded-[2.5rem] bg-neutral-900 aspect-[16/10] md:aspect-[21/9] shadow-2xl border border-white/5">
          {filteredSlides.length > 0 ? (
            filteredSlides.map((slide, index) => (
              <div
                key={`${activeFilter}-${slide.id}`}
                className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
              >
                {/* Dynamically linking to your local folder */}
                <img
                  src={`${IMAGE_DIR}/${slide.fileName}`}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if your local file isn't found
                    e.target.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                  <div className="max-w-2xl space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-600 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest">
                        {slide.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-neutral-400 text-sm">
                        <MapPin size={14} className="text-blue-400" />
                        <span>{slide.location}</span>
                      </div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black leading-none tracking-tighter uppercase italic">{slide.title}</h2>
                    <p className="text-neutral-400 text-sm md:text-base max-w-lg leading-relaxed">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex items-center justify-center text-neutral-500 italic">No assets found in this category.</div>
          )}

          <div className="absolute top-8 right-8 z-20 flex flex-col gap-3">
            <button onClick={() => setIsAutoPlaying(!isAutoPlaying)} className="p-3 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:bg-blue-600 transition-all">
              {isAutoPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
          </div>

          <div className="absolute bottom-8 right-8 z-20 flex gap-3">
            <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:bg-white/20 transition-all active:scale-90"><ChevronLeft size={24} /></button>
            <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-xl border border-white/10 hover:bg-white/20 transition-all active:scale-90"><ChevronRight size={24} /></button>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20 overflow-hidden">
            <div className="h-full bg-blue-500 transition-all duration-75 ease-linear" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Dynamic Thumbnails */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {filteredSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => { setCurrentIndex(index); setProgress(0); }}
              className={`group relative aspect-video rounded-xl overflow-hidden transition-all duration-500 ${
                index === currentIndex ? 'ring-2 ring-blue-500 ring-offset-4 ring-offset-[#0a0a0a]' : 'opacity-30 hover:opacity-100 grayscale hover:grayscale-0'
              }`}
            >
              <img src={`${IMAGE_DIR}/${slide.fileName}`} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;