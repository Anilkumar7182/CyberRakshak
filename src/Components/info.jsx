import {  } from "@fortawesome/react-fontawesome";
import InformationCard from "./InformationCard";
import "../Styles/Hero.css";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          Cyber Rakshak, we specialize in cybersecurity training, digital forensics, 
          and cybercrime investigations to help individuals, businesses, 
          and organizations stay secure in the digital world.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Cyber Intelligence Bootcamp 🚀🔐"
          description="
The Cyber Intelligence Bootcamp is an intensive, 
hands-on training program designed to equip individuals 
with the skills and knowledge required to detect, prevent, 
and respond to cyber threats. This bootcamp is ideal for aspiring 
cybersecurity professionals, ethical hackers, investigators, and 
IT security enthusiasts."
        />

        <InformationCard
          title="Online VAPT Cyber Security Hands-on Training 🚀"
          description="
      The Online VAPT (Vulnerability Assessment & Penetration Testing) 
       Cyber Security Hands-on Training is a practical, real-world program 
       designed to help individuals master ethical hacking, network security, 
       and penetration testing techniques. This training is perfect for cybersecurity 
      professionals, IT administrators, students, and ethical hackers who want to enhance 
      their offensive and defensive security skills."
        />

        <InformationCard
          title="🔍 Cyber Investigation and Digital Forensic Internship 2025"
          description=" The Cyber Investigation and Digital Forensic Internship 2025 is designed to provide hands-on experience in cybercrime investigations, 
digital forensics, and cybersecurity analysis. This internship is ideal for students, 
ethical hackers, cybersecurity enthusiasts, and professionals looking to gain real-world investigative skills."
         
        />
      </div>
    </div>
  );
}

export default Info;
