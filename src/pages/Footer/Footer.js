import React from "react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

const socialLinks = [
  { icon: <BsWhatsapp />, url: "https://wa.me/9658793973", label: "WhatsApp" },
  { icon: <BsInstagram />, url: "https://www.instagram.com/soumyasambitmangaraj/", label: "Instagram" },
  { icon: <FiFacebook />, url: "https://www.facebook.com/soumyasambit.mangaraj/", label: "Facebook" },
  { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/soumya-sambit-mangaraj/", label: "LinkedIn" }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h1 className="footer-title">Bapu</h1>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Bapu. All rights reserved.
          </p>
        </div>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={link.label}
            >
              <span className="social-icon">{link.icon}</span>
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;