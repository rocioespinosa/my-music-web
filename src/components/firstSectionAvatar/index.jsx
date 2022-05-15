import React, { useState } from "react";
import "./styles.css";

export default function ArtistAvatar({ title, image, play }) {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="avatar"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img className="image" src={image} alt="artist" />
      <div className="title-button-container">
        <div className="title"> {title} </div>
        {isHovering && <div className="play">Playing button</div>}
      </div>
    </div>
  );
}
