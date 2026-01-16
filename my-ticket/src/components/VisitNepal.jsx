import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function VisitNepal2027Banner() {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544735716-8bfc9e9c0d3f')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        <div className="max-w-3xl text-white">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold tracking-widest bg-red-600 rounded-full">
            OFFICIAL TOURISM CAMPAIGN
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            VISIT NEPAL <br />
            <span className="text-red-500">2027</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-200 max-w-xl">
            Discover the land of Himalayas, ancient heritage, diverse culture,
            and unforgettable adventures. Nepal awaits you in 2027.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
           <Link to="/plan" >
            <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-xl font-semibold">
             Explore Destinations  <ArrowRight size={18} /> 
           
            </button>
            </Link>
            <button className="px-6 py-3 border border-white/40 hover:bg-white/10 transition rounded-xl font-semibold">
              Plan Your Trip
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
