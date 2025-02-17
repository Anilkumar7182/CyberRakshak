import  { useEffect, useState } from "react";
import Main from "../Assets/main-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const handleClick = () => {
    window.location.href = "https://superprofile.bio/bookings/cyberrakshak"; // Replace with your URL for the button
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Stay Alert, Stay Secure!</p>
          <h2 className="text-title">
          Securing the Future with Cyber Training & Investigations
          </h2>
          <p className="text-descritpion">
          we are committed to protecting, educating, 
          and investigating in the digital world. 
          As a leading Cybersecurity Training & Investigation Center, 
          we empower individuals, businesses, and organizations with 
          the knowledge and skills to combat cyber threats effectively.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book a Session
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>10k+</p>
              <p>Receive Students</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Expert Trainers</p>
            </div>

            <div className="text-stats-container">
              <p>5+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Main} alt="hero" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
