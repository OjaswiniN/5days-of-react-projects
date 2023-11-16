import React from 'react';
import '../component/faq.css';

const FAQ = ({ data }) => {
  return (
    <div className="faq-container">
      {data.map((item, index) => (
        <div key={index} className="faq-item">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
