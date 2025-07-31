import "./Home.css";
import { MdOutlineFileDownload, MdWork, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import Links from "../Links/Links";
import profile_img from "../../assets/profile_img.jpeg";
import baba_mumy_img from "../../assets/baba_mumy_img.JPG";
import { useState } from "react";

const galleryImages = [
  profile_img,
  baba_mumy_img
];

export default function Home({ personal = {}, links = {} }) {
  const { 
    name, 
    keywords, 
    title, 
    company, 
    resumeLink 
  } = personal;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="home-container">
      {/* Left Column - Photo Gallery */}
      <div className="gallery-column">
        <div className="gallery-container">
          <img 
            src={galleryImages[currentImageIndex]} 
            alt="Gallery" 
            className="gallery-image" 
          />
          <div className="gallery-controls">
            <button onClick={prevImage} className="gallery-arrow">
              <MdChevronLeft />
            </button>
            <div className="gallery-indicators">
              {galleryImages.map((_, index) => (
                <span 
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
            <button onClick={nextImage} className="gallery-arrow">
              <MdChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="content-column">
        <div className="content-wrapper">
          <h1 className="name-heading">{name}</h1>
          
          <div className="professional-title-container">
            <div className="title-row">
              <MdWork className="title-icon" />
              <span className="title-text">
                {title} @{company}
              </span>
            </div>
            <div className="title-row">
              <FaChalkboardTeacher className="title-icon" />
              <span className="title-text">
                {keywords}
              </span>
            </div>
          </div>          

          <div className="links-container">
            <Links {...links} />
          </div>

          <div className="button-container">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              <span>Download Resume</span>
              <MdOutlineFileDownload className="download-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
