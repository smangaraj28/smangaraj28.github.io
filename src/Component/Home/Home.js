import "./Home.css";
import "./window.css";
import { useState } from "react";
import {
  MdOutlineFileDownload,
  MdWork
} from "react-icons/md";
import Window from "./Window";
import hero from "../../assets/034.png";
import Links from "../Links/Links";
import { BsPaypal } from "react-icons/bs";

export default function Home(props) {
  const [dark, setdark] = useState(false);

  const { name, keywords, currentStatus } =props?.personal;
  const links = props?.links;

  return (
    <section
      className="Home"
      id="home"
      style={{
        color: dark ? "white" : "black",
        background: dark ? "#191919" : "white"
      }}
    >
      {/* <div className="Topheader">
        <button style={{ backgroundColor: dark ? "#4a4854" : "#f1f1f3" }}>
          {dark ? (
            <MdWbSunny
              className="iconButton"
              onClick={() => {
                setdark(!dark);
              }}
              style={{
                color: "white"
              }}
            />
          ) : (
            <FiMoon
              className="iconButton"
              onClick={() => {
                setdark(!dark);
              }}
            />
          )}
        </button>
      </div> */}
      <div
        className="header"
        // style={{ background: dark ? "#ffffff1e" : "white" }}
      >
        <h1>
            {name.split(" ")[0]}{" "}
            <span style={{ color: dark ? "#4a4854" : "#0508be67" }}>
              {name.split(" ")[1]}
            </span>{" "}
            {name.split(" ")[2]}
            <p>
              {keywords.map(txt => <span style={{ color: "green" }}>{txt + " "}</span>)}
            </p>
        </h1>
        <div className="p-box">
          <Links {...links}></Links>
        </div>
        <br />
        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            <MdWork
              style={{
                fontSize: "50px",
                marginRight: "0.6rem",
                color: dark ? "#ffff" : "blue"
              }}
            />
            <span>{currentStatus} <BsPaypal style={{ fontSize: "1rem" }} /> </span>
            <div className="buttons-grup" style={{justifyContent: "space-around"}}>
              <button>
                <span>Resume</span>
                <span>
                  <MdOutlineFileDownload style={{ fontSize: "24px" }} />
                </span>
              </button>
            </div>
        </div>
      </div>

      <div className="hero" style={{ backgroundColor: dark ? "#4a4854" : "none" }}>
        <img src={hero} width="80%" alt="bscjhdh" />
      </div>
      <div>
        <Window />
        <br />
      </div>
    </section>
  );
}
