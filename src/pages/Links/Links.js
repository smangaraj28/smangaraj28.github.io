import { BsInstagram, BsLightningCharge, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiCodesandbox, FiFacebook, FiGithub, FiTwitter } from "react-icons/fi";

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
    <div className="flex gap-4 mt-4">
      {links
        .filter(link => link.href) // Only show non-empty links
        .map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="p-2 rounded-full border hover:shadow-md transition"
            style={{ color: link.color, fontSize: "1.5rem" }}
          >
            {link.icon}
          </a>
        ))}
    </div>
  );
}
