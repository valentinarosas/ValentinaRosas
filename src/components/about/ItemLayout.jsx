"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 0 10px rgba(254, 254, 91, 0.2), 0 0 20px rgba(254, 254, 91, 0.1)",
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 transition-all duration-300 hover:bg-black/30 border-2 border-transparent hover:border-accent/40",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
