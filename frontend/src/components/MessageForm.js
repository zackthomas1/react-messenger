import React, { useState } from "react";
import { socket } from "../socket";

const MessageForm = (props) => {
  // React States
  const [msgInput, setMsgInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handlers
  const msgChangeHandler = (event) => {
    setMsgInput(event.target.value);
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();

    //
    props.onUpdateLocalMessages(msgInput);
    socket.emit("send_message", msgInput, (err) => {
      if (err) {
        console.log("MessageForm: ", err);
      }
    });
    console.log("Client sent: ", msgInput);

    //
    setMsgInput("");
  };

  return (
    <form onSubmit={sendMessageHandler}>
      <label htmlFor="messageInput">message: </label>
      <input
        type="text"
        id="messageInput"
        onChange={msgChangeHandler}
        value={msgInput}
      />
      <button type="submit" disabled={isLoading}>
        Send
      </button>
    </form>
  );
};

export default MessageForm;
