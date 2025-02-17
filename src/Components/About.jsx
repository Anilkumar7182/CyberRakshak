import abimg from "../Assets/info-img.png";
import SolutionStep from "./SolutionStep.jsx";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={abimg} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Cyber Rakshak, Cyber Rakshak is a leading Cyber Security Training & Investigation Center, 
          dedicated to empowering individuals and organizations with cutting-edge skills in cyber defense, ethical hacking, 
          digital forensics, and cybercrime investigations.
          With the rise of cyber threats, data breaches, and online fraud, our mission is to educate, protect,
           and strengthen businesses, law enforcement, and professionals against digital risks
        </p>

        <h4 className="about-text-title">Why Choose Us</h4>

        <SolutionStep
          title="Cyber Security Training & Certifications "
          description="– Ethical Hacking, VAPT, SOC Analysis, Digital Forensics"
        />
        <SolutionStep
          title="Cybercrime Investigation & Digital Forensics "
          description="– Tracking cyber criminals, forensic evidence collection"
        />
        <SolutionStep
          title="Corporate Cybersecurity Solutions"
          description="  – Security audits, data protection, cyber awareness programs"
        />
        <SolutionStep
          title="Workshops & Awareness Programs"
          description=" – Training for students, professionals, and law enforcement agencies"
        />
       
      </div>
    </div>
  );
}

export default About;
