import { MdWork } from "react-icons/md";
import { FaAws, FaGoogle, FaJava } from "react-icons/fa";
import { SiPython, SiDjango, SiReact, SiOracle, SiApache } from "react-icons/si";
import "./WorkExperience.css";

const techIcons = {
  "Java": <FaJava />,
  "Spring Boot": <FaJava />,
  "AWS": <FaAws />,
  "AngularJS": <span>JS</span>,
  "Python": <SiPython />,
  "Django": <SiDjango />,
  "Node.js": <span>JS</span>,
  "React": <SiReact />,
  "GCP": <FaGoogle />,
  "Hadoop": <SiApache />,
  "HBase": <SiApache />,
  "HDFS": <SiApache />,
  "OCI": <SiOracle />,
  "Big Data": <SiApache />,
  "MapReduce": <SiApache />
};

export default function WorkExperience({ workExperience }) {
  // Sort by start date (oldest first)
  const sortedExperience = [...workExperience].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateA - dateB;
  });

  const formatDate = (dateString) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="horizontal-timeline-container">
      <div className="timeline-header">
        <h1>Professional Journey</h1>
        <p>My career timeline and key milestones</p>
      </div>
      
      <div className="timeline-scroll-container">
        <div className="horizontal-timeline">
          {sortedExperience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-card">
                <div className="card-header">
                  <div className="company-icon-container">
                    <MdWork className="company-icon" />
                    <div className="company-badge">{exp.company.charAt(0)}</div>
                  </div>
                  <div>
                    <h2>{exp.company}</h2>
                    <div className="date-range">
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </div>
                  </div>
                </div>
                <h3>{exp.role}</h3>
                <div className="tech-stack">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {techIcons[tech] || tech.charAt(0)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {index < sortedExperience.length - 1 && (
                <div className="timeline-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}