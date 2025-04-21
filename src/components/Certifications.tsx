import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Get base URL from import.meta.env or default to '/'
const BASE_URL = import.meta.env.BASE_URL || '/';

const certifications = [
  {
    title: "Cloud Computing Certificate",
    platform: "NPTEL Certificate",
    image: `${BASE_URL}certifications/cloud.png`
  },
  {
    title: "Data Structures and Algorithms Certificate",
    platform: "Programming Pathshala",
    image: `${BASE_URL}certifications/dsa.png`
  },
  {
    title: "Full Stack Certificate",
    platform: "LinkedIn Certificate",
    image: `${BASE_URL}certifications/fullstack.png`
  },
  {
    title: "Generative AI Certificate",
    platform: "Coursera",
    image: `${BASE_URL}certifications/generativeai.png`
  },
  {
    title: "Large Language Models Certificate",
    platform: "Coursera",
    image: `${BASE_URL}certifications/llm.png`
  },
  {
    title: "MongoDB Certificate",
    platform: "MongoDB Platform",
    image: `${BASE_URL}certifications/mongo.png`
  },
  {
    title: "SQL for Data Science Certificate",
    platform: "Great Learning Platform",
    image: `${BASE_URL}certifications/mysql.png`
  },
  {
    title: "Artificial Intelligence Certificate",
    platform: "Teachnook Platform",
    image: `${BASE_URL}certifications/teachnook.png`
  },
  {
    title: "Prompt Engineering Certificate",
    platform: "Coursera",
    image: `${BASE_URL}certifications/prompt.png`
  },
  {
    title: "Tableau Certificate",
    platform: "Coursera",
    image: `${BASE_URL}certifications/tableau.png`
  }
];

const Certifications = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <section id="certifications" className="py-20 bg-secondary-light dark:bg-secondary-dark">
      <div className="w-full max-w-[95vw] mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-text-light dark:text-text-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>
        
        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 dark:bg-black/50 hover:bg-gray-800/70 dark:hover:bg-black/70 text-text-light dark:text-text-dark p-3 rounded-full transition-all duration-300"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
          )}

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 pb-8 scrollbar-hide snap-x snap-mandatory px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="flex-none min-w-[450px] max-w-[500px] snap-center bg-white/5 dark:bg-black/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 w-full group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-text-light dark:text-text-dark">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {cert.platform}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 dark:bg-black/50 hover:bg-gray-800/70 dark:hover:bg-black/70 text-text-light dark:text-text-dark p-3 rounded-full transition-all duration-300"
              aria-label="Scroll right"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 
