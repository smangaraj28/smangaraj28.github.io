import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkOutline } from "react-icons/md";

export default function WorkExperience({ workExperience = [] }) {
  return (
    <section className="work-experience-section" id="WorkExperience">
      <h1 className="box-center-row">
        Work Experience
      </h1>
      <VerticalTimeline>
        {workExperience.map((job, index) => (
          <VerticalTimelineElement
            key={index}
            date={job.year}
            icon={<MdWorkOutline />}
            iconStyle={{
              background: index % 2 === 0 ? "#007bff" : "#28a745",
              color: "#fff",
            }}
            contentStyle={{
              background: index % 2 === 0 ? "#e8f1ff" : "#e9f9ee",
              color: "#000",
              borderRadius: "10px",
              boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
            }}
            contentArrowStyle={{
              borderRight: index % 2 === 0 ? "7px solid #007bff" : "7px solid #28a745",
            }}
          >
            <h3 className="company-name">{job.company}</h3>
            <h4 className="role">{job.role}</h4>
            <p className="tech-stack">{job.techStack.join(", ")}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
