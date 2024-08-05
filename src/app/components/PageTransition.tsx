// components/PageTransition.tsx
'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion';
import React from 'react';

const variants: Variants = {
  initial: { opacity: 0, x: 100 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

interface PageTransitionProps {
  children: React.ReactNode;
  key: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, key }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={key}
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default PageTransition;
