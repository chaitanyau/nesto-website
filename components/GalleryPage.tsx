
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

const galleryImages = [
  { src: 'https://picsum.photos/seed/gallery1/500/800', alt: 'Modern living room with Nesto Hub' },
  { src: 'https://picsum.photos/seed/gallery2/500/300', alt: 'Nesto Cam monitoring a front porch' },
  { src: 'https://picsum.photos/seed/gallery3/500/500', alt: 'Close-up of the Nesto Smart Lock' },
  { src: 'https://picsum.photos/seed/gallery4/500/700', alt: 'Kitchen with Nesto Ambient Lighting' },
  { src: 'https://picsum.photos/seed/gallery5/500/400', alt: 'Family interacting with Nesto Doorbell' },
  { src: 'https://picsum.photos/seed/gallery6/500/600', alt: 'Bedroom with Nesto Thermostat on the wall' },
  { src: 'https://picsum.photos/seed/gallery7/500/350', alt: 'Outdoor view with Nesto security camera' },
  { src: 'https://picsum.photos/seed/gallery8/500/850', alt: 'Nesto products on a sleek shelf' },
];

const GalleryPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">Nesto in the Wild</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">See how our products blend seamlessly into beautiful homes like yours.</p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index} 
              className="mb-4 break-inside-avoid rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default GalleryPage;
