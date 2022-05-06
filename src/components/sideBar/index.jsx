import React from "react";
import "./styles.css";

export default function SideBar() {
  return (
    <div>
      <nav class="menu" tabindex="0">
        <div class="smartphone-menu-trigger"></div>

        <ul>
          <li class="icon-users">
            <span>Profile</span>
          </li>
          <li class="icon-home">
            <span>Home</span>
          </li>
          <li class="icon-customers">
            <span>Search</span>
          </li>
          <li class="icon-users">
            <span>Playlists</span>
          </li>
          <li class="icon-settings">
            <span>Settings</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
