import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Database, Wrench, BookOpen, Star, TrendingUp, Brain } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Star },
    { id: 'languages', label: 'Programming', icon: Code },
    { id: 'web', label: 'Web Tech', icon: Palette },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'ai', label: 'AI & ML', icon: Brain },
  ];

  const skills = [
    // Programming Languages
    { name: 'C', level: 90, category: 'languages', proficiency: 'Proficient' },
    { name: 'C++', level: 90, category: 'languages', proficiency: 'Proficient' },
    { name: 'SQL', level: 85, category: 'languages', proficiency: 'Intermediate' },
    { name: 'Python', level: 80, category: 'languages', proficiency: 'Intermediate' },
    { name: 'Java', level: 80, category: 'languages', proficiency: 'Intermediate' },
    { name: 'JavaScript', level: 80, category: 'languages', proficiency: 'Intermediate' },
    { name: 'HTML', level: 75, category: 'languages', proficiency: 'Basic' },
    { name: 'CSS', level: 75, category: 'languages', proficiency: 'Basic' },
    { name: 'PHP', level: 70, category: 'languages', proficiency: 'Basic' },
    
    // Web Technologies
    { name: 'HTML5', level: 85, category: 'web', proficiency: 'Advanced' },
    { name: 'CSS3', level: 85, category: 'web', proficiency: 'Advanced' },
    { name: 'React.js', level: 80, category: 'web', proficiency: 'Intermediate' },
    { name: 'Node.js', level: 75, category: 'web', proficiency: 'Intermediate' },
    { name: 'Express.js', level: 75, category: 'web', proficiency: 'Intermediate' },
    { name: 'REST APIs', level: 80, category: 'web', proficiency: 'Intermediate' },
    { name: 'XAMPP', level: 85, category: 'web', proficiency: 'Advanced' },
    
    // Database
    { name: 'MySQL', level: 85, category: 'database', proficiency: 'Advanced' },
    { name: 'MongoDB', level: 75, category: 'database', proficiency: 'Intermediate' },
    { name: 'DBMS', level: 80, category: 'database', proficiency: 'Intermediate' },
    
    // Tools
    { name: 'VS Code', level: 95, category: 'tools', proficiency: 'Expert' },
    { name: 'Git', level: 85, category: 'tools', proficiency: 'Advanced' },
    { name: 'GitHub', level: 85, category: 'tools', proficiency: 'Advanced' },
    { name: 'Zoho Creator', level: 80, category: 'tools', proficiency: 'Intermediate' },
    { name: 'Figma', level: 75, category: 'tools', proficiency: 'Intermediate' },
    { name: 'Adobe Illustrator', level: 70, category: 'tools', proficiency: 'Intermediate' },
    { name: 'FL Studio', level: 75, category: 'tools', proficiency: 'Intermediate' },
    
    // AI & ML
    { name: 'Prompt Engineering', level: 90, category: 'ai', proficiency: 'Expert' },
    { name: 'Machine Learning', level: 70, category: 'ai', proficiency: 'Intermediate' },
    { name: 'Deep Learning', level: 65, category: 'ai', proficiency: 'Intermediate' },
    { name: 'ChatGPT/LLMs', level: 95, category: 'ai', proficiency: 'Expert' },
    { name: 'Business Intelligence', level: 75, category: 'ai', proficiency: 'Intermediate' },
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case 'Expert': return 'text-green-500';
      case 'Proficient': return 'text-blue-500';
      case 'Advanced': return 'text-blue-400';
      case 'Intermediate': return 'text-yellow-500';
      case 'Basic': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-white dark:bg-dark-800">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical abilities across programming, web development, AI, and creative tools
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                  activeFilter === category.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                }`}
              >
                <category.icon size={18} />
                <span className="font-medium">{category.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className={`font-medium ${getProficiencyColor(skill.proficiency)}`}>
                      {skill.proficiency}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: index * 0.1, duration: 1 }}
                    />
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8">
              Additional Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Structures & Algorithms</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Strong foundation in DSA concepts</p>
              </div>
              <div className="glass p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Object-Oriented Programming</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">OOP principles and design patterns</p>
              </div>
              <div className="glass p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Operating Systems</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">OS concepts and system programming</p>
              </div>
              <div className="glass p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Computer Networks</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Network protocols and architecture</p>
              </div>
            </div>
          </motion.div>

          {/* Skill Summary */}
          <motion.div variants={itemVariants} className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">25+</div>
              <p className="text-gray-600 dark:text-gray-400">Technologies</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-500 mb-2">3+</div>
              <p className="text-gray-600 dark:text-gray-400">Years Learning</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">10+</div>
              <p className="text-gray-600 dark:text-gray-400">Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">8+</div>
              <p className="text-gray-600 dark:text-gray-400">Certifications</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;