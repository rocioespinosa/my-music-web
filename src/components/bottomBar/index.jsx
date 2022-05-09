import React from "react";
import "./styles.css";

console.clear();

export default function MusicPlayer() {
  return (
    <div className="player-container">
      <div class="container-audio">
        <audio className="control" controls loop autoplay>
          <source
            className="audio"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg"
            type="audio/ogg"
          />
        </audio>
      </div>
    </div>
  );
}
