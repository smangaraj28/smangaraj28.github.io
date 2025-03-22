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
              <div className="Cards">
                <div className="Card-header">
                  <h2>{job.company}</h2>
                  {job.year && (
                    <h2>
                      <MdOutlineLabel className="icon" /> {job.year}
                    </h2>
                  )}
                </div>
                <h2 className="content">{job.role}</h2>
                <div className="bottom-button-export">
                  <div className="text">
                    <b>{job.techStack.join(", ")}</b>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
