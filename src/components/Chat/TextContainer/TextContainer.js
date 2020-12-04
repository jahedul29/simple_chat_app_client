import React from "react";
import "./TextContainer.css";
import onlineIcon from "../../../icons/onlineIcon.png";

const TextContainer = ({ users }) => {
  return (
    <div className="textContainer">
      <h3>
        Online <img src={onlineIcon} alt="" />{" "}
      </h3>
      <ul className="users">
        {users && users.map((user) => <li>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default TextContainer;
