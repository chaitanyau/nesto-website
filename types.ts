
import { MotionValue } from 'framer-motion';

export interface SceneProps {
  scrollYProgress: MotionValue<number>;
}

export interface PageTransitionProps {
  children: React.ReactNode;
}
