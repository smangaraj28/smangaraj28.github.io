import "./Home.css";
import { MdOutlineFileDownload, MdWork, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import Links from "../Links/Links";
import profile_img from "../../assets/profile.jpeg";
import { useState } from "react";

const galleryImages = [
  profile_img,
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500"
];

export default function Home({ personalInfo = {}, contactInfo = {} }) {
  const { fullName, 
          bio, 
          title, 
          company, 
          resumeUrl} = personalInfo;
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
          <h1 className="name-heading">{fullName}</h1>
          
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
                {bio}
              </span>
            </div>
          </div>          
          <div className="links-container">
            <Links {...contactInfo} />
          </div>

          <div className="button-container">
            <a
              href={resumeUrl}
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