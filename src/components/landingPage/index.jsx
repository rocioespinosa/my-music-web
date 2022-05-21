import React from "react";
import WelcomeBar from "./welcomeBar";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";
import "./styles.css";

export default function index() {
  return (
    <div className="landing-page-container">
      <div className="landing-page-buttons">
        <button className="upgrade-button"> Upgrade </button>

        <div className="dropdown">
          <button className="dropbtn">
            {" "}
            Rocío Espinosa
            <img src="https://culturacolectiva-cultura-colectiva-prod.cdn.arcpublishing.com/resizer/oCx2ePoKDVGtlsPEo16MKQvlHUc=/1024x768/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/culturacolectiva/3RAKPX5NBRG6JHTDMLCRCDIAAY.jpg"></img>{" "}
          </button>
          <div class="dropdown-content">
            <a href="#">Account</a>
            <a href="#">Profile</a>
            <a href="#">Settings</a>
          </div>
        </div>
      </div>
      <WelcomeBar /> <FirstSection />
      <SecondSection />
    </div>
  );
}
