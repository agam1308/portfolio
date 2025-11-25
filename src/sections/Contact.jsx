import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's work <br />
              <span className="text-gradient">together.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              I'm currently available for freelance projects and open to
              full-time opportunities.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:agamy2k@gmail.com"
                className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors group"
              >
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                  <Mail size={24} />
                </div>
                <span className="text-lg">agamy2k@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 text-gray-400">
                <div className="p-3 rounded-lg bg-white/5">
                  <Phone size={24} />
                </div>
                <span className="text-lg">+91 9958501482</span>
              </div>

              <div className="flex items-center gap-4 text-gray-400">
                <div className="p-3 rounded-lg bg-white/5">
                  <MapPin size={24} />
                </div>
                <span className="text-lg">New Delhi, India</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            action="mailto:agamy2k@gmail.com"
            method="post"
            enctype="text/plain"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-white hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
