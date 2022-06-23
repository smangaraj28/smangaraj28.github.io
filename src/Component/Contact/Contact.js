import "./contact.css";
import "../../styles.css";
import { useState } from "react";
import {
  MdOutlineNearMe,
  MdOutlineAssignmentInd,
  MdOutlineLocationOn
} from "react-icons/md";

import { HiOutlineMail } from "react-icons/hi";
export default function () {
  const [submit, setsubmit] = useState(false);

  return (
    <main id="Contact">
      <div className="subTitle">
        <h2>
          {" "}
          <MdOutlineAssignmentInd className="avatar" />
          Contact Me
        </h2>
      </div>
      <div className="App2">
        <h3>
          <MdOutlineLocationOn className="avatar" />
          Google map.
        </h3>
        <br />

        <div>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55010.59071004668!2d75.97672930149307!3d17.645578173170737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dbe6796b75a3%3A0xe1423a39182882ff!2sNew%20vidi%20garkul%2C%20Maharashtra%20413006!5e1!3m2!1sen!2sin!4v1602495791273!5m2!1sen!2sin"
            frameborder="0"
            className="map"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="App">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setsubmit(true);
            setTimeout(() => {
              setsubmit(false);
            }, 3000);
          }}
        >
          <h1>Your feedback.</h1>
          <p>
            you can contact me on <a href="#"> smangaraj28@gmail.com</a>
          </p>
          <label for="Emain">
            {/* <HiOutlineMail className="usericon i" /> */}
            Email address
          </label>

          <input type="text" name="username" placeholder="Nobita@gnail.com" />
          <label for="password">Message</label>

          <textarea
            name="discription"
            placeholder="give feedback somthing ..:}"
            rows="10"
            cols="50"
          ></textarea>

          <button type="submit">
            send Message <MdOutlineNearMe />
          </button>
          {<b>Message sent succsessfullly......</b> && submit}
        </form>
      </div>
    </main>
  );
}
