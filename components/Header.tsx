import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const leftLinks = [
  { name: "Products", path: "/products" },
  { name: "Testimonials", path: "/testimonials" },
];

const rightLinks = [
  { name: "Blog", path: "/blog" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 
        font-sans 
        px-6 md:px-12 py-6
      "
    >
      <div className="relative flex justify-between md:justify-center items-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between w-full max-w-7xl text-white">
          {/* LEFT LINKS */}
          <div className="flex gap-10">
            {leftLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 500 }}
                className="relative group"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-lg tracking-wide ${
                      isActive ? "text-white" : "text-gray-300"
                    } hover:text-white transition-colors`
                  }
                >
                  {link.name}
                  {/* Animated underline */}
                  <span
                    className="
                      absolute left-0 -bottom-1 h-[2px] w-0 bg-white 
                      transition-all duration-300 group-hover:w-full
                    "
                  />
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* CENTER LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <NavLink
              to="/"
              className="text-4xl xl:text-5xl font-extrabold tracking-tight hover:opacity-80 transition"
            >
              nesto
            </NavLink>
          </motion.div>

          {/* RIGHT LINKS */}
          <div className="flex gap-10">
            {rightLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 500 }}
                className="relative group"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-lg tracking-wide ${
                      isActive ? "text-white" : "text-gray-300"
                    } hover:text-white`
                  }
                >
                  {link.name}
                  <span
                    className="
                      absolute left-0 -bottom-1 h-[2px] w-0 bg-white 
                      transition-all duration-300 group-hover:w-full
                    "
                  />
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE HEADER */}
        <div className="flex md:hidden justify-between w-full">
          <NavLink to="/" className="text-3xl font-bold text-white">
            nesto
          </NavLink>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8"
          >
            {[...leftLinks, ...rightLinks].map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-4xl font-bold hover:text-gray-300 transition"
                >
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
