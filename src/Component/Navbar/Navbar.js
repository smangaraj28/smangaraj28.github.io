import "./Navbar.css";
import "../Home/Home.css";
import {
  MdTurnedInNot,
  MdOutlineAssignmentInd,
  MdOutlineAssignment,
  MdOutlineContacts,
} from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { useState } from "react";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const menuItems = [
    { name: "home", icon: <BiHome className="avatar" /> },
    { name: "About", icon: <MdOutlineAssignmentInd className="avatar" /> },
    { name: "Skills", icon: <MdOutlineAssignment className="avatar" /> },
    { name: "Projects", icon: <MdTurnedInNot className="avatar" /> },
    { name: "Contact", icon: <MdOutlineContacts className="avatar" /> },
  ];

  return (
    <div className="item-container">
      {isVisible && (
        <div>
          {menuItems.map((item, index) => (
            <a key={index} href={`#${item.name}`}>
              <div
                className={index === activeIndex ? "active" : "inactive"}
                data-foo={item.name}
                onClick={() => setActiveIndex(index)}
              >
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}