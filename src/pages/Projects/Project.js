import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import "./Projects.css";

function ProjectCard({ title, description, skills, link, year, awards, index }) {
  // Convert skills string into array
  const techStack = skills.split(",").map(skill => skill.trim());

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
          {year && <span className="project-year">📅 {year}</span>}
        </div>
        <p className="project-description">{description}</p>
        <div className="tech-stack">
          {techStack.map((tech, i) => (
            <span key={i} className="tech-pill">{tech}</span>
          ))}
        </div>
        {awards && awards.trim() !== "" && (
          <p className="project-awards">🏆 {awards}</p>
        )}
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

export default function Projects({ projects = {} }) {
  const megaProjects = projects.mega || [];
  const miniProjects = projects.mini || [];

  return (
    <section className="projects-container" id="projects">
      <div className="projects-header">
        <h1>Featured Projects</h1>
        <p>Selected works that showcase my skills</p>
      </div>

      {/* Mega Projects */}
      {megaProjects.length > 0 && (
        <div className="projects-section">
          <h2 className="section-title">🚀 Mega Projects</h2>
          <div className="projects-grid">
            {megaProjects.map((project, index) => (
              <ProjectCard key={`mega-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>
      )}

      {/* Mini Projects */}
      {miniProjects.length > 0 && (
        <div className="projects-section">
          <h2 className="section-title">🔧 Mini Projects</h2>
          <div className="projects-grid">
            {miniProjects.map((project, index) => (
              <ProjectCard key={`mini-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
