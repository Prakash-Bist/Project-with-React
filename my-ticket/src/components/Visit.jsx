import React, { useState, useEffect } from 'react';
import { Mountain, MapPin, Calendar, ChevronRight } from 'lucide-react';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      {/* Hero Banner Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        {/* Parallax Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop')`,
            transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.2}px)`,
          }}
        >
          {/* Dark Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-slate-900/90" />
        </div>

        {/* Banner Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-white text-sm mb-6 border border-white/20 animate-fade-in">
            <MapPin className="w-4 h-4 text-red-400" />
            <span>Roof of the World</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
            VISIT NEPAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">2026</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 font-light mb-10 max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
            Experience the majesty of the Himalayas. 
            From the heights of Everest to the serenity of Lumbini.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-xl shadow-orange-500/20 active:scale-95">
              Plan Your Adventure
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-bold text-lg border border-white/30 transition-all active:scale-95">
              Explore Destinations
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Campaign Details Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Mountain className="w-8 h-8 text-blue-400" />,
            title: "8 of 14 Peaks",
            desc: "Nepal is home to eight of the world's fourteen highest mountains, including Mt. Everest."
          },
          {
            icon: <Calendar className="w-8 h-8 text-orange-400" />,
            title: "Festivals of 2026",
            desc: "Immerse yourself in over 50 unique cultural festivals throughout the campaign year."
          },
          {
            icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
            title: "Eco-Friendly Travel",
            desc: "Join our sustainable tourism initiative to preserve the pristine nature of the Himalayas."
          }
        ].map((feature, idx) => (
          <div key={idx} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-slate-500 transition-all hover:-translate-y-2">
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer / CTA Mini-Banner */}
      <footer className="bg-slate-800 p-8 text-center border-t border-slate-700">
        <p className="text-slate-500 text-sm">© 2026 Visit Nepal Campaign Board. Himalayan Serenity Awaits.</p>
      </footer>
    </div>
  );
};

// Inline helper for icons not explicitly imported
const ShieldCheck = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);

export default App;