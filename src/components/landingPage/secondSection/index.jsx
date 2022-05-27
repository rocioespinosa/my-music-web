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
  function createSection(arr) {
    const new_arr = [];

    for (let i = 0; i < 18; i++) {
      new_arr.push(<SecondSectionAvatar {...artistInfo[i]} />);
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
        {createSection(artistInfo)}
      </div>
    </div>
  );
}
