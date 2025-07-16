import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, X, Calendar, User, Target, Lightbulb, CheckCircle } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Park Pal - Parking Management System',
      description: 'Full-stack web application for automated parking management',
      shortDescription: 'Automated parking management system with real-time monitoring and billing',
      image: 'https://images.pexels.com/photos/753876/pexels-photo-753876.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'XAMPP'],
      liveDemo: '#',
      github: 'https://github.com/Joshua-75295/park-pal',
      category: 'Full Stack',
      problem: 'Parking management is a real-world issue in urban areas, leading to congestion, inefficiency, and revenue loss. Many parking lots still rely on manual ticketing, leading to long queues, mismanagement, and fraud.',
      solution: 'Developed a full-stack web application for automated parking management with admin dashboard, user authentication, billing automation, AJAX-based validations, receipt generation, and modular backend architecture.',
      challenges: [
        'Implementing real-time parking slot monitoring',
        'Building secure user authentication system',
        'Creating automated billing calculations',
        'Preventing duplicate entries with AJAX validations'
      ],
      results: [
        'Reduced manual ticketing time by 70%',
        'Eliminated duplicate entry issues',
        'Automated receipt generation system',
        'Real-time parking slot availability'
      ],
      duration: '4 months',
      role: 'Full Stack Developer',
      features: [
        'Admin Dashboard with real-time monitoring',
        'User Authentication for staff & admins',
        'Automated billing based on time',
        'AJAX-based validations',
        'PDF receipt generation',
        'Modular PHP backend architecture'
      ]
    },
    {
      id: 2,
      title: 'Finance Manager - Personal Budget Tracker',
      description: 'Lightweight, mobile-friendly finance tracking application',
      shortDescription: 'Personal budget tracker with expense categorization and analytics',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Chart.js'],
      liveDemo: '#',
      github: 'https://github.com/Joshua-75295/finance-tracker',
      category: 'Web App',
      problem: 'Many people struggle with personal finance tracking, leading to overspending and poor savings. Existing apps are either too complex or lack offline functionality.',
      solution: 'Built a lightweight, mobile-friendly finance tracker with expense & income logging, local storage support, visual analytics, and responsive design.',
      challenges: [
        'Implementing offline functionality with local storage',
        'Creating intuitive expense categorization',
        'Building responsive charts for mobile devices',
        'Ensuring data persistence across sessions'
      ],
      results: [
        'Improved personal budgeting efficiency',
        'Visual spending pattern analysis',
        'Offline functionality for continuous use',
        'Mobile-optimized user experience'
      ],
      duration: '2 months',
      role: 'Frontend Developer',
      features: [
        'Expense & Income logging with categories',
        'Local storage for offline functionality',
        'Visual analytics with charts',
        'Responsive mobile-friendly design',
        'Data export functionality'
      ]
    },
    {
      id: 3,
      title: 'Event Management System',
      description: 'Low-code event management platform built with Zoho Creator',
      shortDescription: 'Comprehensive event management system using Zoho Creator',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Zoho Creator', 'Deluge Script', 'Database Design', 'Workflow Automation'],
      liveDemo: '#',
      github: '#',
      category: 'Low-Code',
      problem: 'Event organizers needed a comprehensive system to manage registrations, attendees, schedules, and communications without complex development.',
      solution: 'Developed a complete event management system using Zoho Creator with automated workflows, registration management, and real-time reporting.',
      challenges: [
        'Learning Zoho Creator platform quickly',
        'Designing complex workflow automations',
        'Creating user-friendly interfaces',
        'Implementing real-time notifications'
      ],
      results: [
        'Streamlined event registration process',
        'Automated attendee management',
        'Real-time event analytics',
        'Reduced manual administrative work by 80%'
      ],
      duration: '1 month',
      role: 'Low-Code Developer',
      features: [
        'Event registration and management',
        'Automated email notifications',
        'Attendee tracking and analytics',
        'Schedule management',
        'Real-time reporting dashboard'
      ]
    },
    {
      id: 4,
      title: 'Myntra Clone - E-commerce Platform',
      description: 'Full-stack e-commerce clone built during MERN training',
      shortDescription: 'E-commerce platform clone with modern features',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
      liveDemo: '#',
      github: '#',
      category: 'MERN Stack',
      problem: 'Need to demonstrate full-stack development skills by building a complete e-commerce platform with modern web technologies.',
      solution: 'Built a comprehensive e-commerce clone with product catalog, user authentication, shopping cart, and payment integration using MERN stack.',
      challenges: [
        'Learning MERN stack technologies',
        'Implementing secure user authentication',
        'Building responsive product catalog',
        'Creating efficient state management'
      ],
      results: [
        'Successfully completed MERN training',
        'Built production-ready e-commerce features',
        'Gained expertise in full-stack development',
        'Implemented modern web development practices'
      ],
      duration: '3 months',
      role: 'MERN Stack Developer',
      features: [
        'Product catalog with search and filters',
        'User authentication and profiles',
        'Shopping cart and wishlist',
        'Order management system',
        'Responsive design for all devices'
      ]
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my development projects solving real-world problems
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group glass rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-2">
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} className="text-white" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github size={16} className="text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-primary-500/20 text-primary-500 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    View Case Study
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h2>
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-primary-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                      <p className="font-medium text-gray-900 dark:text-white">{selectedProject.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="text-primary-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Role</p>
                      <p className="font-medium text-gray-900 dark:text-white">{selectedProject.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="text-primary-500" size={20} />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Category</p>
                      <p className="font-medium text-gray-900 dark:text-white">{selectedProject.category}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Target size={20} className="text-primary-500 mr-2" />
                      Problem Statement
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Lightbulb size={20} className="text-primary-500 mr-2" />
                      Solution Approach
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {selectedProject.solution}
                    </p>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-500" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Challenges Faced
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Results & Impact
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.results.map((result, index) => (
                        <div key={index} className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <CheckCircle size={20} className="text-green-500" />
                          <span className="text-gray-700 dark:text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;