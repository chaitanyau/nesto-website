import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import Scene from "./Scene";
import { PageTransitionProps } from "../types";
import { NavLink } from "react-router-dom";

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const ProductPageLink = [{ name: "Explore Products", path: "/products" }];

const featureData = [
  { title: "360° Vision", description: "Advanced gimbal eliminates blind spots with smooth pan & tilt." },
  { title: "AI Object Detection", description: "Identifies people, pets, packages & reduces false alerts." },
  { title: "Night Vision Perfected", description: "Crystal-clear footage even in pitch black darkness." },
  { title: "Seamless Integration", description: "Control lights, locks, & more from one central hub." },
];

const LandingPage: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [fadeEnd, setFadeEnd] = useState(0.15);

  useEffect(() => {
    setFadeEnd(window.innerHeight < 800 ? 0.15 : 0.15);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  // Hero smooth fade + scale
  const heroOpacity = useTransform(scrollYProgress, [0, fadeEnd], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, fadeEnd], [1, 0.9]);
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <PageTransition>
      <div className="relative">
        {/* ===== HERO ===== */}
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        >
          {/* PARALLAX BACKGROUND */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/18431164/pexels-photo-18431164.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              y: heroBgY,
            }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-center px-4"
          >
            {/* ✅ TOP MARQUEE - smaller on mobile */}
            <motion.div
              className="whitespace-nowrap text-[14vw] sm:text-[18vw] lg:text-[16vw] leading-[0.85] font-black uppercase tracking-tight text-white"
              animate={{ x: ["-15%", "0%"] }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            >
              Smart Living · Home Automation · Voice Control · Security · Comfort · AI Sensors ·
            </motion.div>

            {/* ✅ BOTTOM MARQUEE - smaller on mobile */}
            <motion.div
              className="whitespace-nowrap text-[14vw] sm:text-[18vw] lg:text-[16vw] leading-[0.85] font-black uppercase tracking-tight text-white/80"
              animate={{ x: ["0%", "-15%"] }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            >
              AI Switches · Seamless Control · Future Ready · Ambient Lighting · Smart Sensors ·
            </motion.div>

            {/* ✅ Subtext optimized for mobile */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 sm:mt-8 max-w-[95%] sm:max-w-[600px] lg:max-w-[700px] mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Nesto redefines smart home intelligence with cutting‑edge security, AI, and seamless design that blends effortlessly into your lifestyle.
            </motion.p>

            {/* ✅ CTA BUTTON - mobile-friendly size */}
            {ProductPageLink.map((link) => (
              <NavLink to={link.path} key={link.name}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 sm:mt-10 px-8 py-3 sm:px-10 sm:py-4 rounded-full border border-white bg-black text-white text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Explore Products
                </motion.button>
              </NavLink>
            ))}
          </motion.div>

          {/* ✅ SCROLL INDICATOR - smaller on mobile */}
          <motion.div
            className="absolute bottom-4 sm:bottom-8 text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDown size={24} className="sm:w-7 sm:h-7" />
          </motion.div>
        </motion.section>

        {/* ===== 3D SCENE + FEATURES ===== */}
        <div ref={scrollContainerRef} className="relative h-[350vh] sm:h-[400vh] w-full bg-black">
          {/* Sticky Scene */}
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <Scene scrollYProgress={scrollYProgress} />
          </div>

          {/* ✅ Feature Reveal */}
          <div className="absolute top-0 left-0 w-full">
            {featureData.map((feature, index) => {
              const total = featureData.length;
              const sectionStart = index / total;
              const sectionMid = (index + 0.25) / total;
              const sectionHold = (index + 0.75) / total;
              const sectionEnd = (index + 1) / total;

              const opacity = useTransform(
                scrollYProgress,
                [sectionStart, sectionMid, sectionHold, sectionEnd],
                index === total - 1 ? [1, 1, 1, 1] : [1, 1, 1, 0]
              );

              const y = useTransform(
                scrollYProgress,
                [sectionStart, sectionEnd],
                ["40px", "-40px"]
              );

              return (
                <div
                  key={index}
                  className="h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left px-6 sm:px-10"
                >
                  <motion.div
                    className="w-full md:w-1/2 lg:w-1/3 p-4 sm:p-6 md:p-12"
                    style={{ opacity, y }}
                  >
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                      {feature.title}
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default LandingPage;
