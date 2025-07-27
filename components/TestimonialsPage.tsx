
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

const testimonials = [
  { quote: "Nesto completely changed how I interact with my home. It's so intuitive, I can't imagine my life without it.", author: 'Sarah J.', location: 'San Francisco, CA', avatar: 'https://picsum.photos/seed/avatar1/100' },
  { quote: "The security features give me unparalleled peace of mind. The 360 camera is a game-changer.", author: 'Michael B.', location: 'New York, NY', avatar: 'https://picsum.photos/seed/avatar2/100' },
  { quote: "I was worried about a complicated setup, but I had Nesto running in minutes. The design is sleek and modern, and it just works.", author: 'Emily R.', location: 'Austin, TX', avatar: 'https://picsum.photos/seed/avatar3/100' },
  { quote: "Finally, a smart home system that doesn't feel like a gadget. It feels like a natural extension of my home.", author: 'David L.', location: 'Chicago, IL', avatar: 'https://picsum.photos/seed/avatar4/100' },
  { quote: "The customer support is fantastic. Had a small question and they were incredibly helpful and quick to respond.", author: 'Jessica P.', location: 'Miami, FL', avatar: 'https://picsum.photos/seed/avatar5/100' },
  { quote: "The energy savings from the smart thermostat paid for the device itself in less than a year. Highly recommend!", author: 'Tom H.', location: 'Denver, CO', avatar: 'https://picsum.photos/seed/avatar6/100' },
];

const TestimonialsPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">Loved by Homes Everywhere</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Don't just take our word for it. Here's what our customers have to say.</p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900/50 rounded-lg shadow-lg border border-gray-800 break-inside-avoid"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              <div className="flex items-center mt-4">
                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
                <div className="ml-4">
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default TestimonialsPage;
