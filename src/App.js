import "./styles.css";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skills";
import WorkExperience from "./Component/WorkExperience/WorkExperience";
import Navbar from "./Component/Navbar/Navbar";
import Project from "./Component/Projects/Project";
import Contact from "./Component/Contact/Contact";
import BottomNavbar from "./Component/Navbar/BottomNavbar";
import Footer from "./Component/Footer";
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
