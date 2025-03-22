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
          textSize: "14px",
          pathColor: skill.proficiency >= 70 ? "#4CAF50" : "#FFA500", // Green for high, Orange for medium
          textColor: "#333",
          trailColor: "#e0e0e0",
          backgroundColor: "#fff",
          strokeLinecap: "round"
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


