import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Plane, 
  Ticket, 
  Map, 
  Palmtree, 
  HelpCircle, 
  User 
} from 'lucide-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Flight Routes');

  const navLinks = [
    { name: 'Ticket Status', icon: <Ticket size={18} /> },
    { name: 'Flight Routes', icon: <Map size={18} /> },
    { name: 'Holiday', icon: <Palmtree size={18} /> },
    { name: 'Help', icon: <HelpCircle size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Plane className="transform -rotate-45" size={24} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-800">
                SKY<span className="text-blue-600">PORT</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => setActiveTab(link.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 text-sm font-semibold
                    ${activeTab === link.name 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                >
                  {link.icon}
                  {link.name}
                </button>
              ))}
              
              <div className="h-6 w-[1px] bg-slate-200 mx-4"></div>
              
              <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95">
                <User size={18} />
                Login
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 border-t border-slate-100' : 'max-h-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2 bg-white">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setActiveTab(link.name);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left font-medium
                  ${activeTab === link.name 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-slate-600 hover:bg-slate-50'
                  }`}
              >
                {link.icon}
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <button className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white px-4 py-3 rounded-xl font-bold">
                <User size={18} />
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content Placeholder */}
      <main className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Welcome to {activeTab}
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          This is a preview of the navigation component. Click the items in the navbar to see the active state changes. The mobile view collapses into a clean hamburger menu.
        </p>
      </main>
    </div>
  );
};

export default App;