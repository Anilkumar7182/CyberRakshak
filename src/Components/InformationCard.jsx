import PropTypes from "prop-types"; // ✅ Import PropTypes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";

function InformationCard({ icon, title, description }) {
  const handleClick = () => {
    window.location.href = "https://superprofile.bio/cyberrakshak"; // Replace with your URL
  };

  return (
    <div className="info-cards">
      <span className="info-card-icon">
        <FontAwesomeIcon className="info-fa-icon" icon={icon} />
      </span>
      <p className="info-card-title">{title}</p>
      <p className="info-card-description">{description}</p>
      <button className="text-appointment-btn" type="button" onClick={handleClick}>
        <FontAwesomeIcon icon={faCalendarCheck} /> Enroll Now
      </button>
    </div>
  );
}

// ✅ Define PropTypes for props validation
InformationCard.propTypes = {
  icon: PropTypes.object.isRequired,  // FontAwesome icon should be an object
  title: PropTypes.string.isRequired,  // Title must be a string
  description: PropTypes.string.isRequired,  // Description must be a string
};

export default InformationCard;




















