import "./styles.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import Navbar from "./components/layout/Navbar/Navbar";
import Project from "./pages/Projects/Project";
import Contact from "./pages/Contact/Contact";
import BottomNavbar from "./components/layout/Navbar/BottomNavbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import Context from "./Data/data";

export default function App() {
  const user = useContext(Context);
  return (
    <>
      {/* <Model /> */}
      {/* <Topnav /> */}
      <Home personalInfo={user.personalInfo} contactInfo={user.contactInfo}/>
      <About personalInfo={user.personalInfo} contactInfo={user.contactInfo}/>
      <Skills skills={user.technicalSkills}/>
      <WorkExperience workExperience={user.workExperience}/>
      <Project projects={user.projects}/>
      <Contact {...user.personalInfo}/>
      <div className="navC">
      <Navbar />
      </div>
      <Footer />
      <div className="navbar">
        <BottomNavbar />
      </div>
    </>
  );
}
