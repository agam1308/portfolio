import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Code,
  GraduationCap,
  Trophy,
  Cpu,
  Database,
  Layout,
  Server,
  User,
  Globe,
  Heart,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code size={20} />,
    skills: ["Java", "JavaScript", "Core Java", "Advanced Java", "OOPs"],
  },
  {
    title: "Frontend",
    icon: <Layout size={20} />,
    skills: ["HTML", "CSS", "Bootstrap", "React.js"],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    skills: [
      "Spring Boot",
      "Hibernate",
      "JSP",
      "REST API",
      "Node.js",
      "Express.js",
      "Next.js",
    ],
  },
  {
    title: "Database & Tools",
    icon: <Database size={20} />,
    skills: [
      "MySQL",
      "Git",
      "Postman",
      "GenAI (ChatGPT, DeepSeek, Copilot, Gemini)",
      "Clerk",
      "Convex",
    ],
  },
];

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    year: "2025",
  },
  {
    title: "Java Full-Stack Course",
    institution: "BIIT",
    year: "2024 - 2025",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Vivekananda Institute of Professional Studies (GGSIPU)",
    year: "2021",
  },
  {
    title: "Class XII Science (CBSE)",
    institution: "V.V.D.A.V. Public School, New Delhi",
    year: "2018",
  },
  {
    title: "Class X Science (CBSE)",
    institution: "V.V.D.A.V. Public School, New Delhi",
    year: "2016",
  },
];

const achievements = [
  "Secured 3rd position in Fps Gaming at HackVSIT 2nd Edition (2019)",
  "Secured 2nd position in Web Design at HackVSIT 3rd Edition (2020)",
  "Coordinated HackVSIT 3rd Edition (2020)",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            Full-Stack Developer skilled in Java, Spring Boot, React, and MySQL.
            Strong problem-solving abilities and skilled in REST API and dynamic
            UI development. Passionate about building efficient, scalable
            applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" size={28} />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-white/10 space-y-8">
              <div className="relative">
                <div className="absolute -left-[39px] bg-black p-1">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <span className="text-sm text-primary font-mono mb-2 block">
                  May 2025 - Oct 2025
                </span>
                <h4 className="text-xl font-bold mb-1">
                  Full Stack Developer Intern
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Stockmed Network Pvt. Ltd.
                </p>
                <ul className="list-disc list-outside ml-4 text-gray-400 text-sm space-y-2">
                  <li>
                    Contributed to the development of company web applications
                    with HTML, CSS, Bootstrap, and JavaScript, improving UI
                    functionality and user experience.
                  </li>
                  <li>
                    Worked with React to build responsive pages and interactive
                    UI sections.
                  </li>
                  <li>
                    Collaborated with the backend team to understand API
                    development and integration using Core Java, Node.js, and
                    SQL.
                  </li>
                  <li>
                    Participated in team development practices, including
                    version control, debugging, and code reviews.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-secondary" size={28} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-white/10 space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[39px] bg-black p-1">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        index === 0 ? "bg-secondary" : "bg-secondary/30"
                      }`}
                    />
                  </div>
                  <span className="text-sm text-secondary font-mono mb-1 block">
                    {edu.year}
                  </span>
                  <h4 className="text-lg font-bold">{edu.title}</h4>
                  <p className="text-gray-400 text-sm">{edu.institution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="text-accent" size={28} />
            <h3 className="text-2xl font-bold">Technical Skills</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-xl border border-white/5 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4 text-accent">
                  {category.icon}
                  <h4 className="font-bold">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-yellow-500" size={28} />
            <h3 className="text-2xl font-bold">Achievements</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl border border-white/5 flex items-start gap-4"
              >
                <div className="mt-1 min-w-[24px] text-yellow-500">
                  <Trophy size={20} />
                </div>
                <p className="text-gray-300 text-sm">{achievement}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Personal Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <User className="text-primary" size={28} />
            <h3 className="text-2xl font-bold">Personal Interests</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-6 rounded-xl border border-white/5">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Globe size={20} className="text-secondary" /> Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {["English (Fluent)", "Hindi (Fluent)"].map((lang) => (
                  <span
                    key={lang}
                    className="text-sm px-3 py-1 rounded-full bg-white/5 text-gray-300"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-white/5">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Heart size={20} className="text-red-500" /> Hobbies
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Music", "Gaming", "Workout"].map((hobby) => (
                  <span
                    key={hobby}
                    className="text-sm px-3 py-1 rounded-full bg-white/5 text-gray-300"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
