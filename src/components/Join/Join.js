import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h2 className="heading">Join In Your Desired Room</h2>
        <div className="mt-20">
          <input
            type="text"
            className="joinInput"
            placeholder="Your user name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            className="joinInput mt-20"
            placeholder="Desired room name"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
