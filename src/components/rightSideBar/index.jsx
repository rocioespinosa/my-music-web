import React from "react";
import "./styles.css";

export default function SideBar() {
  return (
    <div
      className="right-bar-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <button
        className="settings"
        style={{ alignContent: "center", justifyContent: "center" }}
      >
        SETTINGS
      </button>

      <div class="icon-home">
        <span>Home</span>
      </div>
    </div>
  );
}
