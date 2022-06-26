import { BsInstagram, BsLightningCharge, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiCodesandbox, FiFacebook, FiGithub, FiTwitter } from "react-icons/fi";

export default function Links({linkedin, facebook, instagram, whatsapp,
     twitter, github, stackblitz, sandbox}) {

  return (
      <>
         <button className="avatar">
            <a href={linkedin}>
              <BsLinkedin style={{ fontSize: "1.5rem", color: "blue" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={instagram}>
              <BsInstagram style={{ fontSize: "1.5rem", color: "red" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={facebook}>
              <FiFacebook style={{ fontSize: "1.5rem", color: "blue" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={twitter}>
              <FiTwitter style={{ fontSize: "1.5rem", color: "skyblue" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={github}>
              <FiGithub style={{ fontSize: "1.5rem", color: "black" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={whatsapp}>
              <BsWhatsapp style={{ fontSize: "1.5rem", color: "green" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={sandbox}>
              <FiCodesandbox style={{ fontSize: "1.5rem", color: "blueviolet" }} />
            </a>
          </button>
          <button className="avatar">
            <a href={stackblitz}>
              <BsLightningCharge style={{ fontSize: "1.5rem", color: "brown" }} />
            </a>
          </button>
      </>
  );
}
