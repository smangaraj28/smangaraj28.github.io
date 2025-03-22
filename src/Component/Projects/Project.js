import "../Home/Home.css";
import "../../styles.css";
import "./Projects.css";
import {
  MdOutlineAssignmentInd,
  MdOutlineLabel
} from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

export default function Projects({ mega = [], mini = [] }) {
  return (
    <section className="box-center-row" id="Projects">
      <div className="subTitle">
        <h2>
          <MdOutlineAssignmentInd className="avatar" /> Projects
        </h2>
      </div>

      {/* Mega Projects Section */}
      <strong>Mega Projects</strong>
      <hr />
      <div className="megaprojects">
        {mega.map((item, index) => (
          <div className="grid-item" key={index}>
            <div className="Cards">
              <div className="Card-header">
                <h2>{item.title}</h2>
                <h2>
                  <MdOutlineLabel className="icon" /> {item.year}
                </h2>
              </div>
              <h2 className="content">{item.description}</h2>
              <div className="bottom-button-export">
                <div className="text">
                  <b>{item.skills}</b>
                </div>
                <a
                  className="explorebtn"
                  href={item.links}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text">
                    <h2>Explore</h2>
                    <FiExternalLink className="icon" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Projects Section */}
      <div className="sub-head">
        <strong>Mini Projects</strong>
        <hr />
      </div>

      <div className="Skills">
        <div className="grid-container">
          {mini.map((item, index) => (
            <div className="grid-item" key={index}>
              <div className="Cards">
                <div className="Card-header">
                  <h2>{item.title}</h2>
                </div>
                <h2 className="content">{item.description}</h2>
                <div className="bottom-button-export">
                  <div className="text">
                    <b>{item.skills}</b>
                  </div>
                  <a
                    href={item.links}
                    className="explorebtn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text">
                      <h2>Explore</h2>
                      <FiExternalLink className="icon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
