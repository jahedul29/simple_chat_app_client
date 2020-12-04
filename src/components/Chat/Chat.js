import React, { useEffect, useState } from "react";
import "./Chat.css";
import io from "socket.io-client";
import queryString from "query-string";
import InfoBar from "./InfoBar/InfoBar";
import Input from "./Input/Input";
import Messages from "./Messages/Messages";
import TextContainer from "./TextContainer/TextContainer";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://simple-chat-app-jahed.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {});
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    console.log("Useeffect from message");
  }, [messages]);

  useEffect(() => {
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
    console.log("Useeffect from roomdata");
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  console.log("room data", users);

  return (
    <>
      {name && room ? (
        <div className="outerContainer">
          <div className="container">
            <InfoBar room={room} name={name} />
            <Messages messages={messages} name={name} />
            <Input
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
          <TextContainer users={users} />
        </div>
      ) : (
        <h1>Please login with username and room name</h1>
      )}
    </>
  );
};

export default Chat;
