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
            src="https://www.google.com/maps/place/Khordha,+Odisha+752057/@20.1747172,85.619809,19z/data=!3m1!4b1!4m21!1m15!4m14!1m6!1m2!1s0x3a19ad05039d8afb:0xa5a807202686e206!2sNabinabag+Chaka,+Khordha,+Odisha!2m2!1d85.6191644!2d20.1748079!1m6!1m2!1s0x3bc5dbe6796b75a3:0xe1423a39182882ff!2sNew+vidi+garkul+Maharashtra+413006!2m2!1d75.9739003!2d17.6460579!3m4!1s0x3a19aca3d2b8d0c9:0xf6942d8ff9120bf8!8m2!3d20.1747159!4d85.6203563"
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
