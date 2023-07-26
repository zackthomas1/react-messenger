import React, { useState } from "react";
import { socket } from "../socket";

const MessageForm = (props) => {
  // React States
  const [msgText, setMsgText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handlers
  const msgChangeHandler = (event) => {
    setMsgText(event.target.value);
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();

    //
    const msgObj = {
      user: "Todo: get username",
      text: msgText,
      type: "msg",
    };
    props.onUpdateLocalMessages(msgObj);
    socket.emit("send_message", msgObj, (err) => {});
    console.log("Client sent: ", msgObj.text);

    //
    setMsgText("");
  };

  return (
    <form onSubmit={sendMessageHandler}>
      <label htmlFor="messageInput">message: </label>
      <input
        type="text"
        id="messageInput"
        onChange={msgChangeHandler}
        value={msgText}
      />
      <button type="submit" disabled={isLoading || !props.isConnected}>
        Send
      </button>
    </form>
  );
};

export default MessageForm;
