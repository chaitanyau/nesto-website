
import React from 'react';
import { motion } from 'framer-motion';
import { PageTransitionProps } from '../types';

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const blogPosts = [
  { title: 'The Future of Home Security is Here', excerpt: 'Discover how AI and machine learning are revolutionizing home safety...', image: 'https://picsum.photos/seed/blog1/800/600', date: 'Oct 26, 2023', category: 'Technology' },
  { title: '5 Ways to Save Energy with a Smart Thermostat', excerpt: 'Smart climate control is not just about comfort, it\'s about efficiency...', image: 'https://picsum.photos/seed/blog2/800/600', date: 'Oct 15, 2023', category: 'DIY & How-To' },
  { title: 'Designing for Simplicity: The Nesto Philosophy', excerpt: 'Behind the scenes look at our design process and what drives us...', image: 'https://picsum.photos/seed/blog3/800/600', date: 'Sep 28, 2023', category: 'Company News' },
  { title: 'Integrating Nesto with Your Favorite Smart Devices', excerpt: 'Learn how to connect Nesto to Alexa, Google Home, and more...', image: 'https://picsum.photos/seed/blog4/800/600', date: 'Sep 10, 2023', category: 'Tutorials' },
];

const BlogPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">From the Nesto Blog</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Insights, tutorials, and news from the world of smart home technology.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="overflow-hidden rounded-lg">
                <img src={post.image} alt={post.title} className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="text-sm text-blue-400 font-semibold">{post.category}</p>
                <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-blue-300 transition-colors">{post.title}</h3>
                <p className="text-gray-400 mt-2">{post.excerpt}</p>
                <p className="text-sm text-gray-500 mt-4">{post.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPage;
