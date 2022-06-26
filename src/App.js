import "./styles.css";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Skills from "./Component/Skills/Skills";
import Navbar from "./Component/Navbar/Navbar";
import Topnav from "./Component/Navbar/TopNavbar";
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
      <Home personal={user.personal} links={user.links}/>
      <About personal={user.personal} links={user.links}/>
      <Skills skills={user.skills}/>
      <Project {...user.projects}/>
      <Contact {...user.personal}/>
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
