import "../Home/Home.css";
import "../../styles.css";
import "./Projects.css";
import {
  MdOutlineAssignmentInd,
  MdOutlineLabel,
  MdLaunch,
  MdLink
} from "react-icons/md";
import React from 'react';
import { FiExternalLink } from "react-icons/fi";
export default () => {
  return (
    <>
      <section className="box-center-row" id="Projects">
        <div className="subTitle">
          <h2>
            {" "}
            <MdOutlineAssignmentInd className="avatar" />
            Projects
          </h2>
        </div>
        <strong> Mega Project</strong> <hr />
        <div className="megaprojects">
          <div class="grid-item">
            <div className="Cards">
              <div className="Card-header">
                {/* <div className="card-avatar" /> */}

                <h2>Universal Hotel Solution</h2>

                <h2>
                  {" "}
                  <MdOutlineLabel className="icon" />
                  {"\t"} final year Project
                </h2>
              </div>

              <h2 className="content">
                Developed this project using Angular8 & Python Flask Framework
                with PostgreSQL having Travis CI Pipeline with Docker
                containerization for providing management solutions from small
                to large scale hotels. Implemented 3 way databinding using
                Angular & Firebase. Architected Authentication for web
                Application using OAuth2 and JSON web tokens (JWT).Wrote Testing
                Suite to validate each UI level operation.
              </h2>
              <div className="bottom-button-export">
                {" "}
                <div className="text">
                  <b>Lang - React native</b>
                </div>
                <a
                  className="explorebtn"
                  href="https://docs.google.com/document/d/1ceKJlsidtzayzkLIDJIm-9Jag0rtBMr205f-gP-1cO8/edit?usp=sharing"
                >
                  <div className="text">
                    <h2>explore</h2>
                    <FiExternalLink className="icon" />
                  </div>
                </a>
              </div>
              <br />
            </div>
          </div>
        </div>
        <div className="sub-head">
          <strong> Mini Project</strong> <hr />
        </div>
      </section>

      <div className="Skills">
        <div class="grid-container">
          {[
            {
              Title: "Personal Portfolio",
              link: "https://gksjfg.csb.app/",
              Lang: "React js",
              content:
                "Personal information about myself , just like different projects information about resuming and more.."
            }
          ].map((i) => (
            <div class="grid-item">
              <div className="Cards">
                <div className="Card-header">
                  {/* <div className="card-avatar">
                   
                  </div> */}
                  <div>
                    <h2> {i.Title}</h2>
                  </div>
                </div>
                <h2 className="content">{i.content}</h2>
                <div className="bottom-button-export">
                  {" "}
                  <div className="text">
                    <b>React Js</b>
                  </div>
                  <a href={i.link} className="explorebtn">
                    <div className="text ">
                      <h2>explore</h2>
                      <FiExternalLink className="icon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
