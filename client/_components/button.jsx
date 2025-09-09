"use client";
import { motion } from "motion/react";

export default function Button({ children, className, ...props }) {
  return (
    <motion.button
      className={className}
      whileHover={{
        boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)",
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
