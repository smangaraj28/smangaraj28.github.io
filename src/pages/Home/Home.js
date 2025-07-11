import "./Home.css";
import { MdOutlineFileDownload, MdWork } from "react-icons/md";
import Links from "../Links/Links";
import profile_img from "../../assets/profile.jpeg";

export default function Home({ personalInfo = {}, contactInfo = {} }) {
  const { fullName = "", bio = "", title = "", company = "", resumeUrl = "" } = personalInfo;

  return (
    <section className="home-container">
      {/* Left Column - Profile Image */}
      <div className="profile-column">
        <img src={profile_img} alt="Profile" className="profile-image" />
      </div>

      {/* Right Column - Content */}
      <div className="content-column">
        <div className="content-wrapper">
          <h1 className="name-heading">
            {fullName}
          </h1>

          <p className="professional-title">
            {title} @{company}
          </p>

          <p className="summary-text">{bio}</p>

          <div className="links-container">
            <Links {...contactInfo} />
          </div>

          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              <span>Download Resume</span>
              <MdOutlineFileDownload className="download-icon" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}