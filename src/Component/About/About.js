import "../Home/Home.css";
import { useState, useEffect } from "react";
import aboutimg from "../../assets/036.png";
import { MdPersonOutline, MdOutlineEvent } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import Links from "../../Component/Links/Links";

export default function About({ personal = {}, links = [] }) {
  const [dark, setDark] = useState(false);
  const { name = "", details = "", email = "", dob = "" } = personal;
  const [age, setAge] = useState(null);

  useEffect(() => {
    if (dob) {
      const parts = dob.split("-");
      if (parts.length === 3) {
        const formattedDob = `${parts[2]}-${parts[1]}-${parts[0]}`;
        const birthDate = new Date(formattedDob);
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
      <button onClick={() => setDark(!dark)} className="dark-mode-toggle">
        Toggle Dark Mode
      </button>
      
      <div className="hero">
        <img src={aboutimg} width="80%" alt="Profile" />
      </div>
      
      <div className="header">
        <h1>
          About <span style={{ color: dark ? "#4a4854" : "#0508be67" }}>Me</span>
        </h1>
        
        <div className="about-content">
          <p>{details}</p>
        </div>
        
        <div className="main-table">
          <table>
            <tbody>
              <tr>
                <td><MdPersonOutline className="avatar" /></td>
                <td>{name}</td>
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
        
        <Links links={links} />
      </div>
    </div>
  );
}