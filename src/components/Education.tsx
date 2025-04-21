import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: 'Bachelor of Science and Technologyin Computer Science',
      university: 'Lovely Professional University',
      year: '2022 - 2026',
      gpa: '8.81/10.0',
      description: 'Specialized in Data Science and Machine Learning. Relevant coursework includes Data Structures, Algorithms, Computer Vision, and Natural Language Processing.',
    },
    {
      degree: 'Intermediate',
      school: 'Sri Chaitanya Girls Junior College',
      year: '2019 - 2021',
      gpa: '95.9%',
      description: 'Graduated with honors. Participated in various STEM competitions.',
    },
    {
      degree: 'Secondary School',
      school: 'R.K.Model School',
      year: '2018 - 2019',
      gpa: '10.0/10.0',
      description: 'Completed my secondary education with a perfect score.',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary-light dark:bg-secondary-dark">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-text-light dark:text-text-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div ref={ref} className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-full">
                  {index === 0 ? <FaUniversity size={24} /> : <FaGraduationCap size={24} />}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{edu.university || edu.school}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{edu.year}</span>
                    <span>•</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 
