import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import ProductsPage from "./components/ProductsPage";
import TestimonialsPage from "./components/TestimonialsPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import GalleryPage from "./components/GalleryPage";
import LegalPage from "./components/LegalPage";
import SmoothScroll from "./hooks/SmoothScroll";
import "./index.css";

const App: React.FC = () => {
  const location = useLocation();
  const controls = useAnimation();
  const triggerRef = useRef<HTMLDivElement | null>(null);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // ✅ Trigger shrink animation when trigger section is visible
            controls.start({
              scale: 0.95,
              borderRadius: "5rem",
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            });
          } else {
            // ✅ Reset to normal when scrolled back up
            controls.start({
              scale: 1,
              borderRadius: "0rem",
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            });
          }
        });
      },
      { threshold: 0.1 } // Trigger when 20% of the trigger section is visible
    );

    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <div className="relative min-h-screen text-gray-200 font-sans bg-white">
      
     
      <div className="fixed inset-0 bg-black z-[-1]" />

      <Header />

      {/* ✅ Wrap entire page in a motion container */}
      <motion.div
        animate={controls}
        className="relative z-10 bg-black backdrop-blur-sm"
        style={{
          boxShadow: "0 0 40px rgba(0,0,0,0.4)",
        }}
      >
        <SmoothScroll>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/legal" element={<LegalPage />} />
            </Routes>
          </AnimatePresence>
        </SmoothScroll>

        {/* ✅ Invisible trigger BEFORE the footer */}
        <div ref={triggerRef} className="h-[30vh]" />
      </motion.div>

      {/* ✅ Footer stays full-width, video still behind it */}
      <Footer />
    </div>
  );
};

export default App;
