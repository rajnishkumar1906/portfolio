import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

// Get base URL from import.meta.env or default to '/'
const BASE_URL = import.meta.env.BASE_URL || '/';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "SOFTWARE DEVELOPER",
    "DATA SCIENTIST",
    "DEVOPS ENGINEER",
    "AI ENGINEER"
  ];
  
  const speed = 100;

  useEffect(() => {
    const typeWriter = () => {
      const currentText = texts[currentTextIndex];
      
      if (isDeleting) {
        setText(currentText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
      } else {
        setText(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }

      if (!isDeleting && currentCharIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(typeWriter, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [currentCharIndex, currentTextIndex, isDeleting]);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-primary-light dark:bg-[#0f0f1b] pt-28 pb-20">
      <div className="container max-w-[1200px] mx-auto px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Column - Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-4 text-text-light dark:text-text-dark"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Hi, I am
            </motion.h2>
            
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-text-light dark:text-text-dark whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Chandini Gujju
            </motion.h1>
            
            <motion.div 
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-accent min-h-[2.5rem]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.div>

            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Passionate about leveraging data and technology to solve complex problems. 
              Experienced in full-stack development, machine learning, and cloud computing.
            </motion.p>
            
            <motion.div 
              className="flex justify-center lg:justify-start space-x-6 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <a href="https://github.com/GujjuChandini" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 dark:text-white hover:text-accent transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/chandinigujju/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 dark:text-white hover:text-accent transition-colors">
                <FaLinkedin />
              </a>
              <a href="https://leetcode.com/u/ChandiniGujju/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-800 dark:text-white hover:text-accent transition-colors">
                <FaCode />
              </a>
            </motion.div>

            <motion.a
              href="https://drive.google.com/file/d/1jQRH4ntm7mvlNbvGoM54k5ZbGFwQvozW/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-accent rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-accent/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Outer Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl animate-pulse"></div>
              
              {/* Main Image Container */}
              <motion.div
                className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-accent relative"
                whileHover={{ scale: 1.05 }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img
                  src={`${BASE_URL}chandu.jpg`}
                  alt="Chandini Gujju"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                {/* Inner Glow Effect */}
                <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-ping"></div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent/30 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full bg-accent/30 animate-pulse"></div>
              <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-accent/20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-accent/20 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
