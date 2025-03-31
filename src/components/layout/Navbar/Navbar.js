import "./Navbar.css";
import {
  MdTurnedInNot,
  MdOutlineAssignmentInd,
  MdOutlineAssignment,
  MdOutlineContacts,
} from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { useState } from "react";

const menuItems = [
  { name: "home",route: "Home",icon: <BiHome /> },
  { name: "About",route: "About", icon: <MdOutlineAssignmentInd /> },

  { name: "Work Experience",route: "WorkExperience", icon: <MdOutlineAssignment /> },
  { name: "Skills",route: "Skills", icon: <MdOutlineAssignment /> },
  { name: "Projects",route: "Projects", icon: <MdTurnedInNot /> },
  { name: "Contact",route: "Contact", icon: <MdOutlineContacts /> },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="navbar">
      {menuItems.map((item, index) => (
        <a
          key={item.name}
          href={`#${item.route}`}
          className={activeIndex === index ? "active" : "inactive"}
          onClick={() => setActiveIndex(index)}
        >
          {item.icon}
          <b>{item.name}</b>
        </a>
      ))}
    </nav>
  );
}
