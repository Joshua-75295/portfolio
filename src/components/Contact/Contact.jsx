import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    hasError: false,
    errors: {}
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'joshuagera2006@gmail.com',
      link: 'mailto:joshuagera2006@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91-95814-80540',
      link: 'tel:+919581480540'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Guntur, Andhra Pradesh, India',
      link: 'https://maps.google.com/?q=Guntur,Andhra+Pradesh,India'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/Joshua-75295',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/joshua-gera',
      color: 'hover:text-blue-600'
    }
  ];

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formState.errors[name]) {
      setFormState(prev => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: ''
        }
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors,
        hasError: true
      }));
      return;
    }
    
    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      hasError: false,
      errors: {}
    }));
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true
      }));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({
          ...prev,
          isSubmitted: false
        }));
      }, 5000);
      
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        hasError: true
      }));
    }
  };

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
    <section id="contact" className="py-20 bg-white dark:bg-dark-800">
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
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear from you. Send me a message and let's discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formState.errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:border-primary-500'
                        } bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors`}
                        placeholder="Your Name"
                      />
                      {formState.errors.name && (
                        <p className="mt-1 text-sm text-red-500">{formState.errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formState.errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:border-primary-500'
                        } bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors`}
                        placeholder="your.email@example.com"
                      />
                      {formState.errors.email && (
                        <p className="mt-1 text-sm text-red-500">{formState.errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formState.errors.subject
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:border-primary-500'
                      } bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors`}
                      placeholder="What's this about?"
                    />
                    {formState.errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{formState.errors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formState.errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:border-primary-500'
                      } bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors resize-vertical`}
                      placeholder="Tell me about your project..."
                    />
                    {formState.errors.message && (
                      <p className="mt-1 text-sm text-red-500">{formState.errors.message}</p>
                    )}
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={formState.isSubmitting}
                    whileHover={{ scale: formState.isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: formState.isSubmitting ? 1 : 0.98 }}
                    className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-medium transition-all ${
                      formState.isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary-500 hover:bg-primary-600 hover:shadow-lg'
                    } text-white`}
                  >
                    {formState.isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
                
                {/* Success Message */}
                {formState.isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={20} className="text-green-500" />
                      <p className="text-green-700 dark:text-green-300">
                        Message sent successfully! I'll get back to you soon.
                      </p>
                    </div>
                  </motion.div>
                )}
                
                {/* Error Message */}
                {formState.hasError && !Object.keys(formState.errors).length && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <AlertCircle size={20} className="text-red-500" />
                      <p className="text-red-700 dark:text-red-300">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center space-x-4 p-4 glass rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all group"
                    >
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
                        <info.icon size={24} className="text-primary-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{info.title}</p>
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect with Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 glass rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all text-gray-600 dark:text-gray-400 ${social.color}`}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Direct Email Button */}
              <motion.a
                href="mailto:joshuagera2006@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center py-4 px-6 bg-gradient-to-r from-secondary-500 to-accent-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
              >
                Send Direct Email
              </motion.a>

              {/* Availability Status */}
              <div className="glass p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Current Status</h4>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 dark:text-green-400 font-medium">Available for opportunities</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Open to internships, freelance projects, and full-time opportunities in web development and AI.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;