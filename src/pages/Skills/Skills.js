import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Skills.css";

export default function Skills({ skills = [] }) {
  return (
    <div className="box-center-row" id="Skills">
      <h1>
        Skills
      </h1>
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
                      textSize: "14px",
                      pathColor:
                        skill.proficiency >= 70 ? "#4CAF50" : "#FFA500",
                      textColor: "#333",
                      trailColor: "#e0e0e0",
                      strokeLinecap: "round",
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
