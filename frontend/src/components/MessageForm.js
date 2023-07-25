import React, { useState } from "react";

const MessageForm = (props) => {
  // React States
  const [currentInput, setCurrentInput] = useState("");

  // Handlers
  const inputChangeHandler = (event) => {
    setCurrentInput(event.target.value)
    console.log(event.target.value)
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();

    console.log(currentInput);
    setCurrentInput("")
  };

  return (
    <form onSubmit={sendMessageHandler}>
      <label htmlFor="messageInput">message: </label>
      <input type="text" id="messageInput" onChange={inputChangeHandler} value={currentInput}/>
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
