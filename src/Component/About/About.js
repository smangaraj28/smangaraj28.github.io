import "../Home/Home.css";
import { useState } from "react";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import aboutimg from "../../assets/036.png";
import { MdPersonOutline, MdOutlineEvent } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import {
  BsWhatsapp,
  BsInstagram,
  BsLightningCharge,
  BsLinkedin
} from "react-icons/bs";

export default function () {
  const [dark, setdark] = useState(false);
  const [Age, setAge] = useState("");

  const age = () => {
    let d = new Date();
    var agenow = d.getFullYear() - 2001 - 1;
    if (d.getFullYear() >= 7) {
      agenow = agenow + 1;
    }
    return JSON.stringify(agenow);
  };

  return (
    <div
      className="Home"
      id="About"
      style={{
        minHeight: window.innerHeight,
        color: dark ? "white" : "black",
        background: dark ? "#191919" : "white"
      }}
    >
      <div className="hero">
        <img src={aboutimg} width="80%" alt="bscjhdh" />
      </div>
      <div
        className="header"
        // style={{ background: dark ? "#ffffff1e" : "white" }}
      >
        <h1>
          About{" "}
          <span style={{ color: dark ? "#4a4854" : "#0508be67" }}>Me</span>
        </h1>
        <div className="About-containt">
          <p>
            I’m 26 years old currently working as a senior software engineer at PayPal.
             I like to learn new things. Being knowledgeable about any subject is an
            ongoing process, and I’m always proactive about seeking new
            opportunities to develop and grow in my role
          </p>{" "}
        </div>
        <div className="main-table">
          <table>
            <tbody>
              <tr>
                <td>
                  <MdPersonOutline className="avatar" />{" "}
                </td>
                <td>Soumya Sambit Mangaraj </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <BiMailSend className="avatar" />{" "}
                </td>
                <td> smangaraj28@gmail.com </td>
              </tr>
              <tr>
                <td>
                  <MdOutlineEvent className="avatar" />{" "}
                </td>
                <td> 28-02-1996 </td>

                <tr></tr>
                <tr className="tag">
                  <td>
                    <b>
                      {" "}
                      <BsLightningCharge className="avatar" />
                    </b>
                  </td>
                  <td>
                    Age
                    <b>{age()}</b>
                  </td>
                  <td>
                    <b></b>
                  </td>
                </tr>
              </tr>
            </tbody>
          </table>
          <hr />
          <br />
        </div>

        <div
          style={{ width: "100%", display: "flex", alignItems: "flex-start" }}
        >
          <b>Social media</b>
        </div>
        <div className="explore">
          {/* <button>
            <span> Dowloade Resume</span>
            <span>
              <MdOutlineFileDownload style={{ fontSize: "24px" }} />
            </span>
          </button> */}

          <button className="avatar">
            <a href="https://www.linkedin.com/in/soumya-sambit-mangaraj/">
              <BsLinkedin style={{ fontSize: "1.5rem" }} />
            </a>
          </button>
          <button className="avatar">
            <a href="https://www.instagram.com/soumyasambitmangaraj/">
              <BsInstagram style={{ fontSize: "1.5rem" }} />
            </a>
          </button>
          <button className="avatar">
            <a href="https://www.facebook.com/soumyasambit.mangaraj/">
              <FiFacebook style={{ fontSize: "1.5rem" }} />
            </a>
          </button>
          <button className="avatar">
            <a href="https://www.facebook.com/ganesh.varkal.3">
              <FiTwitter style={{ fontSize: "1.5rem" }} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
