import { BsInstagram, BsLightningCharge, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiCodesandbox, FiFacebook, FiGithub, FiTwitter } from "react-icons/fi";

export default function Links({linkedin, facebook, instagram, whatsapp,
     twitter, github, stackblitz, sandbox}) {

  return (
      <>
         <button className="avatar">
            <a href={linkedin} target="_blank">
              <BsLinkedin style={{ fontSize: "1.5rem", color: "blue" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={instagram} target="_blank">
              <BsInstagram style={{ fontSize: "1.5rem", color: "red" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={facebook} target="_blank">
              <FiFacebook style={{ fontSize: "1.5rem", color: "blue" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={twitter} target="_blank">
              <FiTwitter style={{ fontSize: "1.5rem", color: "skyblue" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={github} target="_blank">
              <FiGithub style={{ fontSize: "1.5rem", color: "black" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={whatsapp} target="_blank">
              <BsWhatsapp style={{ fontSize: "1.5rem", color: "green" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={sandbox} target="_blank">
              <FiCodesandbox style={{ fontSize: "1.5rem", color: "blueviolet" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={stackblitz} target="_blank">
              <BsLightningCharge style={{ fontSize: "1.5rem", color: "brown" }} />
            </a>
          </button>
      </>
  );
}
