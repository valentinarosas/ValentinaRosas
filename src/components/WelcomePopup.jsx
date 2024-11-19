"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedPortfolio");
    
    if (!hasVisited) {
      // Show popup after a short delay for first-time visitors
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark that user has visited
    localStorage.setItem("hasVisitedPortfolio", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset p-8 rounded-lg text-center w-[90%] max-w-md mx-auto">
            <h2 className="text-2xl font-light mb-4 text-foreground">Welcome To My Portfolio!</h2>
            <p className="text-foreground/90 mb-6">
              I&apos;m Valentina Rosas, a Venezuelan XR designer based in the USA. Thank you for watching as I bring my concepts to life!
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded text-foreground/90 hover:text-accent transition-colors duration-300"
            >
              Enter
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
