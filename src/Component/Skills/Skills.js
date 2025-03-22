import "../Home/Home.css";
import "../../styles.css";
import { MdOutlineAssignmentInd } from "react-icons/md";

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
                <div className="Card-header">
                  <h2>{skill.title}</h2>
                  <div className="card-avatar">
                    <h2>{skill.efficiency}</h2>
                  </div>
                </div>
                <h2 className="content">{skill.description}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
