import { useState } from "react";
import { MdEmail, MdSend, MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_cxsd90w",
  TEMPLATE_ID: "template_tx5jk9p",
  PUBLIC_KEY: "9jJfHD1i1p5n9lTqx"
};

export default function Contact({ personal = {}, links = {} }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name.trim()) {
      toast.error("Please enter your name!");
      setIsSubmitting(false);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Please enter a valid email!");
      setIsSubmitting(false);
      return;
    }

    if (formData.message.length < 10) {
      toast.error("Message should be at least 10 characters");
      setIsSubmitting(false);
      return;
    }

    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: personalInfo.fullName || "Recipient"
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      toast.error(`Failed to send. Try emailing ${personalInfo.email || "me directly"}`);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const socialLinks = [
    { icon: <FaLinkedin />, url: links.linkedin, name: "LinkedIn" }
  ].filter(link => link.url);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p className="subtitle">Have a project or want to collaborate? Reach out!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="card-header">
                <h3>Contact Info</h3>
                <div className="divider"></div>
              </div>
              
              <div className="info-item">
                <div className="icon-wrapper">
                  <MdEmail className="info-icon" />
                </div>
                <div className="info-content">
                  <span className="info-label">Email</span>
                  <a href={`mailto:${personal.email}`} className="info-value">
                    {personal.email || "example@email.com"}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                  <MdLocationOn className="info-icon" />
                </div>
                <div className="info-content">
                  <span className="info-label">Location</span>
                  <p className="info-value">
                    {personal.address ? 
                      `${personal.address}` : 
                      "City, Country"}
                  </p>
                </div>
              </div>

              {links.length > 0 && (
                <div className="social-section">
                  <p className="social-title">Connect with me</p>
                  <div className="social-links">
                    {links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        {link.icon}
                        <span>{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <ImSpinner8 className="spinner" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <MdSend />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
}