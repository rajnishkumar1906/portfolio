import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Get base URL from import.meta.env or default to '/'
const BASE_URL = import.meta.env.BASE_URL || '/';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const projects = [
    {
      title: 'Portfolio',
      description: 'A personal portfolio website showcasing skills, projects, and contact information with a modern UI.',
      image: `${BASE_URL}projects/portfolio.png`,
      tags: ['Web Development', 'Reactjs', 'Nodejs', 'emailjs'],
      github: 'https://github.com/rajnishkumar1906/portfolio',
      demo: 'https://demo.com',
      category: 'web',
    },
    {
      title: 'Weather Application',
      description: 'A weather forecasting app using real-time API to display weather conditions of any city with a clean UI.',
      image: `${BASE_URL}projects/weather.png`,
      tags: ['Web Development', 'HTML', 'API Integration', 'CSS', 'JavaScript'],
      github: 'https://github.com/rajnishkumar1906/WeatherPrediction',
      demo: 'https://demo.com',
      category: 'web',
    },
    {
      title: 'AICTE App',
      description: 'An Android application developed using Kotlin, Java, and Firebase to streamline educational workflows and provide enhanced accessibility through a user-friendly interface.',
      image: `${BASE_URL}projects/aicte.png`,
      tags: ['Firebase', 'Android Development', 'Kotlin', 'Java'],
      github: 'https://github.com/rajnishkumar1906/AICTE',
      demo: 'https://demo.com',
      category: 'app',
    },
    {
      title: 'Text Summarization',
      description: 'An AI-powered summarization system using Transformers, RNNs, and NLP techniques to generate concise and context-aware summaries, optimized through PCA-driven feature selection.',
      image: `${BASE_URL}projects/text.jpg`,
      tags: ['Python', 'Machine Learning', 'RNN', 'NLTK', 'Transformer', 'PCA'],
      github: 'https://github.com/rajnishkumar1906/NLP',
      demo: 'https://demo.com',
      category: 'ml',
    },
    {
      title: 'Food Delivery App',
      description: 'Flavour Ride – A seamless food delivery app built with Kotlin and XML, featuring fast-loading screens, real-time tracking, personalized features, and secure transactions.',
      image: `${BASE_URL}projects/food.png`,
      tags: ['Kotlin', 'XML', 'Android Development'],
      github: 'https://github.com/rajnishkumar1906/FoodDelivery',
      demo: 'https://demo.com',
      category: 'app',
    },
    {
      title: 'Anomaly Detection in Financial Fraud',
      description: 'A machine learning-based system for identifying anomalies in financial data using KMeans, DBScan, and Isolation Forest algorithms, optimized for real-time fraud detection.',
      image: `${BASE_URL}projects/anamoly.png`,
      tags: ['KMeans', 'DBScan', 'Isolation Forest', 'Machine Learning'],
      github: 'https://github.com/rajnishkumar1906/Machine-learning',
      demo: 'https://demo.com',
      category: 'ml',
    }
  ]; 
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'web', label: 'Web Development' },
    { id: 'app', label: 'Android Developement' },
    //{ id: 'dsa', label: 'Data Structure and Algorithms' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust this value to control scroll distance
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
    <section id="projects" className="py-20 px-4 bg-secondary-light dark:bg-secondary-dark">
      <div className="w-full max-w-[95vw] mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-text-light dark:text-text-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div ref={ref} className="mb-8 flex justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter.id
                  ? 'bg-accent text-white'
                  : 'bg-primary-light dark:bg-primary-dark text-gray-600 dark:text-gray-300 hover:bg-accent hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

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
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card min-w-[450px] max-w-[500px] snap-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48 overflow-hidden rounded-t-lg group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 bg-transparent">
                  <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="skill-badge bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent-light dark:hover:text-white transition-colors"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent-light dark:hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  </div>
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

export default Projects; 