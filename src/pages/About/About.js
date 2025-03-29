import "../About/About.css";
import { MdPersonOutline, MdOutlineEvent, MdWorkOutline } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import Links from "../../pages/Links/Links";

export default function About({ personalInfo = {}, contactInfo = {} }) {
  const { fullName = "", email = "", dob = "", title = "", company = "", professionalSummary = "" } = personalInfo;

  // Function to format the date
  const formatDate = (dateString) => {
    if (!dateString) return ""; // Return empty if no date is provided

    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // If invalid, return original string

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();

    // Add ordinal suffix (st, nd, rd, th)
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
    <div className="Home" id="About">
      <div className="header">
        <h1>About Me</h1>
        
        <div className="about-content">
          <p>{professionalSummary}</p>
        </div>
        
        <div className="main-table">
          <table>
            <tbody>
              <tr>
                <td><MdPersonOutline className="avatar" /></td>
                <td>{fullName}</td>
              </tr>
              <tr>
                <td><MdWorkOutline className="avatar" /></td>
                <td>{title} at {company}</td>
              </tr>
              <tr>
                <td><BiMailSend className="avatar" /></td>
                <td>{email}</td>
              </tr>
              <tr>
                <td><MdOutlineEvent className="avatar" /></td>
                <td>{formatDate(dob)}</td> {/* Formatted date */}
              </tr>
            </tbody>
          </table>
          <hr />
          <br />
        </div>
        
        <Links {...contactInfo} />
      </div>
    </div>
  );
}