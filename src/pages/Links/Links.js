import { BsInstagram, BsLightningCharge, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiCodesandbox, FiFacebook, FiGithub, FiTwitter } from "react-icons/fi";
import "./Links.css"; // Import the CSS file

export default function Links({ linkedin, facebook, instagram, whatsapp, twitter, github, stackblitz, codesandbox }) {
  const links = [
    { href: linkedin, icon: <BsLinkedin />, color: "blue", label: "LinkedIn" },
    { href: instagram, icon: <BsInstagram />, color: "red", label: "Instagram" },
    { href: facebook, icon: <FiFacebook />, color: "blue", label: "Facebook" },
    { href: twitter, icon: <FiTwitter />, color: "skyblue", label: "Twitter" },
    { href: github, icon: <FiGithub />, color: "black", label: "GitHub" },
    { href: whatsapp, icon: <BsWhatsapp />, color: "green", label: "WhatsApp" },
    { href: codesandbox, icon: <FiCodesandbox />, color: "blueviolet", label: "CodeSandbox" },
    { href: stackblitz, icon: <BsLightningCharge />, color: "brown", label: "StackBlitz" }
  ];

  return (
    <div className="links-container">
      {links
        .filter(link => link.href) // Only show non-empty links
        .map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="link-item"
            style={{ color: link.color }} // Apply color directly here
          >
            {link.icon}
          </a>
        ))}
    </div>
  );
}
