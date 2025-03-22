import React, { useState } from "react";
import { MdEmail, MdMessage, MdSend } from "react-icons/md";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors when typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, message } = formData;

    if (!email || !message) {
      setError("All fields are required!");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">Have a question? Drop me a message!</p>

        {error && <p className="error-msg">{error}</p>}
        {submitted && <p className="success-msg">✅ Message sent successfully!</p>}

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
    </div>
  );
}
