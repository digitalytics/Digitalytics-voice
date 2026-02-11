import { Variants } from 'framer-motion';

/**
 * Fade in from bottom animation
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

/**
 * Stagger container for multiple children
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

/**
 * Card hover animation
 */
export const cardHover = {
  scale: 1.03,
  y: -8,
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1] as const,
  },
};

/**
 * Button hover animation
 */
export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: [0.4, 0, 0.2, 1] as const,
  },
};

/**
 * Button tap animation
 */
export const buttonTap = {
  scale: 0.95,
};

/**
 * Scale animation (for success messages)
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};
