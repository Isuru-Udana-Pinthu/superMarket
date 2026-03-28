import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Home';
import ProductDetails from './ProductDetails';
import './App.css';

function App() {
  useEffect(() => {
    // Only load the script if it hasn't been added yet
    if (!document.querySelector('script[src="/js/app.bundle.js"]')) {
      const script = document.createElement('script');
      script.src = "/js/app.bundle.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
