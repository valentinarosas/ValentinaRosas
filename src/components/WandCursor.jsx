"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SimpleWand = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="rotate-[135deg]"
  >
    <path
      d="M14 4L16 2L14 0L12 2L14 4ZM14 28L24 8L4 8L14 28Z"
      fill="currentColor"
    />
  </svg>
);

const WandCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if the cursor is over a clickable element
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a")
      );
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 text-accent/80"
      animate={{
        x: position.x - 14,
        y: position.y - 14,
        scale: isPointer ? 1.2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.5,
      }}
    >
      <SimpleWand />
    </motion.div>
  );
};

export default WandCursor;
