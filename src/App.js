import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
