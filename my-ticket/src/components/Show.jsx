import React, { useState, useEffect } from 'react';

const VisitNepalBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  // Countdown Logic to Jan 1, 2026
  useEffect(() => {
    const target = new Date("January 1, 2026 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-slate-900 text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffd?q=80&w=2000')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <span className="mb-4 inline-block rounded-full bg-red-600/20 px-4 py-1 text-sm font-bold tracking-widest text-red-500 uppercase backdrop-blur-md border border-red-500/30">
          Official Tourism Year
        </span>
        
        <h1 className="mb-4 text-6xl font-black tracking-tight md:text-8xl lg:text-9xl">
          Visit <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Nepal</span>
          <br />2026
        </h1>

        <p className="max-w-xl text-lg text-gray-300 md:text-xl italic font-light">
          "Atithi Devo Bhava" — Where the peaks touch the sky and the soul finds peace.
        </p>

        {/* Countdown Timer */}
        <div className="mt-10 flex space-x-6 md:space-x-12">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col">
              <span className="text-3xl font-bold md:text-5xl">{value}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">{label}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <button className="transform rounded-lg bg-red-600 px-10 py-4 font-bold transition-all hover:scale-105 hover:bg-red-700 active:scale-95 shadow-xl shadow-red-900/20">
            Book Your Adventure
          </button>
          <button className="rounded-lg border-2 border-white/30 bg-white/10 px-10 py-4 font-bold backdrop-blur-sm transition-all hover:bg-white hover:text-black">
            View Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisitNepalBanner;