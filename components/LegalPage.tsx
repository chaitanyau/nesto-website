
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

const LegalPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">Legal Information</h1>
          
          <h2 className="text-2xl font-bold text-white mt-12">Privacy Policy</h2>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            This is a placeholder for your Privacy Policy. It's where you would detail how you collect, use, and protect your users' data. You should cover topics like what information is collected (e.g., personal details, usage data), why it's collected (e.g., to improve service, for marketing), and how users can manage their data (e.g., request deletion).
          </p>
          <h3>Information We Collect</h3>
          <p>
            Placeholder text describing the types of information collected by Nesto, such as account information, device data from Nesto products, and website usage analytics.
          </p>
          <h3>How We Use Your Information</h3>
          <p>
            Placeholder text explaining that data is used to provide and improve services, for security purposes, to communicate with users, and to comply with legal obligations.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Terms of Service</h2>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            This is a placeholder for your Terms of Service. This agreement sets the rules for using your products and services. You should include sections on user responsibilities, acceptable use, intellectual property rights, disclaimers of warranties, and limitation of liability.
          </p>
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using Nesto products and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
          </p>
          <h3>2. Use of Services</h3>
          <p>
            You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the services.
          </p>
          <h3>3. Intellectual Property</h3>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Nesto Inc. and its licensors.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default LegalPage;
