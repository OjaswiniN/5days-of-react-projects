import React from 'react';
import FAQ from './component/FAQ'; 
import faqData from './Data/faqData'; 

const App = () => {
  return (
    <div className="App">
      <h1>FAQs</h1>
      <FAQ data={faqData} />
    </div>
  );
};

export default App;
