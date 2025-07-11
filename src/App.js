import React, { useContext, useState } from "react";
import "./styles.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Context from "./Data/data";
import { useDarkMode } from "./contexts/DarkModeContext";
import Gallery from "./pages/Gallery/Gallery";

export default function App() {
  const { personalInfo, contactInfo, technicalSkills, workExperience, projects } = useContext(Context);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch(currentPage) {
      case "Home":
        return <Home personalInfo={personalInfo} contactInfo={contactInfo} />;
      case "About":
        return <About personalInfo={personalInfo} contactInfo={contactInfo} />;
      case "Skills":
        return <Skills skills={technicalSkills} />;
      case "WorkExperience":
        return <WorkExperience workExperience={workExperience} />;
      case "Projects":
        return <Project projects={projects} />;
      case "Gallery":
        return <Gallery />;
      case "Contact":
        return <Contact personalInfo={personalInfo} contactInfo={contactInfo} />;
      default:
        return <Home personalInfo={personalInfo} contactInfo={contactInfo} />;
    }
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      {renderPage()}

      {/* <Footer /> */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}