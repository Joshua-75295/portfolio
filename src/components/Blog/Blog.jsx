import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications: Best Practices for 2024',
      excerpt: 'Discover the latest techniques and patterns for building maintainable React applications that scale with your business needs.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'March 15, 2024',
      readTime: '8 min read',
      author: 'Joshua Gera',
      tags: ['React', 'JavaScript', 'Best Practices', 'Performance'],
      category: 'Development'
    },
    {
      id: 2,
      title: 'The Future of Web Development: Emerging Trends and Technologies',
      excerpt: 'Explore the cutting-edge technologies and trends that are shaping the future of web development in 2024 and beyond.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'March 10, 2024',
      readTime: '6 min read',
      author: 'Joshua Gera',
      tags: ['Web Development', 'AI', 'Machine Learning', 'Future Tech'],
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Mastering CSS Grid: Advanced Layouts Made Simple',
      excerpt: 'Learn how to create complex, responsive layouts with CSS Grid using practical examples and real-world scenarios.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'March 5, 2024',
      readTime: '10 min read',
      author: 'Joshua Gera',
      tags: ['CSS', 'Grid', 'Layout', 'Responsive Design'],
      category: 'Design'
    },
    {
      id: 4,
      title: 'Database Design Patterns for Modern Applications',
      excerpt: 'Understand the fundamental database design patterns that every developer should know for building efficient applications.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: 'February 28, 2024',
      readTime: '12 min read',
      author: 'Joshua Gera',
      tags: ['Database', 'Design Patterns', 'SQL', 'NoSQL'],
      category: 'Backend'
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
    <section id="blog" className="py-20 bg-gray-50 dark:bg-dark-900">
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
              Latest <span className="gradient-text">Blog Posts</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Sharing knowledge and insights about web development, design, and technology
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <span className="flex items-center">
                    <User size={16} className="mr-2" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>
              <div className="order-1 md:order-2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Recent Posts Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Recent Posts
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <motion.article
                  key={post.id}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group glass rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Blog Categories */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Explore Topics
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Development', 'Design', 'Technology', 'Backend', 'Frontend', 'DevOps', 'AI/ML', 'Mobile'].map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-6 py-3 glass rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all"
                >
                  <Tag size={16} />
                  <span className="font-medium text-gray-700 dark:text-gray-300">{category}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full hover:shadow-lg transition-all"
            >
              <span className="font-medium">View All Posts</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;