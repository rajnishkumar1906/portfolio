import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_7n1p208', // Your service ID
        'template_82eneem', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'Mt9sVd5Z0J69U1QdQ' // Your public key
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Error sending email:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="min-h-screen w-full bg-primary-light dark:bg-[#0f0f1b] py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-text-light dark:text-text-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Column - Contact Information */}
          <motion.div
            className="space-y-8 lg:w-[40%] lg:mx-auto"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href="mailto:gujjuchandini00@gmail.com"
                className="flex items-center space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <FaEnvelope className="text-accent text-xl" />
                </div>
                <div className="flex-1 border-l-2 border-accent/30 pl-4 group-hover:border-accent transition-colors">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
                  <p className="text-text-light dark:text-white group-hover:text-accent transition-colors">gujjuchandini00@gmail.com</p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+919347876828"
                className="flex items-center space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <FaPhone className="text-accent text-xl" />
                </div>
                <div className="flex-1 border-l-2 border-accent/30 pl-4 group-hover:border-accent transition-colors">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Phone</p>
                  <p className="text-text-light dark:text-white group-hover:text-accent transition-colors">+91 93478 76828</p>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/chandinigujju/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <FaLinkedin className="text-accent text-xl" />
                </div>
                <div className="flex-1 border-l-2 border-accent/30 pl-4 group-hover:border-accent transition-colors">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">LinkedIn</p>
                  <p className="text-text-light dark:text-white group-hover:text-accent transition-colors">Chandini Gujju</p>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/chandini_gujju/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <FaInstagram className="text-accent text-xl" />
                </div>
                <div className="flex-1 border-l-2 border-accent/30 pl-4 group-hover:border-accent transition-colors">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Instagram</p>
                  <p className="text-text-light dark:text-white group-hover:text-accent transition-colors">@chandini_gujju</p>
                </div>
              </motion.a>

              {/* Twitter */}
              <motion.a
                href="https://twitter.com/ChandiniGujju"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <FaTwitter className="text-accent text-xl" />
                </div>
                <div className="flex-1 border-l-2 border-accent/30 pl-4 group-hover:border-accent transition-colors">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Twitter</p>
                  <p className="text-text-light dark:text-white group-hover:text-accent transition-colors">@ChandiniGujju</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-white/10 dark:bg-[#1a1a2e] p-8 rounded-xl shadow-2xl lg:w-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-[#0f0f1b] border border-accent/30 text-text-light dark:text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-600 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-[#0f0f1b] border border-accent/30 text-text-light dark:text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-600 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-[#0f0f1b] border border-accent/30 text-text-light dark:text-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-accent text-white rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-accent/50 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center"
                >
                  {error}
                </motion.p>
              )}

              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
