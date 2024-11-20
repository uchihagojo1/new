// src/App.js
import { Link } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './Components/Navbar'; 
import Donate from "./pages/Donate";
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
    
      <div>
        <Navbar /> {/* Use the Navbar component */}
      
        <Routes>
        <Route path="/home" element={<Home />} />
<Route path="/contact" element={<Contact />} />
<Route path="/about" element={<About />} />
<Route path="/Donate" element={<Donate />} />
<Route path="/Donate Now" element={<Donate />} />

        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
