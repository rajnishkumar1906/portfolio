import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaRobot, FaDatabase, FaChartLine, FaServer } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techStack = [
  { name: 'Data Science', icon: <FaChartLine />, level: 95 },
    { name: 'Database', icon: <FaDatabase />, level: 95 },
    { name: 'Machine Learning', icon: <FaRobot />, level: 90 },
    { name: 'DevOps', icon: <FaServer />, level: 90 },
    { name: 'Full Stack Web Development', icon: <FaLaptopCode />, level: 80 },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-text-light dark:text-text-dark">My Journey</h3>
            <p className="text-gray-800 dark:text-gray-300 mb-6 font-medium">
              I'm a passionate Computer Science student with a strong interest in AI and Machine Learning.
              My journey in tech started with building simple websites and has evolved into creating
              complex machine learning models and full-stack applications.
            </p>
            <div className="space-y-4">
              {techStack.map((tech, index) => (
                <div key={tech.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-text-light dark:text-text-dark">
                      {tech.icon}
                      {tech.name}
                    </span>
                    <span className="text-text-light dark:text-text-dark">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-secondary-light dark:bg-secondary rounded-full h-2">
                    <motion.div
                      className="bg-accent h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${tech.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="glass-card"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-text-light dark:text-text-dark">Fun Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                <span className="text-gray-800 dark:text-gray-300">Built my first website when I was just 16 🚀</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                <span className="text-gray-800 dark:text-gray-300">Participated in over 5 exciting hackathons 🧠💻</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                <span className="text-gray-800 dark:text-gray-300">Actively contribute to open-source projects 🤝</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">•</span>
                <span className="text-gray-800 dark:text-gray-300">Passionate about building meaningful digital solutions ❤️🌐</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
