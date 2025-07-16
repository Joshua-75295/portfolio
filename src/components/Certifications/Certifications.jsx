import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Calendar, Building, Filter } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Certifications' },
    { id: 'technical', label: 'Technical' },
    { id: 'ai', label: 'AI & Analytics' },
    { id: 'language', label: 'Language' },
    { id: 'training', label: 'Training' },
  ];

  const certifications = [
    {
      id: 1,
      title: 'Joy of Computing using Python',
      organization: 'NPTEL (IIT Madras)',
      date: '2023',
      category: 'technical',
      badge: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=100',
      verificationLink: 'https://nptel.ac.in/noc/E_Certificate/NPTEL24CS113S85580107904071151',
      skills: ['Python', 'Programming Logic', 'Problem Solving', 'Computational Thinking'],
      description: 'Comprehensive course covering Python programming fundamentals and computational problem-solving techniques.',
      level: 'Intermediate',
      validUntil: 'Lifetime'
    },
    {
      id: 2,
      title: 'AI in Human Resource Management',
      organization: 'NPTEL (IIT Madras)',
      date: '2023',
      category: 'ai',
      badge: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=100',
      verificationLink: 'https://nptel.ac.in/noc/E_Certificate/NPTEL25MG05S124600095304218413',
      skills: ['Artificial Intelligence', 'HR Analytics', 'Machine Learning', 'Business Intelligence'],
      description: 'Advanced course on AI applications in human resource management and workforce analytics.',
      level: 'Advanced',
      validUntil: 'Lifetime'
    },
    {
      id: 3,
      title: 'Business Intelligence and Analytics',
      organization: 'NPTEL (IIT Madras)',
      date: '2023',
      category: 'ai',
      badge: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=100',
      verificationLink: 'https://nptel.ac.in/noc/E_Certificate/NPTEL25CS09S24600107204218413',
      skills: ['Business Intelligence', 'Data Analytics', 'Data Visualization', 'Decision Making'],
      description: 'Comprehensive certification in business intelligence tools and analytical decision-making processes.',
      level: 'Advanced',
      validUntil: 'Lifetime'
    },
    {
      id: 4,
      title: 'MERN Stack Development Training',
      organization: 'BYTE XL',
      date: '2024',
      category: 'training',
      badge: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=100',
      verificationLink: 'https://drive.google.com/file/d/1XELka1t6gQSqLNsHRnoV7UAyapOwAxP0/view?usp=drive_link',
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
      description: 'Intensive training program covering full-stack development with MERN technologies, including project deployment.',
      level: 'Professional',
      validUntil: 'Lifetime'
    },
    {
      id: 5,
      title: 'Zoho Creator Certification',
      organization: 'Zoho Corporation',
      date: '2024',
      category: 'technical',
      badge: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=100',
      verificationLink: 'https://drive.google.com/file/d/1R7RECjuBwrAuDkGil2lRangaFMN951ga/view?usp=drive_link',
      skills: ['Low-Code Development', 'Database Design', 'Workflow Automation', 'Deluge Script'],
      description: 'Certification in low-code application development using Zoho Creator platform.',
      level: 'Professional',
      validUntil: '2026'
    },
    {
      id: 6,
      title: 'Cambridge PET (B2 Level)',
      organization: 'Cambridge Assessment English',
      date: '2022',
      category: 'language',
      badge: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=100',
      verificationLink: 'https://drive.google.com/drive/folders/1ESmxDcL6oXEORDBZZsJ6weBbvzxiov3A?usp=drive_link',
      skills: ['English Proficiency', 'Communication', 'Writing', 'Reading Comprehension'],
      description: 'B2 level English certification demonstrating upper-intermediate English language proficiency.',
      level: 'Intermediate',
      validUntil: 'Lifetime'
    }
  ];

  const filteredCertifications = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'Professional': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'Advanced': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
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
    <section id="certifications" className="py-20 bg-white dark:bg-dark-800">
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
              My <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications that validate my expertise and commitment to continuous learning
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                }`}
              >
                <Filter size={18} />
                <span className="font-medium">{filter.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Certifications Timeline */}
          <motion.div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-secondary-500 opacity-30"></div>

            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`glass p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all ${
                      index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                          <Award size={24} className="text-primary-500" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                            <Building size={14} className="mr-1" />
                            {cert.organization}
                          </p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${getLevelColor(cert.level)}`}>
                        {cert.level}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {cert.date}
                        </span>
                        <span>Valid until: {cert.validUntil}</span>
                      </div>
                      <motion.a
                        href={cert.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-1 text-primary-500 hover:text-primary-600 transition-colors"
                      >
                        <ExternalLink size={14} />
                        <span className="text-sm">Verify</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-800 shadow-lg"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certification Stats */}
          <motion.div variants={itemVariants} className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">6+</div>
              <p className="text-gray-600 dark:text-gray-400">Total Certifications</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-500 mb-2">3</div>
              <p className="text-gray-600 dark:text-gray-400">NPTEL Certifications</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">2</div>
              <p className="text-gray-600 dark:text-gray-400">Professional Level</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
              <p className="text-gray-600 dark:text-gray-400">Verified</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;