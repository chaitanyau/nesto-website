
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

const products = [
  { name: 'Nesto Hub Pro', description: 'The central nervous system of your smart home.', price: '$299', image: 'https://picsum.photos/seed/product1/600/400' },
  { name: 'Nesto Cam 360', description: 'See everything, everywhere. Total security.', price: '$149', image: 'https://picsum.photos/seed/product2/600/400' },
  { name: 'Nesto Smart Lock', description: 'Keyless entry and peace of mind.', price: '$229', image: 'https://picsum.photos/seed/product3/600/400' },
  { name: 'Nesto Ambient Light', description: 'Set the mood for any occasion.', price: '$79', image: 'https://picsum.photos/seed/product4/600/400' },
  { name: 'Nesto Thermostat', description: 'Smart climate control that saves energy.', price: '$199', image: 'https://picsum.photos/seed/product5/600/400' },
  { name: 'Nesto Doorbell', description: 'Know who’s there, from anywhere.', price: '$179', image: 'https://picsum.photos/seed/product6/600/400' },
];

const ProductsPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">Our Product Ecosystem</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Designed to work together, built to make your life simpler.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-gray-900/50 rounded-lg overflow-hidden shadow-lg border border-gray-800 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.2)" }}
            >
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white">{product.name}</h3>
                <p className="text-gray-400 mt-2 flex-grow">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-semibold text-blue-400">{product.price}</span>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-full text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductsPage;
