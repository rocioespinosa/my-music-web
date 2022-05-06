import React from "react";
import WelcomeBar from "./welcomeBar";
import MusicWeb from "./musicWeb";
import "./styles.css";

export default function index() {
  return (
    <div className="landing-page-container">
      <WelcomeBar /> <MusicWeb />;
    </div>
  );
}
