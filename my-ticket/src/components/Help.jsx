import React, { useState } from 'react';

// Sample FAQ data
const faqData = [
  {
    id: 1,
    question: 'What is your project about?',
    answer: 'Our project is focused on creating an interactive and dynamic platform using React.'
  },
  {
    id: 2,
    question: 'How can I contribute?',
    answer: 'You can contribute by submitting issues, pull requests, or suggesting features on our GitHub repository.'
  },
  {
    id: 3,
    question: 'Is this project open-source?',
    answer: 'Yes, the project is completely open-source and available under the MIT license.'
  },
  {
    id: 4,
    question: 'How can I report bugs?',
    answer: 'Bugs can be reported directly on our GitHub issues page or via the contact form on our website.'
  },
];

const FAQ = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setSelectedFAQ(selectedFAQ === id ? null : id);
  };

  return (
    <div className="faq-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Frequently Asked Questions</h2>
      {faqData.map((faq) => (
        <div key={faq.id} style={{ marginBottom: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <button
            onClick={() => toggleFAQ(faq.id)}
            style={{
              width: '100%',
              padding: '15px',
              textAlign: 'left',
              background: selectedFAQ === faq.id ? '#f0f0f0' : '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '8px'
            }}
          >
            {faq.question}
          </button>
          {selectedFAQ === faq.id && (
            <div style={{ padding: '15px', background: '#f9f9f9' }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
