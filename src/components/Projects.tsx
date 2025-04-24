import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const base = import.meta.env.BASE_URL || '/';

// Define image paths using BASE_URL
const portfolioImg = `${base}projects/portfolio.png`;
const weatherImg = `${base}projects/weather.png`;
const aicteImg = `${base}projects/aicte.png`;
const textImg = `${base}projects/text.jpg`;
const foodImg = `${base}projects/food.png`;
const anomalyImg = `${base}projects/anamoly.png`;

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string;
}

const Projects = () => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
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

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20 px-4 bg-secondary-light dark:bg-secondary-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-text-light dark:text-text-dark">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Click on them to learn more.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-accent text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent transition-colors"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark line-clamp-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;