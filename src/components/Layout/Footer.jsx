import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Joshua-75295', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/joshua-gera', label: 'LinkedIn' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'joshuagera2006@gmail.com', href: 'mailto:joshuagera2006@gmail.com' },
    { icon: Phone, text: '+91-95814-80540', href: 'tel:+919581480540' },
    { icon: MapPin, text: 'Guntur, Andhra Pradesh, India' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-display font-bold text-2xl gradient-text mb-4"
            >
              Gera Joshua
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              B.Tech student in Computer Science and Business Systems at VFSTR, Guntur. 
              Passionate about full-stack development, AI-driven automation, and building scalable applications. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white dark:bg-dark-800 rounded-lg shadow-md hover:shadow-lg transition-all text-gray-600 dark:text-gray-400 hover:text-primary-500"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <info.icon size={16} className="text-primary-500" />
                  {info.href ? (
                    <motion.a
                      href={info.href}
                      whileHover={{ x: 2 }}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors text-sm"
                    >
                      {info.text}
                    </motion.a>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
            © {currentYear} Gera Joshua. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-1"
            >
              <Heart size={16} className="text-red-500" />
            </motion.span>
            using React & Tailwind CSS
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
            <span>🎓 VFSTR Student</span>
            <span>💼 Available for Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;