import "../Home/Home.css";
import "../../styles.css";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdOutlineAssignmentInd } from "react-icons/md";
import "./Skills.css";

export default function Skills({ skills = [] }) {
  return (
    <div className="box-center-row" id="Skills">
      <div className="subTitle">
        <h2>
          <MdOutlineAssignmentInd className="avatar" /> Skills
        </h2>
      </div>
      <div className="Skills">
        <div className="grid-container">
          {skills.map((skill, index) => (
            <div className="grid-item" key={index}>
              <div className="Cards">
                <h3>{skill.name}</h3>
                <div className="progress-container">
                  <CircularProgressbar
                    value={skill.proficiency}
                    text={`${skill.proficiency}%`}
                    styles={buildStyles({
                      textSize: "16px",
                      pathColor: "#4CAF50",
                      textColor: "#000",
                      trailColor: "#ddd",
                      backgroundColor: "#f8f9fa"
                    })}
                  />
                </div>
                <p className="content">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


