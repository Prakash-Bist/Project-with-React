import React, { useState, useEffect } from 'react';
import { useNavigate, Link} from "react-router-dom";
import { 
  Search, 
  Moon, 
  Sun, 
  Ticket, 
  Home, 
  User, 
  Menu, 
  X,
  Plane,
  TentTree
} from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle Dark Mode Side Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { id: 'home', label: 'Home',path:'/', icon: <Home size={18} /> },
    { id: 'ticket', label: 'Ticket Status',path:'/ticketstatus', icon: <Ticket size={18} /> },
    {id: 'flight routes', label:'Flight Routes',path:'/flightroutes' },
    { id: 'holiday', label: 'Holiday',path:'/holiday',icon:<TentTree size={18}/> },
{ id: 'help', label: 'Help',path:'/help',  },
  ];


  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 
      ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 1. Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <Plane size={24} className="transform -rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              SKYPORT
            </span>
          </div>

          {/* 2. Nav Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
  setActiveTab(item.id);
  navigate(item.path);
}}

                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${activeTab === item.id 
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* 3. Search, Mode, Login (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                type="text"
                placeholder="Search flights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-10 pr-4 py-2 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all
                  ${darkMode 
                    ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' 
                    : 'bg-slate-100 border-transparent placeholder-slate-400'}`}
              />
            </div>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl transition-colors ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link to="/loginpage" className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              <User size={18} />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile UI Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'text-yellow-400' : 'text-slate-600'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className={`md:hidden p-4 space-y-4 border-t ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 focus:outline-none"
            />
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
  setActiveTab(item.id);
  navigate(item.path);
  setIsMenuOpen(false);
}}

              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium
                ${activeTab === item.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-600 dark:text-slate-400'}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-bold">
            <User size={18} />
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;