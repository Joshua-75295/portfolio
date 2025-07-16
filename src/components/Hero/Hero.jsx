import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Download, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import TypeWriter from './TypeWriter';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver', 'Creative Thinker'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-900 dark:to-dark-800">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">
                  <TypeWriter text="Gera Joshua" />
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
              <span>I'm a </span>
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="gradient-text font-semibold"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed"
            >
              A highly motivated B.Tech student in Computer Science and Business Systems with expertise in full-stack development, 
              AI-driven automation, and building scalable applications. Passionate about solving real-world problems through technology.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center space-x-2 px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-all"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-6">
              <motion.a
                href="https://github.com/Joshua-75295"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-all hover:shadow-lg"
              >
                <Github size={24} className="text-gray-700 dark:text-gray-300" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/joshua-gera"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 dark:bg-dark-700 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-all hover:shadow-lg"
              >
                <Linkedin size={24} className="text-gray-700 dark:text-gray-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-dark-800"></div>
              </motion.div>
              
              <motion.div
  whileHover={{ scale: 1.05 }}
  className="relative z-10 w-80 h-80 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-dark-700 dark:to-dark-600 flex items-center justify-center overflow-hidden shadow-2xl"
>
  <img
    src="/joshua.jpg"
    alt="Joshua Gera"
    className="w-full h-full object-cover"
  />
</motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400"
        >
          <span className="text-sm">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;