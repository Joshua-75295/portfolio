import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Palette, Coffee } from 'lucide-react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentIcon, setCurrentIcon] = useState(0);

  const icons = [
    { Icon: Code, label: 'Coding', color: 'text-blue-500' },
    { Icon: Palette, label: 'Designing', color: 'text-purple-500' },
    { Icon: Coffee, label: 'Brewing', color: 'text-amber-500' }
  ];

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 800);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(iconInterval);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700"
        >
          <div className="text-center">
            <motion.div
              key={currentIcon}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="mb-8"
            >
              {React.createElement(icons[currentIcon].Icon, {
                size: 80,
                className: `mx-auto ${icons[currentIcon].color}`
              })}
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-display font-bold gradient-text mb-4"
            >
              Joshua Gera
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8"
            >
              {icons[currentIcon].label}...
            </motion.p>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
              className="h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full mx-auto"
              style={{ maxWidth: '200px' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;