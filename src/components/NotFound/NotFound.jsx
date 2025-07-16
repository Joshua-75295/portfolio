import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, FileX } from 'lucide-react';

const NotFound = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-900 dark:to-dark-800 flex items-center justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-2xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <FileX size={120} className="text-primary-500 mx-auto" />
          </motion.div>
          <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400">
            Don't worry, even the best developers encounter 404s. Let's get you back on track!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/'}
              className="flex items-center space-x-2 px-6 py-3 border border-primary-500 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
            >
              <Home size={20} />
              <span>Home</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Skills', href: '#skills' },
              { name: 'Contact', href: '#contact' },
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="p-4 glass rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all text-center"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            If you believe this is an error, please{' '}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="text-primary-500 hover:text-primary-600 transition-colors"
            >
              contact me
            </motion.a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;