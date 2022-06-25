import "../Home/Home.css";
import { useState } from "react";
import aboutimg from "../../assets/036.png";
import { MdPersonOutline, MdOutlineEvent } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import Links from "../../Component/Links/Links";

export default function (props) {
  const [dark, setdark] = useState(false);
  const [Age, setAge] = useState("");
  const { name, details, email, dob } =props?.personal;
  const links = props?.links;
  const age = () => {
    let d = new Date();
    var agenow = d.getFullYear() - 1996 - 1;
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
            {details}
          </p>{" "}
        </div>
        <div className="main-table">
          <table>
            <tbody>
              <tr>
                <td>
                  <MdPersonOutline className="avatar" />{" "}
                </td>
                <td>{name} </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <BiMailSend className="avatar" />{" "}
                </td>
                <td> {email} </td>
              </tr>
              <tr>
                <td>
                  <MdOutlineEvent className="avatar" />{" "}
                </td>
                <td> {dob} </td>

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
          <Links {...links}></Links>
        </div>
      </div>
    </div>
  );
}
