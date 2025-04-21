import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Get base URL from import.meta.env or default to '/'
const BASE_URL = import.meta.env.BASE_URL || '/';

const activities = [
  {
    title: "Worked in NGO",
    description: "Contributed to social welfare initiatives and community development programs, helping underprivileged communities through various outreach activities.",
    image: `${BASE_URL}assets/ngo.jpg`
  },
  {
    title: "Participated in Smart India Hackathon (SIH)",
    description: "Competed in the prestigious national-level hackathon, developing innovative solutions for real-world problems with a team of talented developers.",
    image: `${BASE_URL}assets/sih.png`
  },
  {
    title: "1st Runner-up in Code Carva Hackathon",
    description: "Achieved second place in the Code Help organized hackathon, showcasing problem-solving skills and technical expertise in a competitive environment.",
    image: `${BASE_URL}assets/codecarvan.jpg`
  },
  {
    title: "Worked as a Gram Volunteer",
    description: "Volunteered in Kesupuram, Srikakulam, contributing to community welfare and rural development initiatives.",
    image: `${BASE_URL}assets/volunteer.jpg`
  }
];

const Extracurricular = () => {
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
    <section id="extracurricular" className="py-20 bg-secondary-light dark:bg-secondary-dark">
      <div className="w-full max-w-[95vw] mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-text-light dark:text-text-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Extracurricular Activities
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
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className="flex-none min-w-[450px] max-w-[500px] snap-center bg-white/5 dark:bg-black/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 w-full group">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {activity.description}
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

export default Extracurricular; 