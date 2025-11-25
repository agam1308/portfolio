import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500); // Wait a bit before unmounting
          return 100;
        }
        return prev + 1;
      });
    }, 15); // Adjust speed here (20ms * 100 = 2000ms = 2s total)

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a] text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-bold mb-4 font-mono"
        >
          {count}%
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${count}%` }}
          className="h-1 bg-primary mx-auto rounded-full max-w-xs"
          style={{ width: "200px" }} // Fixed width container for the bar
        >
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            style={{ width: `${count}%` }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
