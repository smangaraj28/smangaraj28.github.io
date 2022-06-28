import "../Home/Home.css";
import "../../styles.css";
import "./Projects.css";
import {
  MdOutlineAssignmentInd,
  MdOutlineLabel
} from "react-icons/md";
import React from 'react';
import { FiExternalLink } from "react-icons/fi";
export default (props) => {
  console.log(props);

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
          {props?.mega.map((item) => (
              <div className="grid-item">
                <div className="Cards">
                  <div className="Card-header">
                    {/* <div className="card-avatar" /> */}
    
                    <h2>{item.title}</h2>
    
                    <h2>
                      {" "}
                      <MdOutlineLabel className="icon" />
                      {"\t"} {item.year}
                    </h2>
                  </div>
    
                  <h2 className="content">
                    {item.description}
                  </h2>
                  <div className="bottom-button-export">
                    {" "}
                    <div className="text">
                      <b>{item.skills}</b>
                    </div>
                    <a
                      className="explorebtn"
                      href={item.links}
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
          ))}
        </div>
        <div className="sub-head">
          <strong> Mini Project</strong> <hr />
        </div>
      </section>

      <div className="Skills">
        <div className="grid-container">
          {props?.mini.map((item) => (
            <div className="grid-item">
              <div className="Cards">
                <div className="Card-header">
                  {/* <div className="card-avatar">
                   
                  </div> */}
                  <div>
                    <h2> {item.title}</h2>
                  </div>
                </div>
                <h2 className="content">{item.description}</h2>
                <div className="bottom-button-export">
                  {" "}
                  <div className="text">
                    <b>{item.skills}</b>
                  </div>
                  <a href={item.links} className="explorebtn">
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
