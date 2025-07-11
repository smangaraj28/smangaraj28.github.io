import "./Navbar.css";
import {
  MdTurnedInNot,
  MdOutlineAssignmentInd,
  MdOutlineAssignment,
  MdOutlineContacts,
} from "react-icons/md";
import { BiHome } from "react-icons/bi";

const menuItems = [
  { name: "Home", route: "Home", icon: <BiHome /> },
  { name: "About", route: "About", icon: <MdOutlineAssignmentInd /> },
  { name: "Work Experience", route: "WorkExperience", icon: <MdOutlineAssignment /> },
  { name: "Skills", route: "Skills", icon: <MdOutlineAssignment /> },
  { name: "Projects", route: "Projects", icon: <MdTurnedInNot /> },
  { name: "Contact", route: "Contact", icon: <MdOutlineContacts /> },
];

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      {menuItems.map((item, index) => (
        <button
          key={item.name}
          className={currentPage === item.route ? "active" : "inactive"}
          onClick={() => setCurrentPage(item.route)}
        >
          {item.icon}
          <b>{item.name}</b>
        </button>
      ))}
    </nav>
  );
}