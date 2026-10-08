'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppleHelloEnglishEffect } from '@/components/ui/apple-hello-effect';

interface LoadingScreenProps {
  onComplete?: () => void;
  onExitStart?: () => void;
  duration?: number;
}

export function LoadingScreen({ onComplete, onExitStart }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsLoading(false);
      onExitStart?.();
      setTimeout(() => {
        onComplete?.();
      }, 1000);
    }, 400);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 1.0,
              ease: [0.7, 0, 0.3, 1],
            },
          }}
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black overflow-hidden will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -30,
              transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
            }}
            className="relative flex flex-col items-center justify-center w-full max-w-[420px] px-6 will-change-transform text-white"
          >
            <AppleHelloEnglishEffect
              speed={1.1}
              onAnimationComplete={handleAnimationComplete}
              className="text-white h-16 sm:h-20 md:h-24 will-change-transform"
            />
          </motion.div>

          {/* Subtle aesthetic dot */}
          <motion.div
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="absolute bottom-12 w-1.5 h-1.5 rounded-full bg-white/20"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
