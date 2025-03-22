import "../About/About.css";
import { useState, useEffect } from "react";
import aboutimg from "../../assets/036.png";
import { MdPersonOutline, MdOutlineEvent, MdWorkOutline } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import { BsLightningCharge, BsBuilding } from "react-icons/bs";
import Links from "../../pages/Links/Links";

export default function About({ personalInfo = {}, contactInfo = {} }) {
  const [dark, setDark] = useState(false);
  const { fullName = "", email = "", dob = "", title = "", company = "", professionalSummary = "" } = personalInfo;
  const [age, setAge] = useState(null);

  useEffect(() => {
    if (dob) {
      const birthDate = new Date(dob);
      if (!isNaN(birthDate.getTime())) {
        const today = new Date();
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        if (
          today.getMonth() < birthDate.getMonth() ||
          (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
        ) {
          calculatedAge -= 1;
        }
        setAge(calculatedAge);
      }
    }
  }, [dob]);

  return (
    <div
      className="Home"
      id="About"
      style={{
        minHeight: "100vh",
        color: dark ? "white" : "black",
        background: dark ? "#191919" : "white",
      }}
    >
      
      <div className="header">
        <h1>
          About <span style={{ color: dark ? "#4a4854" : "#0508be67" }}>Me</span>
        </h1>
        
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
                <td>{dob}</td>
              </tr>
              <tr className="tag">
                <td><BsLightningCharge className="avatar" /></td>
                <td>Age: <b>{age !== null ? age : "N/A"}</b></td>
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
