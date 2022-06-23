import React from "react";
import "../styles.css";
import * as BS from "react-icons/bs";
import * as FI from "react-icons/fi";
const Footer = () => {
  return (
    <div className="footer">
      <h1>Bapu</h1>

      <p>Copyright © 2022 Bapu. All rights reserved.</p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexFlow: "row wrap"
        }}
      >
        <button className="avatar">
          <a href="https://wa.me/9658793973">
            <BS.BsWhatsapp style={{ fontSize: "1.5rem", color: "black" }} />
          </a>
        </button>
        <button className="avatar">
          <a href="https://www.instagram.com/soumyasambitmangaraj/">
            <BS.BsInstagram style={{ fontSize: "1.5rem", color: "black" }} />
          </a>
        </button>
        <button className="avatar">
          <a href="https://www.facebook.com/soumyasambit.mangaraj/">
            <FI.FiFacebook style={{ fontSize: "1.5rem", color: "black" }} />
          </a>
        </button>
        <button className="avatar">
          <a href="https://www.linkedin.com/in/soumya-sambit-mangaraj/">
            <FI.FiLinkedin style={{ fontSize: "1.5rem", color: "black" }} />
          </a>
        </button>
      </div>
    </div>
  );
};
export default Footer;
