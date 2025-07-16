import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Coffee, Music, Book, Globe, Gamepad2, Brush } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const personality = [
    'Quick Learner', 'Problem Solver', 'Creative Thinker', 'Team Leader',
    'Analytical', 'Detail-oriented', 'Adaptable', 'Innovative'
  ];

  const languages = [
    { name: 'Telugu', level: 100 },
    { name: 'English', level: 95 },
    { name: 'Hindi', level: 60 },
    { name: 'Japanese', level: 40 },
    { name: 'Spanish', level: 35 },
  ];

  const hobbies = [
    { icon: Code, name: 'Programming', color: 'text-blue-500' },
    { icon: Brush, name: 'Digital Art', color: 'text-purple-500' },
    { icon: Music, name: 'Music Production', color: 'text-green-500' },
    { icon: Book, name: 'Anime & Manga', color: 'text-red-500' },
    { icon: Gamepad2, name: 'Gaming', color: 'text-yellow-500' },
    { icon: Globe, name: 'Tech Research', color: 'text-cyan-500' },
  ];

  const education = [
    {
      year: '2022-Present',
      degree: 'B.Tech in Computer Science and Business Systems',
      institution: 'VFSTR, Guntur',
      description: 'CGPA: 8.0 | Relevant coursework: DSA, DBMS, OOP, OS, Computer Networks, Software Engineering, Machine Learning, Deep Learning'
    },
    {
      year: '2020-2022',
      degree: 'Intermediate (MPC)',
      institution: 'APMS, Karempudi',
      description: 'AP Board | Score: 729/1000'
    },
    {
      year: '2019-2020',
      degree: 'SSC (10th Grade)',
      institution: 'St. John\'s EM High School, Karempudi',
      description: 'AP Board | GPA: 10.0/10'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A passionate developer from Guntur, Andhra Pradesh, India, with a love for creating innovative digital solutions
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            
            <motion.div variants={itemVariants} className="order-2 md:order-1">
  <div className="relative">
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
      {/* Replaced with actual photo */}
      <img
        src="/Joshua22.jpg"
        alt="Joshua"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center">
      <Code size={32} className="text-white" />
    </div>
  </div>
</motion.div>


            {/* Content */}
            <motion.div variants={itemVariants} className="order-1 md:order-2 space-y-6">
              <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
                My Story
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a highly motivated B.Tech student in Computer Science and Business Systems at VFSTR, Guntur, 
                with expertise in full-stack development, object-oriented programming, and database management. 
                My journey started with curiosity about technology and evolved into a passion for solving real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in AI-driven automation, prompt engineering, and building scalable applications. 
                When I'm not coding, you'll find me creating digital art, producing music in FL Studio, 
                exploring anime and manga, or researching the latest AI advancements.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span>📍 Guntur, Andhra Pradesh, India</span>
                <span>🎓 VFSTR Student</span>
                <span>💼 Available for Opportunities</span>
              </div>
            </motion.div>
          </div>

          {/* Personality Traits */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 text-center">
              Personality Traits
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {personality.map((trait, index) => (
                <motion.div
                  key={trait}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
                  className="glass px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{trait}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages & Hobbies */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Languages */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Languages Known
              </h3>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{lang.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.level}%` } : { width: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hobbies */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Hobbies & Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center hover:shadow-lg transition-all"
                  >
                    <hobby.icon size={32} className={`mx-auto mb-2 ${hobby.color}`} />
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">{hobby.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 text-center">
              Education
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-secondary-500 opacity-30"></div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: index * 0.3 }}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-5/12">
                    <div className={`glass p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all ${
                      index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                    }`}>
                      <div className="text-primary-500 font-bold mb-2">{edu.year}</div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm">{edu.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* My Approach */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
              My Approach
            </h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I believe in combining technical expertise with creative problem-solving to deliver solutions that 
                not only work efficiently but also provide exceptional user experiences. My approach focuses on 
                continuous learning, adapting to new technologies, and building scalable applications.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research & Learn</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Understanding new technologies and market requirements
                  </p>
                </div>
                <div className="glass p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Design & Plan</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Creating intuitive solutions with proper architecture
                  </p>
                </div>
                <div className="glass p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Build & Scale</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Developing robust and scalable applications
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;