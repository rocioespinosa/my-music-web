import React from "react";
import "./styles.css";

export default function WelcomeBar() {
  return (
    <div className="welcome-bar">
      <img
        src="https://gentescl.com/wp-content/uploads/2020/09/Campa%C3%B1a-Spotify.jpg"
        width="100%"
        height="100%"
        style={{
          objectFit: "cover",
          width: "80rem",
          height: "14rem",
          borderRadius: "25px",
        }}
      ></img>
    </div>
  );
}
