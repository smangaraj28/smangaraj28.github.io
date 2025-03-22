import "../Home/Home.css";
import "../../styles.css";
import "./Projects.css";
import { MdOutlineAssignmentInd, MdOutlineLabel } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";

export default function Projects({ projects = [] }) {
  const megaProjects = projects.filter((p) => p.type === "Mega Project");
  const miniProjects = projects.filter((p) => p.type === "Mini Project");

  return (
    <section className="box-center-row" id="Projects">
      <div className="subTitle">
        <h2>
          <MdOutlineAssignmentInd className="avatar" /> Projects
        </h2>
      </div>

      {[
        { title: "Mega Projects", data: megaProjects },
        { title: "Mini Projects", data: miniProjects },
      ].map(({ title, data }) =>
        data.length > 0 ? (
          <div key={title}>
            <strong>{title}</strong>
            <hr />
            <div className="grid-container">
              {data.map((item, index) => (
                <div className="grid-item" key={index}>
                  <div className="Cards">
                    <div className="Card-header">
                      <h2>{item.title}</h2>
                      {item.year && (
                        <h2>
                          <MdOutlineLabel className="icon" /> {item.year}
                        </h2>
                      )}
                    </div>
                    <h2 className="content">{item.description}</h2>
                    <div className="bottom-button-export">
                      <div className="text">
                        <b>{item.techStack.join(", ")}</b>
                      </div>
                      <a
                        className="explorebtn"
                        href={item.link}
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
        ) : null
      )}
    </section>
  );
}
