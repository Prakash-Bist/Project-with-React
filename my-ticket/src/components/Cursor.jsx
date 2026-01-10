import React, { useState, useEffect } from 'react';
import img from "../assets/image/aeroplane.jpg"
import { 
  Plane, 
  Search, 
  Calendar, 
  Users, 
  MapPin, 
  ArrowLeftRight, 
  Plus, 
  X,
  Sparkles,
  Loader2,
  ChevronRight
} from 'lucide-react';

/**
 * Advanced Flight Search Component
 * Features:
 * 1. Trip Type Toggles (One Way, Round Trip, Multi-City)
 * 2. Dynamic background generation using AI
 * 3. Responsive glassmorphism search bar
 * 4. Multi-city dynamic row management
 */

const App = () => {
  const [tripType, setTripType] = useState('round-trip'); // 'one-way', 'round-trip', 'multi-city'
  
  
  // Multi-city segments state
  const [multiCitySegments, setMultiCitySegments] = useState([
    { id: 1, from: '', to: '', date: '' },
    { id: 2, from: '', to: '', date: '' }
  ]);

 

 

  const addSegment = () => {
    if (multiCitySegments.length < 5) {
      setMultiCitySegments([...multiCitySegments, { id: Date.now(), from: '', to: '', date: '' }]);
    }
  };

  const removeSegment = (id) => {
    setMultiCitySegments(multiCitySegments.filter(s => s.id !== id));
  };

  return (
    <div className="relative min-h-screen w-full font-sans overflow-x-hidden bg-neutral-900">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        
          <img 
          src={img}
            alt="Background" 
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
     
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-start pt-20 px-4 md:px-10 pb-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 italic">
            Where to <span className="text-[#c4a265]">Next?</span>
          </h1>
          <p className="text-white/70 max-w-lg mx-auto">
            Book your next luxury journey with bespoke flight options tailored to your schedule.
          </p>
        </div>

        {/* Main Search Container */}
        <div className="w-full max-w-6xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
          
          {/* Trip Type Toggle */}
          <div className="flex flex-wrap gap-2 mb-8 bg-black/20 p-1.5 rounded-2xl w-fit">
            {[
              { id: 'one-way', label: 'One Way' },
              { id: 'round-trip', label: 'Round Trip' },
              { id: 'multi-city', label: 'Multi-City' }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setTripType(type.id)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  tripType === type.id 
                  ? 'bg-[#c4a265] text-black shadow-lg' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Search Fields Grid */}
          <div className="space-y-4">
            {tripType !== 'multi-city' ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Standard Trip Inputs */}
                <div className="md:col-span-3 relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c4a265]">
                    <MapPin size={18} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="From Where?" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c4a265]/50 transition-all"
                  />
                </div>

                <div className="md:col-span-1 flex items-center justify-center">
                  <button className="p-2 bg-white/5 rounded-full border border-white/10 text-white/40 hover:text-[#c4a265] transition-colors">
                    <ArrowLeftRight size={18} />
                  </button>
                </div>

                <div className="md:col-span-3 relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c4a265]">
                    <MapPin size={18} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="To Where?" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c4a265]/50 transition-all"
                  />
                </div>

                <div className="md:col-span-3 relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c4a265]">
                    <Calendar size={18} />
                  </div>
                  <input 
                    type="text" 
                    placeholder={tripType === 'round-trip' ? "Depart - Return" : "Departure Date"} 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c4a265]/50 transition-all"
                  />
                </div>

                <div className="md:col-span-2 relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c4a265]">
                    <Users size={18} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="1 Adult" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c4a265]/50 transition-all"
                  />
                </div>
              </div>
            ) : (
              /* Multi-City Inputs */
              <div className="space-y-4">
                {multiCitySegments.map((segment, index) => (
                  <div key={segment.id} className="grid grid-cols-1 md:grid-cols-12 gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="md:col-span-4 relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c4a265] text-xs font-bold opacity-50">{index + 1}</div>
                      <input 
                        type="text" 
                        placeholder="From" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c4a265]/50 transition-all"
                      />
                    </div>
                    <div className="md:col-span-4">
                      <input 
                        type="text" 
                        placeholder="To" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c4a265]/50 transition-all"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <input 
                        type="date" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#c4a265]/50 transition-all"
                      />
                    </div>
                    <div className="md:col-span-1 flex items-center justify-center">
                      {multiCitySegments.length > 2 && (
                        <button 
                          onClick={() => removeSegment(segment.id)}
                          className="p-2 text-white/30 hover:text-red-400 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                
                <button 
                  onClick={addSegment}
                  disabled={multiCitySegments.length >= 5}
                  className="flex items-center gap-2 text-[#c4a265] text-sm font-bold mt-2 hover:opacity-80 disabled:opacity-30"
                >
                  <Plus size={16} />
                  <span>Add another flight</span>
                </button>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 mt-6 border-t border-white/10">
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-5 h-5 border-2 border-[#c4a265] rounded flex items-center justify-center bg-transparent group-hover:bg-[#c4a265]/10">
                    <div className="w-2.5 h-2.5 bg-[#c4a265] rounded-sm" />
                  </div>
                  <span className="text-white/60 text-sm">Direct flights only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-5 h-5 border-2 border-white/30 rounded flex items-center justify-center bg-transparent group-hover:bg-white/5" />
                  <span className="text-white/60 text-sm">Flexible dates</span>
                </label>
              </div>

              <button className="w-full md:w-auto px-12 py-4 bg-[#c4a265] hover:bg-[#d4b275] text-black font-bold rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(196,162,101,0.3)]">
                <Search size={20} />
                <span>Find Flights</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 flex gap-4 overflow-x-auto w-full max-w-6xl pb-4 no-scrollbar">
          {['Stopover in Abu Dhabi', 'Upgrade to First', 'Group Bookings', 'Travel Insurance'].map((link) => (
            <button key={link} className="whitespace-nowrap px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-bold tracking-widest uppercase hover:bg-white/10 hover:text-white transition-all">
              {link}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;