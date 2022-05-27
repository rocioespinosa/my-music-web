import React from "react";
import "./styles.css";

export default function SideBar() {
  return (
    <div className="side-bar-container">
      <nav class="menu" tabindex="0">
        <div class="smartphone-menu-trigger"></div>

        <ul>
          <li class="icon-home">
            <span>Home</span>
          </li>
          <li class="icon-search">
            <span>Search</span>
          </li>
          <li class="icon-library">
            <span>Your Library</span>
          </li>
          <li class="icon-playlist">
            <span>Create Playlist</span>
          </li>
          <li class="icon-liked-songs">
            <span>Liked Songs</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
