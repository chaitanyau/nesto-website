import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MouseEvent } from "react";

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ to, children, className, delay = 200 }) => {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    // ✅ Click feedback animation (tiny scale + ripple)
    const target = e.currentTarget as HTMLElement;
    target.classList.add("scale-95");
    setTimeout(() => target.classList.remove("scale-95"), 150);

    // ✅ Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // ✅ Slight delay for premium feel
    setTimeout(() => navigate(to), delay);
  };

  return (
    <motion.a
      href={to}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`inline-block transition-transform duration-200 ${className}`}
    >
      {children}
    </motion.a>
  );
};

export default AnimatedLink;
