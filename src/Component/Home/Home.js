import "./Home.css";
import "./window.css";
import { useState } from "react";
import { MdOutlineFileDownload, MdWork } from "react-icons/md";
import Links from "../Links/Links";
import hero from "../../assets/034.png";
import profileimg from "../../assets/profile.jpeg";

export default function Home({ personal, links }) {
  const [darkMode, setDarkMode] = useState(false);
  const { name = "", keywords = [], currentStatus = "", resumeLink = "" } = personal || {};

  return (
    <section
      className="Home"
      id="home"
      style={{ color: darkMode ? "white" : "black", background: darkMode ? "#191919" : "white" }}
    >
      <div className="header">
        <div>
          <img src={profileimg} width="100%" height="100%" alt="Profile" />
        </div>
        <h1>
          {name.split(" ")[0]} <span style={{ color: darkMode ? "#4a4854" : "#0508be67" }}>{name.split(" ")[1]}</span>{" "}
          {name.split(" ")[2]}
        </h1>
        <p>
          {keywords.map((txt, index) => (
            <span key={index} style={{ color: "green", fontSize: "0.8rem", marginRight: "5px" }}>{txt}</span>
          ))}
        </p>
        <Links {...links} />
        <div className="status-container">
          <MdWork className="status-icon" style={{ fontSize: "50px", color: darkMode ? "#fff" : "blue" }} />
          <span>{currentStatus}</span>
        </div>
        <div className="buttons-group">
          <button>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <span>Resume</span>
              <MdOutlineFileDownload style={{ fontSize: "24px" }} />
            </a>
          </button>
        </div>
      </div>
      <div className="hero" style={{ backgroundColor: darkMode ? "#4a4854" : "none" }}>
        <img src={hero} width="80%" alt="Hero" />
      </div>
    </section>
  );
}