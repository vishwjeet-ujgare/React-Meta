// AchivementCard.js
import React from "react";
import PropTypes from "prop-types";
import "./achivementCards.css";

export default function AchivementCard({ imgSrc, title, description, buttonText }) {
  return (
    <div className="achivements-card">
      <img src={imgSrc} alt={`${title}-img`} />
      <div className="achivements-card-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
}

AchivementCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
