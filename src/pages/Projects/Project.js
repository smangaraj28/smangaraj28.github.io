import "./Projects.css";
import { MdOutlineAssignmentInd, MdOutlineLabel } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

// Card Component for reusability
function ProjectCard({ title, description, techStack, link }) {
  return (
    <div className="grid-item">
      <div className="Cards">
        <div className="Card-header">
          <h2>{title}</h2>
        </div>
        <p className="content">{description}</p>
        <div className="bottom-button-export">
          <div className="text">
            <b>{techStack.join(", ")}</b>
          </div>
          {link && (
            <a className="explorebtn" href={link} target="_blank" rel="noopener noreferrer">
              <div className="text">
                <FiExternalLink className="icon" />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Main Projects Component
export default function Projects({ projects = [] }) {
  return (
    <section className="box-center-row" id="Projects">
      <h1>
        Projects
      </h1>
      <div className="grid-container">
        {projects.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

