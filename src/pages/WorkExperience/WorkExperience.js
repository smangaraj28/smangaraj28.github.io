import { FaAws, FaGoogle, FaJava } from "react-icons/fa";
import { SiPython, SiDjango, SiReact, SiOracle, SiApache } from "react-icons/si";
import "./WorkExperience.css";

const techIcons = {
  "Java": <FaJava />,
  "Springboot": <FaJava />,
  "AWS": <FaAws />,
  "Angular JS": <span>JS</span>,
  "Python": <SiPython />,
  "Django": <SiDjango />,
  "Node Js": <span>JS</span>,
  "React": <SiReact />,
  "GCP": <FaGoogle />,
  "Hadoop": <SiApache />,
  "HBase": <SiApache />,
  "HDFS": <SiApache />,
  "OCI Cloud": <SiOracle />,
  "Big Data": <SiApache />,
  "MapReduce": <SiApache />
};

const getCompanyLogoUrl = (company) => {
  const domains = {
    "Oracle Cloud (OCI)": "oracle.com",
    "Goldman Sachs": "goldmansachs.com",
    "ADP": "adp.com",
    "Delhivery": "delhivery.com",
    "PayPal": "paypal.com"
  };
  return `https://logo.clearbit.com/${domains[company] || company.toLowerCase().replace(/\s+/g, '') + ".com"}`;
};

const formatDate = (dateString) => {
  if (!dateString || dateString.toLowerCase() === "present") return "Present";
  const date = new Date(dateString.replace(/-/g, " "));
  if (isNaN(date)) return dateString;
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export default function WorkExperience({ employement }) {
  const sortedExperience = [...employement].sort(
    (a, b) => new Date(a.startPeriod) - new Date(b.startPeriod)
  );

  return (
    <div className="vertical-timeline-container">
      <div className="timeline-header">
        <h1>Professional Journey</h1>
        <p>My career timeline and key milestones</p>
      </div>

      <div className="vertical-timeline">
        {sortedExperience.map((exp, index) => {
          const techArray = exp.techstack.split(",").map(t => t.trim());
          return (
            <div key={index} className="vertical-timeline-item">
              <div className="timeline-card">
                <div className="timeline-header-row">
                  <div className="timeline-company-info">
                    <h2>{exp.company}</h2>
                    <h3>{exp.designation}</h3>
                    <span className="location">{exp.location}</span>
                  </div>

                  {/* Duration Tab */}
                  <span className="timeline-duration">
                    {formatDate(exp.startPeriod)} - {formatDate(exp.endingPeriod)}
                  </span>

                  <img
                    src={getCompanyLogoUrl(exp.company)}
                    alt={`${exp.company} logo`}
                    className="company-logo-large"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/80"; }}
                  />
                </div>

                {/* Description */}
                <p className="experience-description">{exp.description}</p>

                {/* Awards */}
                {exp.awards && exp.awards.trim() !== "" && (
                  <div className="awards">🏆 {exp.awards}</div>
                )}

                {/* Tech stack */}
                <div className="tech-stack">
                  {techArray.map((tech, i) => (
                    <span key={i} className="tech-pill">
                      {techIcons[tech] || tech.charAt(0)} {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
