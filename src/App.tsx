import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Events from './pages/Events';
import Programs from './pages/Programs';
import VirtualClinic from './pages/VirtualClinic';
import JoinUs from './pages/JoinUs';
import Resources from './pages/Resources';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/virtual-clinic" element={<VirtualClinic />} />
            <Route path="/events" element={<Events />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;