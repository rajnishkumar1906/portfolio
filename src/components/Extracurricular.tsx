import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const base = import.meta.env.BASE_URL || '/';

// Define image path directly using BASE_URL
const ngoImage = `${base}assets/ngo.jpg`;

const activities = [
  {
    title: "Worked in NGO",
    description: "Contributed to social welfare initiatives and community development programs, helping underprivileged communities through various outreach activities.",
    image: ngoImage
  },
  // Add more activities as needed
];

const Extracurricular = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      
      // Update current index based on scroll position
      const cardWidth = 450; // Width of each card
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  // Handle touch events for swipe support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      scroll('right');
    }
    if (touchStart - touchEnd < -50) {
      scroll('left');
    }
  };

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
          Extracurricular/Achievements
        </motion.h2>
        
        <div className="relative">
          {activities.length > 2 && showLeftArrow && (
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
            className={`flex ${
              activities.length === 1 
                ? 'justify-center' 
                : activities.length === 2 
                  ? 'justify-around' 
                  : 'overflow-x-auto gap-8 pb-8 scrollbar-hide snap-x snap-mandatory px-4'
            }`}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              width: '100%',
              maxWidth: '100%',
              WebkitOverflowScrolling: 'touch'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className={`${
                  activities.length === 1 
                    ? 'w-full max-w-[500px]' 
                    : activities.length === 2 
                      ? 'w-[45%]' 
                      : 'flex-none w-[280px] sm:w-[320px] md:w-[360px] snap-center'
                } bg-white/5 dark:bg-black/10 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
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
                  <h3 className="text-xl font-semibold mb-3 text-text-light dark:text-text-dark line-clamp-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {activities.length > 2 && showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/50 dark:bg-black/50 hover:bg-gray-800/70 dark:hover:bg-black/70 text-text-light dark:text-text-dark p-3 rounded-full transition-all duration-300"
              aria-label="Scroll right"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Scroll indicators */}
          {activities.length > 2 && (
            <div className="flex justify-center gap-2 mt-4">
              {activities.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-accent w-4'
                      : 'bg-gray-400 dark:bg-gray-600'
                  }`}
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      const cardWidth = activities.length === 1 ? 500 : activities.length === 2 ? 450 : 360;
                      scrollContainerRef.current.scrollTo({
                        left: index * cardWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
