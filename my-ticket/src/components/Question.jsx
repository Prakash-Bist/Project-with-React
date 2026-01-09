import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  Search, 
  MessageCircle, 
  Mail, 
  ChevronRight,
  Plane,
  CreditCard,
  User,
  ShieldCheck
} from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-b border-gray-100 last:border-0 transition-all duration-300 ${isOpen ? 'bg-blue-50/30' : 'bg-transparent'}`}>
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 px-4 text-left group"
      >
        <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-[#0057FF]' : 'text-gray-800 group-hover:text-[#0057FF]'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? (
            <div className="w-8 h-8 rounded-full bg-[#0057FF] flex items-center justify-center text-white">
              <Minus size={18} />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-blue-100 group-hover:text-[#0057FF]">
              <Plus size={18} />
            </div>
          )}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-6 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'General', icon: Plane },
    { name: 'Booking', icon: CreditCard },
    { name: 'Account', icon: User },
    { name: 'Safety', icon: ShieldCheck }
  ];

  const faqs = {
    General: [
      { question: "How early should I arrive at the airport?", answer: "For domestic flights, we recommend arriving 2 hours before departure. For international flights, 3 hours is advised to allow time for security and customs." },
      { question: "What is your carbon-neutral commitment?", answer: "AeroSmart offsets 100% of flight emissions by investing in sustainable aviation fuels and global reforestation projects." }
    ],
    Booking: [
      { question: "Can I change my flight date after booking?", answer: "Yes, date changes can be made through 'Manage Booking' up to 24 hours before departure, subject to fare differences." },
      { question: "Which payment methods do you accept?", answer: "We accept all major credit cards, Apple Pay, Google Pay, and major cryptocurrencies." }
    ],
    Account: [
      { question: "How do I join the Rewards program?", answer: "You are automatically enrolled when you create an AeroSmart account. You earn miles for every dollar spent." },
      { question: "Can I share my miles with family?", answer: "Yes, our 'Family Pool' feature allows you to combine miles with up to 5 family members." }
    ],
    Safety: [
      { question: "What are your current COVID-12 safety protocols?", answer: "We maintain HEPA-filtered cabins and offer complimentary sanitization kits to all passengers." }
    ]
  };

  const filteredFaqs = faqs[activeTab].filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-[#0057FF] font-bold tracking-widest uppercase text-sm mb-3">Help Center</h2>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0057FF] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search for a question..."
              className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-blue-100 focus:border-[#0057FF] outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => { setActiveTab(cat.name); setOpenIndex(0); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                activeTab === cat.name 
                ? 'bg-[#0057FF] text-white shadow-lg shadow-blue-500/30' 
                : 'bg-white text-gray-500 hover:bg-gray-50'
              }`}
            >
              <cat.icon size={16} />
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden mb-12">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))
          ) : (
            <div className="py-20 text-center text-gray-400">
              <p>No questions found matching your search.</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-[2rem] p-8 text-white flex items-center justify-between group cursor-pointer hover:bg-black transition-colors">
            <div>
              <h3 className="text-xl font-bold mb-1">Still have questions?</h3>
              <p className="text-gray-400 text-sm">Our support team is online 24/7</p>
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#0057FF] transition-colors">
              <MessageCircle size={24} />
            </div>
          </div>
          
          <div className="bg-[#0057FF] rounded-[2rem] p-8 text-white flex items-center justify-between group cursor-pointer hover:bg-blue-600 transition-colors">
            <div>
              <h3 className="text-xl font-bold mb-1">Email us directly</h3>
              <p className="text-blue-100 text-sm">Average response time: 2 hours</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:text-[#0057FF] transition-colors">
              <Mail size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;