import "./styles.css";
import React from "react";
import SecondSectionAvatar from "../../secondSectionAvatar";
import SecondSectionLine from "../../secondSectionLine";

export default function SecondSection() {
  const artistsInfo = [
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
      new_arr.push(
        <SecondSectionLine
          artistsInfos={arr}
          title={`Recommended for today${i}`}
          subtitle={`Inspired by your recent activity${i}`}
        />
      );
    }

    return new_arr;
  }

  return (
    <div>
      <div className="second-section-section-title-greeting"></div>
      <span className="second-section-description"></span>
      <div className="second-section-avatar-container">
        {createSection(artistsInfo)}
      </div>
    </div>
  );
}
