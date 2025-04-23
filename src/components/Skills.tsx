import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaPython,
  FaJava,
  FaGitAlt,
  FaDatabase,
  FaCode,
} from 'react-icons/fa';
import {
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiFirebase,
  SiFlask,
  SiKotlin,
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'C', icon: <FaCode />, level: 95},
        { name: 'C++', icon: <FaCode />, level: 95},
        { name: 'Python', icon: <FaPython />, level: 90},
        { name: 'Java', icon: <FaJava />, level: 85},
      ],
    },
    {
      category: 'Machine Learning',
      items: [
        { name: 'Python Libraries', icon: <FaPython />, level: 95},
        { name: 'Flask', icon: <SiFlask />, level: 95},
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 85},
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 80},
      ],
    },
    {
      category: 'Web Development',
      items: [
        { name: 'HTML', icon: <SiHtml5 />, level: 95 },
        { name: 'CSS', icon: <SiCss3 />, level: 95 },
      ],
    },
    {
      category: 'Data Science',
      items: [
        { name: 'Pandas', icon: <SiPandas />, level: 90 },
        { name: 'NumPy', icon: <SiNumpy />, level: 85 },
      ],
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'GitHub', icon: <SiGithub />, level: 85 },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL', icon: <FaDatabase />, level: 95 },
        { name: 'Firebase', icon: <SiFirebase />, level: 90},
      ],
    },
    {
      category: 'Android Developement',
      items: [
        { name: 'Kotlin', icon: <SiKotlin />, level: 95},
      ],
    },
    {
      category: 'Fundamentals',
      items: [
        { name: 'Computer Networks', icon: <FaDatabase />, level: 90 },
        { name: 'DBMS', icon: <FaDatabase />, level: 90 },
        { name: 'Operating System', icon: <FaDatabase />, level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        {skill.icon}
                        {skill.name}
                      </span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <motion.div
                        className="bg-accent h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.1),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
