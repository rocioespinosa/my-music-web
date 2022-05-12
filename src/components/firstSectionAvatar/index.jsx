import React from "react";
import "./styles.css";

export default function ArtistAvatar({ title, image, play }) {
  return (
    <div className="avatar">
      <div className="title-image-play-container">
        <div className="title"> {title} </div>
        <div>
          <img className="image" src={image} alt="artist" />
        </div>
        <div className="play">{play}</div>
      </div>
    </div>
  );
}
