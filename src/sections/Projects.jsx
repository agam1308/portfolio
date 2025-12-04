import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Login System",
    description: "Secure authentication system.",
    tags: ["Java", "JSP", "MySQL", "Hibernate", "Spring Boot", "Git"],
    image: `${import.meta.env.BASE_URL}projects/login-system.jpg`,
    links: { code: "https://github.com/agam1308" },
  },
  {
    title: "Password Generator",
    description: "Dynamic password generation tool.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Git"],
    image: `${import.meta.env.BASE_URL}projects/password-generator.jpg`,
    links: { code: "https://github.com/agam1308" },
  },
  {
    title: "Shooting Aim",
    description: "Designed an interactive web-based shooting game.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    image: `${import.meta.env.BASE_URL}projects/shooting-aim.jpg`,
    links: { code: "https://github.com/agam1308" },
  },
  {
    title: "Paragraph Modification",
    description: "Implemented dynamic paragraph modification.",
    tags: ["HTML", "CSS", "React.js", "Git"],
    image: `${import.meta.env.BASE_URL}projects/paragraph-mod.jpg`,
    links: { code: "https://github.com/agam1308" },
  },
  {
    title: "Fintech app",
    description:
      "Built a finance-styled task-management web app featuring optimized Next.js routing, reusable UI components, and responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Git"],
    image: `${import.meta.env.BASE_URL}projects/todo-list.jpg`,
    links: { code: "https://github.com/agam1308" },
  },
  {
    title: "Ecommerce App",
    description:
      "Developed a responsive ecommerce platform with dynamic product pages, optimized routing, and clean UI components.",
    tags: ["Next.js", "React", "JavaScript", "CSS", "Git"],
    image: `${import.meta.env.BASE_URL}projects/music-app.jpg`,
    links: { code: "https://github.com/agam1308" },
  },
  {
    title: "ShopHub",
    description:
      "Implemented a secure authentication flow (JWT/session-based), dynamic product pages, and a polished ecommerce UI with optimized Next.js routing.",
    tags: ["Next.js", "React", "JavaScript", "CSS", "Git"],
    image: `${import.meta.env.BASE_URL}projects/login-system.jpg`,
    links: { code: "https://github.com/agam1308" },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectCard = ({ project, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="group relative rounded-2xl overflow-hidden glass hover:bg-white/5 transition-colors"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex gap-4">
          <a
            href={project.links.code}
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg">
            A collection of projects that demonstrate my passion for building
            clean, performant web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              variants={cardVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
