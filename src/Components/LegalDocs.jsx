import  { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Cyber <span className="legal-siteSign">Rakshak</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to Cyber Rakshak, your trusted online Cyber Rakshak platform.
         Our mission is Protecting your digital assets with cutting-edge technology and expert vigilance. 
         In an ever-evolving cyber landscape, we are your trusted shield against threats.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        Welcome to Cyber Rakshak, a startup cybersecurity Trainings & Investigation Center. 
        This Privacy Policy explains how we collect, use, disclose, 
        and protect your personal information when you use our services. 
        By using our services, you agree to the terms outlined in this Privacy Policy.
        </p>

        <p className="legal-title">Terms & Conditions</p>
        <p className="legal-description">
        Welcome to Cyber Rakshak Trainings & Investigation Center. 
        These Terms & Conditions outline the rules and regulations for using our website,
         training programs, and investigation services. By accessing our services, 
         you agree to comply with these terms.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2025 Cyber Rakshak. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
