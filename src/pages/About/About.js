import "./About.css";
import { MdPersonOutline, MdOutlineEvent, MdWorkOutline } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import Links from "../Links/Links";

export default function About({ personalInfo = {}, contactInfo = {} }) {
  const { fullName = "", email = "", dob = "", title = "", company = "", professionalSummary = "" } = personalInfo;

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();

    const suffix = (d) => {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };

    return `${day}${suffix(day)} ${month} ${year}`;
  };

  return (
    <section className="about-container">
      {/* Left Column - Visual Elements */}
      <div className="visual-column">
        <div className="visual-content">
          <h2 className="section-title">My Story</h2>
          <div className="timeline-graphic"></div>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="content-column">
        <div className="content-wrapper">
          <h1 className="name-heading">About <span>Me</span></h1>
          
          <p className="summary-text">{professionalSummary}</p>
          
          <div className="info-grid">
            <div className="info-item">
              <MdPersonOutline className="info-icon" />
              <div>
                <h3>Full Name</h3>
                <p>{fullName}</p>
              </div>
            </div>
            
            <div className="info-item">
              <MdWorkOutline className="info-icon" />
              <div>
                <h3>Profession</h3>
                <p>{title} at {company}</p>
              </div>
            </div>
            
            <div className="info-item">
              <BiMailSend className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>{email}</p>
              </div>
            </div>
            
            <div className="info-item">
              <MdOutlineEvent className="info-icon" />
              <div>
                <h3>Date of Birth</h3>
                <p>{formatDate(dob)}</p>
              </div>
            </div>
          </div>
          
          <div className="links-container">
            <Links {...contactInfo} />
          </div>
        </div>
      </div>
    </section>
  );
}