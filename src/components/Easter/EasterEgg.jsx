import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Sparkles, Trophy, Heart } from 'lucide-react';

const EasterEgg = () => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [keySequence, setKeySequence] = useState([]);
  const [achievements, setAchievements] = useState([]);

  // Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  const gameAchievements = [
    { id: 1, name: 'Code Explorer', description: 'Found the secret code!', icon: Star },
    { id: 2, name: 'Pixel Perfect', description: 'Attention to detail matters', icon: Sparkles },
    { id: 3, name: 'Easter Hunter', description: 'Found the hidden easter egg', icon: Trophy },
    { id: 4, name: 'Curiosity Driven', description: 'Explored beyond the surface', icon: Heart },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newSequence = [...keySequence, e.code].slice(-konamiCode.length);
      setKeySequence(newSequence);

      if (newSequence.join(',') === konamiCode.join(',')) {
        setIsTriggered(true);
        setAchievements(gameAchievements);
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
          setIsTriggered(false);
        }, 10000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keySequence]);

  return (
    <AnimatePresence>
      {isTriggered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsTriggered(false)}
        >
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="bg-white dark:bg-dark-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-primary-200 dark:border-primary-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Trophy size={48} className="text-yellow-500" />
              </motion.div>
              <h2 className="text-2xl font-bold gradient-text mb-2">
                🎉 Congratulations! 🎉
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                You found the secret easter egg! Here's your achievement collection:
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg border border-primary-200 dark:border-primary-800"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-2 bg-white dark:bg-dark-700 rounded-full"
                  >
                    <achievement.icon size={20} className="text-primary-500" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {achievement.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsTriggered(false)}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-medium hover:shadow-lg transition-all"
              >
                Awesome! Close
              </motion.button>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
              <p>Hint: Try the Konami Code on other pages too! ↑↑↓↓←→←→BA</p>
            </div>
          </motion.div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: -100,
                x: Math.random() * 200 - 100
              }}
              transition={{ 
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity 
              }}
              className="absolute bottom-0 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;