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
            <img src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1653516320~hmac=a52ca15d461b5a53d2fa5ebe38b461db"></img>{" "}
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
