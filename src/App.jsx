import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />

          <footer className="py-8 text-center text-gray-500 text-sm">
            <p>© 2025 Agam Makhija. All rights reserved.</p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
