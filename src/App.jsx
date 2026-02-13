import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import PortfolioLayout from './PortfolioLayout';

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/portfolio" element={<PortfolioLayout />} />
    </Routes>
  );
};

export default App;