import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Extracurricular from './components/Extracurricular';
import Certifications from './components/Certifications';
import VideoCV from './components/VideoCV';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <About />
              <Education />
              <Skills />
              <Projects />
              <Extracurricular />
              <Certifications />
              <VideoCV />
              <Contact />
            </motion.div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 