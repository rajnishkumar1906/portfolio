import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import images
import portfolioImg from '../public/projects/portfolio.png';
import weatherImg from '../public/projects/weather.png';
import aicteImg from '../public/projects/aicte.png';
import textImg from '../public/projects/text.jpg';
import foodImg from '../public/projects/food.png';
import anomalyImg from '../public/projects/anamoly.png';

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
      image: portfolioImg,
      tags: ['Web Development', 'Reactjs', 'Nodejs', 'emailjs'],
      github: 'https://github.com/rajnishkumar1906/portfolio',
      demo: 'https://demo.com',
      category: 'web',
    },
    {
      title: 'Weather Application',
      description: 'A weather forecasting app using real-time API to display weather conditions of any city with a clean UI.',
      image: weatherImg,
      tags: ['Web Development', 'HTML', 'API Integration', 'CSS', 'JavaScript'],
      github: 'https://github.com/rajnishkumar1906/WeatherPrediction',
      demo: 'https://demo.com',
      category: 'web',
    },
    {
      title: 'AICTE App',
      description: 'An Android application developed using Kotlin, Java, and Firebase to streamline educational workflows and provide enhanced accessibility through a user-friendly interface.',
      image: aicteImg,
      tags: ['Firebase', 'Android Development', 'Kotlin', 'Java'],
      github: 'https://github.com/rajnishkumar1906/AICTE',
      demo: 'https://demo.com',
      category: 'app',
    },
    {
      title: 'Text Summarization',
      description: 'An AI-powered summarization system using Transformers, RNNs, and NLP techniques to generate concise and context-aware summaries, optimized through PCA-driven feature selection.',
      image: textImg,
      tags: ['Python', 'Machine Learning', 'RNN', 'NLTK', 'Transformer', 'PCA'],
      github: 'https://github.com/rajnishkumar1906/NLP',
      demo: 'https://demo.com',
      category: 'ml',
    },
    {
      title: 'Food Delivery App',
      description: 'Flavour Ride – A seamless food delivery app built with Kotlin and XML, featuring fast-loading screens, real-time tracking, personalized features, and secure transactions.',
      image: foodImg,
      tags: ['Kotlin', 'XML', 'Android Development'],
      github: 'https://github.com/rajnishkumar1906/FoodDelivery',
      demo: 'https://demo.com',
      category: 'app',
    },
    {
      title: 'Anomaly Detection in Financial Fraud',
      description: 'A machine learning-based system for identifying anomalies in financial data using KMeans, DBScan, and Isolation Forest algorithms, optimized for real-time fraud detection.',
      image: anomalyImg,
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
    { id: 'app', label: 'Android Development' },
  ];

  // ... rest of your component code remains the same ...

  return (
    <section id="projects" className="py-20 px-4 bg-secondary-light dark:bg-secondary-dark">
      {/* ... other JSX remains the same ... */}
      {filteredProjects.map((project, index) => (
        <motion.div key={project.title} /* ... */>
          <div className="relative h-48 overflow-hidden rounded-t-lg group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* ... */}
          </div>
          {/* ... */}
        </motion.div>
      ))}
      {/* ... */}
    </section>
  );
};

export default Projects;
