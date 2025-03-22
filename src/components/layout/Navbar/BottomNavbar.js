import "./Navbar.css";
import "../../../pages/Home/Home.css";
import {
  MdTurnedInNot,
  MdOutlineAssignmentInd,
  MdOutlineAssignment,
  MdOutlineContacts,
} from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { useState } from "react";

const menuItems = [
  { name: "home", icon: <BiHome /> },
  { name: "About", icon: <MdOutlineAssignmentInd /> },
  { name: "Skills", icon: <MdOutlineAssignment /> },
  { name: "Projects", icon: <MdTurnedInNot /> },
  { name: "Contact", icon: <MdOutlineContacts /> },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav className="navbar">
      {menuItems.map((item, index) => (
        <a
          key={item.name}
          href={`#${item.name}`}
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
