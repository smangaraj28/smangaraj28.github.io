import "./Home.css";
import { useState } from "react";
import { MdOutlineFileDownload, MdWork } from "react-icons/md";
import Links from "../Links/Links";
import hero from "../../assets/034.png";
import profileimg from "../../assets/profile.jpeg";

export default function Home({ personalInfo = {}, contactInfo = {} }) {
  const [darkMode, setDarkMode] = useState(false);
  const { fullName = "", professionalSummary = "", title = "", company = "", resumeUrl = "" } = personalInfo;

  return (
    <section className={`Home ${darkMode ? "dark-mode" : "light-mode"}`} id="home">
      
      {/* Dark Mode Toggle */}
      <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Profile & Header */}
      <div className="header">
        <img src={profileimg} alt="Profile" />

        <h1>
          {fullName.split(" ")[0]} <span>{fullName.split(" ")[1]}</span> {fullName.split(" ")[2]}
        </h1>
        
        <p>{professionalSummary}</p>

        <Links {...contactInfo} />

        <div className="status-container">
          <MdWork className="status-icon" />
          <span>{title} at {company}</span>
        </div>

        {/* Resume Button */}
        <div className="buttons-group">
          {resumeUrl && (
            <button>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <span>Resume</span>
                <MdOutlineFileDownload />
              </a>
            </button>
          )}
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero">
        <img src={hero} alt="Hero" />
      </div>
    </section>
  );
}
