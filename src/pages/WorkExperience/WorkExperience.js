import "./WorkExperience.css";
import { MdWorkOutline, MdOutlineLabel } from "react-icons/md";

export default function WorkExperience({ workExperience = [] }) {
  return (
    <section className="box-center-row" id="WorkExperience">
      <div className="subTitle">
        <h2>
          <MdWorkOutline className="avatar" /> Work Experience
        </h2>
      </div>

      {workExperience.length > 0 && (
        <div className="grid-container">
          {workExperience.map((job, index) => (
            <div className="grid-item" key={index}>
              <div className="card">
                <div className="card-header">
                  <h3 className="company-name">{job.company}</h3>
                  {job.year && (
                    <span className="year">
                      <MdOutlineLabel className="icon" /> {job.year}
                    </span>
                  )}
                </div>
                <h4 className="role">{job.role}</h4>
                <div className="tech-stack">
                  <b>{job.techStack.join(", ")}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
