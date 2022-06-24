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

export default function App() {
  return (
    <>
      {/* <Model /> */}
      {/* <Topnav /> */}
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
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
