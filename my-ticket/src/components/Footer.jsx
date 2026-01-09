import React, { useState } from 'react';
import { 
  Plane, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const App = () => {
  const [view, setView] = useState('home');

  const Nav = () => (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="w-8 h-8 bg-[#0057FF] rounded-lg flex items-center justify-center">
              <Plane className="text-white" size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight text-[#1A1A1A]">AeroSmart</span>
          </div>
          <div className="hidden md:flex gap-6 text-[13px] font-semibold text-gray-500">
            <button onClick={() => setView('home')} className={`transition-colors hover:text-[#0057FF] ${view === 'home' ? 'text-[#0057FF]' : ''}`}>Booking</button>
            <button onClick={() => setView('about')} className={`transition-colors hover:text-[#0057FF] ${view === 'about' ? 'text-[#0057FF]' : ''}`}>About Us</button>
          </div>
        </div>
        <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-[12px] font-bold hover:bg-black transition-colors">Sign In</button>
      </div>
    </nav>
  );

  const Footer = () => {
    const footerLinks = {
      Company: ['About Us', 'Careers', 'Press', 'Sustainability'],
      Support: ['Help Center', 'Safety Information', 'Refund Policy', 'Contact Us'],
      Services: ['Business Travel', 'Private Jet', 'Rewards Program', 'Flight Status']
    };

    return (
      <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Section: Branding & Newsletter */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#0057FF] rounded-lg flex items-center justify-center">
                  <Plane className="text-white" size={18} />
                </div>
                <span className="text-2xl font-bold tracking-tight">AeroSmart</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                Revolutionizing the future of air travel through AI-driven logistics and carbon-neutral initiatives. Fly smarter, fly greener.
              </p>
              <div className="flex gap-4">
                {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#0057FF] hover:border-[#0057FF] transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-200">{title}</h4>
                  <ul className="space-y-4">
                    {links.map(link => (
                      <li key={link}>
                        <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center group">
                          <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all mr-1" />
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-200">Get Updates</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe for travel deals and news.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-gray-800 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-[#0057FF] outline-none transition-all pr-12"
                />
                <button className="absolute right-2 top-1.5 w-9 h-9 bg-[#0057FF] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
              <div className="mt-6 flex items-center gap-3 text-gray-400">
                <Phone size={16} />
                <span className="text-sm">+1 (800) AERO-SMART</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-800 w-full mb-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8 text-[12px] font-medium text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
            </div>
            <p className="text-gray-500 text-[12px] font-medium">
              © 2025 AeroSmart Inc. All rights reserved. Designed for the future of travel.
            </p>
          </div>
        </div>
      </footer>
    );
  };

  const BookingHome = () => (
    <div className="animate-in slide-in-from-bottom-4 duration-700 min-h-[60vh]">
      <div className="max-w-2xl mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 leading-tight">
          Where would you <br />like to <span className="text-[#0057FF]">fly next?</span>
        </h1>
        <p className="text-gray-500 text-lg font-medium">Experience the world's most intelligent booking system.</p>
      </div>
      <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-blue-900/10 border border-gray-100 flex flex-col md:flex-row gap-4 max-w-4xl">
        <div className="flex-1 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-blue-100">
            <label className="text-[10px] font-black text-gray-400 uppercase block mb-1 tracking-widest">Destination</label>
            <div className="flex items-center gap-2 font-bold text-gray-700"><MapPin size={16} className="text-[#0057FF]"/> Singapore (SIN)</div>
        </div>
        <div className="flex-1 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer border border-transparent hover:border-blue-100">
            <label className="text-[10px] font-black text-gray-400 uppercase block mb-1 tracking-widest">Departure</label>
            <div className="flex items-center gap-2 font-bold text-gray-700"><Globe size={16} className="text-[#0057FF]"/> London (LHR)</div>
        </div>
        <button className="bg-[#0057FF] text-white px-10 py-4 md:py-0 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30">Search Flights</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Nav />
      <main className="flex-grow max-w-7xl mx-auto px-6 py-20 w-full">
        {view === 'home' ? <BookingHome /> : (
          <div className="animate-in fade-in duration-700 text-center py-20">
            <h2 className="text-4xl font-black mb-4">About AeroSmart</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We are redefining aviation with AI and sustainability at our core.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;