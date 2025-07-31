import React, { useContext, useState } from "react";
import "./styles.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
// import Teaching from "./pages/Teaching/Teaching";
// import Education from "./pages/Education/Education";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/layout/Navbar/Navbar";
import Context from "./Data/data";
import { useDarkMode } from "./contexts/DarkModeContext";
import Gallery from "./pages/Gallery/Gallery";

export default function App() {
  const { personal, links, employement, teaching, education, projects, skills } = useContext(Context);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home personal={personal} links={links} />;
      case "About":
        return <About personal={personal} links={links} />;
      case "Skills":
        return <Skills skills={skills} />;
      case "WorkExperience":
        return <WorkExperience employement={employement} />;
      // case "Teaching":
        // return <Teaching teaching={teaching} />;
      // case "Education":
        // return <Education education={education} />;
      case "Projects":
        return <Project projects={projects} />;
      case "Gallery":
        return <Gallery />;
      case "Contact":
        return <Contact personal={personal} links={links} />;
      default:
        return <Home personal={personal} links={links} />;
    }
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      {renderPage()}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
