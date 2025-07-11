import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import "./Projects.css";

function ProjectCard({ title, description, techStack, link, index }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="card-content">
        <div className="card-header">
          <h2>{title}</h2>
        </div>
        <p className="project-description">{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, i) => (
            <span key={i} className="tech-pill">{tech}</span>
          ))}
        </div>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            <FiExternalLink className="link-icon" />
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects({ projects = [] }) {
  // Limit to 4 projects for no-scroll layout
  const displayedProjects = projects.slice(0, 4);

  return (
    <section className="projects-container" id="projects">
      <div className="projects-header">
        <h1>Featured Projects</h1>
        <p>Selected works that showcase my skills</p>
      </div>

      <div className="projects-grid">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}