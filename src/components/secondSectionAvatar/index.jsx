import React from "react";
import "./styles.css";

export default function SecondSectionAvatar({ title, image, play }) {
  return (
    <div className="second-section-avatar">
      <div className="second-section-title-image-play-container">
        <div className="second-section-title"> {title} </div>
        <div>
          <img className="second-section-image" src={image} alt="artist" />
        </div>
        <div className="second-section-play">{play}</div>
      </div>
    </div>
  );
}
