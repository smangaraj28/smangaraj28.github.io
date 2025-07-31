import "./About.css";
import { MdPersonOutline, MdOutlineEvent, MdWorkOutline } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import Links from "../Links/Links";

export default function About({ personal = {}, links = {} }) {
  const { 
    name = "", 
    email = "", 
    dob = "", 
    title = "", 
    company = "", 
    details = "" 
  } = personal;

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [day, month, year] = dateString.split("-");
    const date = new Date(`${year}-${month}-${day}`);
    if (isNaN(date)) return dateString;

    const d = date.getDate();
    const monthName = date.toLocaleString("en-US", { month: "short" });
    const y = date.getFullYear();

    const suffix = (dayNum) => {
      if (dayNum > 3 && dayNum < 21) return "th";
      switch (dayNum % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };

    return `${d}${suffix(d)} ${monthName} ${y}`;
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
          
          <p className="summary-text">{details}</p>
          
          <div className="info-grid">
            <div className="info-item">
              <MdPersonOutline className="info-icon" />
              <div>
                <h3>Full Name</h3>
                <p>{name}</p>
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
            <Links {...links} />
          </div>
        </div>
      </div>
    </section>
  );
}
