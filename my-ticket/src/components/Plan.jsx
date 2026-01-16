import React from "react";
import { Mountain, Camera, Globe, ArrowRight } from "lucide-react";

const destinations = [
  {
    title: "Mount Everest Base Camp",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    icon: <Mountain size={18} />,
  },
  {
    title: "Pashupatinath",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24",
    icon: <Globe size={18} />,
  },
  {
    title: "Pokhara Valley",
    image: "https://images.unsplash.com/photo-1544735716-8bfc9e9c0d3f",
    icon: <Camera size={18} />,
  },
  {
    title: "Lumbini",
    image: "https://images.unsplash.com/photo-1624372635316-8210a91c8f5d",
    icon: <Globe size={18} />,
  },
  {
    title: "Annapurna Circuit Trek",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    icon: <Mountain size={18} />,
  },
  {
    title: "Bardiya National Park",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    icon: <Camera size={18} />,
  },
];

export default function ChooseAdventure() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 md:px-16 py-16">
      {/* Header */}
      <div className="mb-12 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          CHOOSE YOUR <br /> ADVENTURE
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Explore the diverse adventures of Nepal — from the Himalayas to sacred
          heritage sites.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition"
          >
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                {item.icon}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <button className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline">
                View Details <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
