
import { useState, useEffect } from 'react';
import { useScroll, useSpring } from 'framer-motion';

export const useScrollProgress = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setReadingProgress(parseFloat(latest.toFixed(2)));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return { readingProgress, scaleX };
};
