
import React, { useState } from 'react';
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

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">Get in Touch</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Have a question, a partnership proposal, or just want to say hello? Drop us a line.
            </p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 shadow-2xl shadow-blue-500/10">
            {submitted ? (
              <div className="text-center py-10">
                <h2 className="text-2xl font-bold text-white">Thank You!</h2>
                <p className="text-gray-300 mt-2">Your message has been sent. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-gray-800 border-gray-700 text-white rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-gray-800 border-gray-700 text-white rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-gray-800 border-gray-700 text-white rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div>
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
