import React, { useState } from "react";
import { MdEmail, MdMessage, MdSend } from "react-icons/md";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      toast.error("⚠️ All fields are required!");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("❌ Invalid Email Address!");
      return;
    }

    // Sending email using EmailJS
    emailjs
      .send(
        "service_cxsd90w", // Replace with your EmailJS Service ID
        "template_tx5jk9p", // Replace with your EmailJS Template ID
        formData,
        "9jJfHD1i1p5n9lTqx" // Replace with your EmailJS Public Key
      )
      .then(() => {
        toast.success("✅ Message sent successfully!");
        setFormData({ email: "", message: "" });
      })
      .catch(() => {
        toast.error("❌ Failed to send message. Try again!");
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">I'd love to hear from you!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <MdEmail className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="true"
              required
            />
          </div>

          <div className="input-group">
            <MdMessage className="icon" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send Message <MdSend />
          </button>
        </form>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}
