import React, { useContext } from "react";
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

export default function App() {
  const { personalInfo, contactInfo, technicalSkills, workExperience, projects } = useContext(Context);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <Home personalInfo={personalInfo} contactInfo={contactInfo} />
      <About personalInfo={personalInfo} contactInfo={contactInfo} />
      <Skills skills={technicalSkills} />
      <WorkExperience workExperience={workExperience} />
      <Project projects={projects} />
      <Contact {...personalInfo} />
      <Footer />
      <div className="navbar">
        <Navbar />
      </div>
    </div>
  );
}
