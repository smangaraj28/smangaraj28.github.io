import "./contact.css";
import "../../styles.css";
import { useState } from "react";
import {
  MdOutlineNearMe,
  MdOutlineAssignmentInd,
} from "react-icons/md";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main id="Contact">
      <div className="subTitle">
        <h2>
          <MdOutlineAssignmentInd className="avatar" /> Contact Me
        </h2>
      </div>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>Your Feedback</h1>
          <p>
            You can contact me at <a href="mailto:smangaraj28@gmail.com">smangaraj28@gmail.com</a>
          </p>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="example@gmail.com" required autoComplete="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Write your feedback here..." rows="5" required></textarea>

          <button type="submit">
            Send Message <MdOutlineNearMe />
          </button>
          {submitted && <b>Message sent successfully!</b>}
        </form>
      </div>
    </main>
  );
}