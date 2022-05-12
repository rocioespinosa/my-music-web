import React from "react";
import ArtistAvatar from "../../firstSectionAvatar";
import "./styles.css";

export default function ArtistHolder() {
  const artistInfo = [
    {
      title: "Born This Way",
      image:
        "https://i0.wp.com/www.alexurbanpop.com/wp-content/uploads/2019/06/Lady-Gaga-Born-This-Way.png?fit=985%2C985&ssl=1",
      play: [],
    },
    {
      title: "Born This Way",
      image:
        "https://i0.wp.com/www.alexurbanpop.com/wp-content/uploads/2019/06/Lady-Gaga-Born-This-Way.png?fit=985%2C985&ssl=1",
      play: [],
    },
    {
      title: "Born This Way",
      image:
        "https://i0.wp.com/www.alexurbanpop.com/wp-content/uploads/2019/06/Lady-Gaga-Born-This-Way.png?fit=985%2C985&ssl=1",
      play: [],
    },
    {
      title: "Born This Way",
      image:
        "https://i0.wp.com/www.alexurbanpop.com/wp-content/uploads/2019/06/Lady-Gaga-Born-This-Way.png?fit=985%2C985&ssl=1",
      play: [],
    },
    {
      title: "Born This Way",
      image:
        "https://i0.wp.com/www.alexurbanpop.com/wp-content/uploads/2019/06/Lady-Gaga-Born-This-Way.png?fit=985%2C985&ssl=1",
      play: [],
    },
    {
      title: "Born This Way",
      image:
        "https://i0.wp.com/www.alexurbanpop.com/wp-content/uploads/2019/06/Lady-Gaga-Born-This-Way.png?fit=985%2C985&ssl=1",
      play: [],
    },
  ];
  function createAvatar(arr) {
    const new_arr = [];

    for (let i = 0; i < arr.length; i++) {
      new_arr.push(
        <ArtistAvatar className="avatarHolder-avatar" {...artistInfo[i]} />
      );
    }

    return new_arr;
  }

  return (
    <div>
      <div className="section-title-greeting"> Good night </div>
      <div className="avatar-container">{createAvatar(artistInfo)}</div>
    </div>
  );
}
