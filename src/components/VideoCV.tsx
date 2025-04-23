import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa'; // Removed unused FaPause

const VideoCV = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [canEmbed, setCanEmbed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = "https://www.kapwing.com/68093746c9470c85c71cd5bc/studio/editor/sharing";
  const embedUrl = videoUrl.replace('/sharing', '/embed');
  const thumbnailUrl = `${import.meta.env.BASE_URL || ''}raj.jpg`;

  useEffect(() => {
    // Check if video can be embedded
    const checkEmbedSupport = async () => {
      try {
        const response = await fetch(embedUrl, { method: 'HEAD' });
        setCanEmbed(response.ok);
      } catch (error) {
        setCanEmbed(false);
      }
    };

    checkEmbedSupport();
  }, [embedUrl]); // Added embedUrl to dependency array

  // Removed unused togglePlay function since it's not being used in the JSX
  // const togglePlay = () => {
  //   if (videoRef.current) {
  //     if (isPlaying) {
  //       videoRef.current.pause();
  //     } else {
  //       videoRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

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
            className="relative max-w-4xl mx-auto rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 dark:bg-black/10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {canEmbed ? (
              <div className="relative aspect-video">
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video CV"
                />
              </div>
            ) : (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
              >
                <div className="relative aspect-video">
                  <img
                    src={thumbnailUrl}
                    alt="Video CV Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 dark:from-black/40 dark:to-black/70 flex items-center justify-center group-hover:bg-black/30 dark:group-hover:bg-black/50 transition-colors duration-300">
                    <div className="flex flex-col items-center gap-6">
                      <motion.div
                        className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white text-3xl shadow-lg shadow-accent/30 group-hover:shadow-accent/50 transition-shadow duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaPlay />
                      </motion.div>
                      <motion.button
                        className="px-6 py-3 bg-accent/90 hover:bg-accent text-white font-semibold rounded-full flex items-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Watch on Kapwing</span>
                        <FaExternalLinkAlt className="text-sm" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </a>
            )}
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
