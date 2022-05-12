import React from "react";
import WelcomeBar from "./welcomeBar";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import "./styles.css";

export default function index() {
  return (
    <div className="landing-page-container">
      <span>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>
      <button className="upgrade-button"> Upgrade </button>
      <span>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>
      <WelcomeBar /> <FirstSection />
      <span>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</span>
      <SecondSection />
    </div>
  );
}
