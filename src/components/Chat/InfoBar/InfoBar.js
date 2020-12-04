import React from "react";
import onlineIcon from "../../../icons/onlineIcon.png";
import "./InfoBar.css";

const InfoBar = ({ room, name }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        {/* <h5>{name.slice(0, 1).toUpperCase() + name.slice(1)}</h5> */}
        <h5>{name.toUpperCase()}</h5>
      </div>
    </div>
  );
};

export default InfoBar;
