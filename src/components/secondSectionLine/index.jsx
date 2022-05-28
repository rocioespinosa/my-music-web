import React from "react";
import SecondSectionAvatar from "../secondSectionAvatar";

const SecondSectionLine = ({ artistsInfos, title, subtitle }) => {
  return (
    <div>
      <div style={{ color: "white" }}>{title}</div>
      <div style={{ color: "white" }}>{subtitle}</div>
      {artistsInfos.map((artistInfo) => (
        <SecondSectionAvatar {...artistInfo} />
      ))}
    </div>
  );
};

export default SecondSectionLine;
