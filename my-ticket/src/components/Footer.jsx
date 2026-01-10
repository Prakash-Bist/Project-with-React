import React from 'react';
import { 
  Plane, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Mobile App', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Ticket Status', href: '/ticketstatus' },
      { name: 'Refund Policy', href: '#' },
      { name: 'Contact Us', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' }
    ]
  };

  return (
    <footer className="w-full transition-colors duration-300 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <Plane size={24} className="transform -rotate-45" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                SKYPORT
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Your premium gateway to the world. Book flights, track tickets, and discover your next holiday destination with ease.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50">
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Get Exclusive Travel Deals</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Join our newsletter and receive the latest flight offers and travel guides.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900 dark:text-white"
                />
                <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-500/20">
                  Subscribe <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-slate-100 dark:border-slate-800">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Mail size={18} className="text-blue-600" />
                <span>support@skyport.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                <Phone size={18} className="text-blue-600" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-start gap-3 text-slate-500 dark:text-slate-400">
                <MapPin size={18} className="text-blue-600 mt-1" />
                <span>123 Aviation Way,<br />Terminal 4, NY 10001</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Skyport Global Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Systems Operational
            </span>
            <div className="flex gap-4 grayscale opacity-50">
              {/* Payment Icons Placeholder */}
              <span className="font-bold tracking-widest text-xs">VISA</span>
              <span className="font-bold tracking-widest text-xs">MASTERCARD</span>
              <span className="font-bold tracking-widest text-xs">PAYPAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;