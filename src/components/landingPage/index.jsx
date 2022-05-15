import React from "react";
import WelcomeBar from "./welcomeBar";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import "./styles.css";

export default function index() {
  return (
    <div className="landing-page-container">
      <button className="upgrade-button"> Upgrade </button>
      <WelcomeBar /> <FirstSection />
      <SecondSection />
    </div>
  );
}
