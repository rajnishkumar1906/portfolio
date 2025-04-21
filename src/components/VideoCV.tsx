import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay, FaPause } from 'react-icons/fa';

// Get base URL from import.meta.env or default to '/'
const BASE_URL = import.meta.env.BASE_URL || '/';

const VideoCV = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="video-cv" className="py-20 px-4 bg-primary-light dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-text-light dark:text-text-dark"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Video CV
        </motion.h2>

        <div ref={ref} className="relative">
          <motion.div
            className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={`${BASE_URL}vite.mp4`}
              title="Video CV"
              playsInline
            />
            <div className="absolute inset-0 bg-black/30 dark:bg-black/50 flex items-center justify-center">
              <motion.button
                className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl"
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-600 dark:text-gray-300">
              Watch my video CV to learn more about my journey, skills, and aspirations.
              This video provides a personal introduction to who I am and what I can bring to your team.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoCV; 
