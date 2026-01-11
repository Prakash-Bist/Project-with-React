import React from 'react';

// Sample data for cards
const cardData = [
  { title: 'Check In', img: '/images/checkin.jpg' },
  { title: 'Baggage', img: '/images/baggage.jpg' },
  { title: 'Requests', img: '/images/requests.jpg' },
  { title: 'Visas and Immigration', img: '/images/passport.jpg' },
  { title: 'Charges and Changes', img: '/images/charges.jpg' },
  { title: 'Special Assistance', img: '/images/special.jpg' },
];

function Ticketstatus() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      padding: '2rem'
    }}>
      {cardData.map((card, index) => (
        <div key={index} style={{
          position: 'relative',
          borderRadius: '10px',
          overflow: 'hidden',
          cursor: 'pointer',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img 
            src={card.img} 
            alt={card.title} 
            style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
          />
          <div style={{
            position: 'absolute',
            bottom: '0',
            width: '100%',
            padding: '10px 15px',
            background: 'rgba(0,0,0,0.5)',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>{card.title}</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>›</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ticketstatus;
