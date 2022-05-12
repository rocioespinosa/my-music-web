import "./styles.css";
import React from "react";
import SecondSectionAvatar from "../../secondSectionAvatar";

export default function SecondSection() {
  const artistInfo = [
    {
      title: "ARTPOP",
      image:
        "https://www.rockandpop.cl/wp-content/uploads/2021/04/art-400x360.jpg",
      play: [],
    },
    {
      title: "ARTPOP",
      image:
        "https://www.rockandpop.cl/wp-content/uploads/2021/04/art-400x360.jpg",
      play: [],
    },
    {
      title: "ARTPOP",
      image:
        "https://www.rockandpop.cl/wp-content/uploads/2021/04/art-400x360.jpg",
      play: [],
    },
    {
      title: "ARTPOP",
      image:
        "https://www.rockandpop.cl/wp-content/uploads/2021/04/art-400x360.jpg",
      play: [],
    },
    {
      title: "ARTPOP",
      image:
        "https://www.rockandpop.cl/wp-content/uploads/2021/04/art-400x360.jpg",
      play: [],
    },
  ];
  function createAvatar(arr) {
    const new_arr = [];

    for (let i = 0; i < arr.length; i++) {
      new_arr.push(
        <SecondSectionAvatar
          className="avatarHolder-avatar"
          {...artistInfo[i]}
        />
      );
    }

    return new_arr;
  }

  return (
    <div>
      <div className="second-section-section-title-greeting">
        {" "}
        Recommended for today{" "}
      </div>
      <span className="second-section-description">
        {" "}
        Inspired by your recent activity
      </span>
      <div className="second-section-avatar-container">
        {createAvatar(artistInfo)}
      </div>
    </div>
  );
}
