import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float" />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse-slow" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full glass border-primary/30">
            <span className="text-sm font-medium text-gradient">
              👋 Full-Stack Developer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            Hi, I'm <span className="text-gradient">Agam Makhija</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Full-Stack Developer skilled in Java, Spring Boot, React, and MySQL.
            Strong problem-solving abilities and skilled in REST API and dynamic
            UI development. Passionate about building efficient, scalable
            applications.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-shadow"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/20 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
