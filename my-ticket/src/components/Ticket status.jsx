import React from 'react';
import imag1 from '../assets/image/Show/Terminal.jpeg';

// Sample data for cards
const cardData = [
  { title: 'Check In', img: imag1 },
  { title: 'Baggage', img: '/images/baggage.jpg' },
  { title: 'Requests', img: '/images/requests.jpg' },
  { title: 'Visas and Immigration', img: '/images/passport.jpg' },
  { title: 'Charges and Changes', img: '/images/charges.jpg' },
  { title: 'Special Assistance', img: '/images/special.jpg' },
];

function Ticketstatus() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 p-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg cursor-pointer shadow-md transition-transform duration-300 hover:scale-105"
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-[200px] object-cover"
          />

          <div className="absolute bottom-0 w-full px-4 py-2 bg-black/50 text-white flex items-center justify-between">
            <span>{card.title}</span>
            <span className="text-xl font-bold">›</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ticketstatus;
