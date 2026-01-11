import React, { useState } from 'react';

function FlightStatus() {
  const [hasReference, setHasReference] = useState('No');
  const [searchBy, setSearchBy] = useState('flightNumber');
  const [flightNumber, setFlightNumber] = useState('');
  const [departureDate, setDepartureDate] = useState('2026-01-11');

  const handleFind = () => {
    alert(`Searching flight ${flightNumber} on ${departureDate}`);
    // Here you can call your API
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '700px', margin: '2rem auto' }}>
      
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Flight status</h1>
      <p style={{ color: '#555', marginBottom: '2rem' }}>Track a flight or check its status up to two days in advance</p>
      
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0px 4px 15px rgba(0,0,0,0.1)' }}>
        
        {/* Trip reference tabs */}
        <div style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid #ccc' }}>
          {['No', 'Yes'].map(option => (
            <div
              key={option}
              onClick={() => setHasReference(option)}
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '0.8rem 0',
                cursor: 'pointer',
                backgroundColor: hasReference === option ? '#1f3d5a' : '#fff',
                color: hasReference === option ? '#fff' : '#000',
                transition: '0.3s'
              }}
            >
              {option}
            </div>
          ))}
        </div>

        {/* Radio buttons */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ marginRight: '1rem' }}>
            <input 
              type="radio" 
              value="flightNumber" 
              checked={searchBy === 'flightNumber'} 
              onChange={() => setSearchBy('flightNumber')} 
            /> Flight number
          </label>
          <label>
            <input 
              type="radio" 
              value="originDestination" 
              checked={searchBy === 'originDestination'} 
              onChange={() => setSearchBy('originDestination')} 
            /> Origin and destination
          </label>
        </div>

        {/* Input fields */}
        {searchBy === 'flightNumber' && (
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <input 
              type="text" 
              placeholder="Sky Port flight number" 
              value={flightNumber} 
              onChange={(e) => setFlightNumber(e.target.value)}
              style={{ flex: 1, padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc' }}
            />
            <input 
              type="date" 
              value={departureDate} 
              onChange={(e) => setDepartureDate(e.target.value)}
              style={{ padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc' }}
            />
            <button 
              onClick={handleFind} 
              style={{ padding: '0.8rem 1.5rem', borderRadius: '6px', border: 'none', backgroundColor: '#1f3d5a', color: '#fff', cursor: 'pointer' }}
            >
              Find
            </button>
          </div>
        )}

        {/* Info message */}
        <div style={{ backgroundColor: '#f0f4f8', padding: '1rem', borderRadius: '6px', fontSize: '0.9rem', color: '#555' }}>
          ℹ️ Track the real-time status of a flight up to two days in advance. To search using a flight number, please use numbers only. For flights operated by partner airlines, check their website.
        </div>

      </div>
    </div>
  );
}

export default FlightStatus;
