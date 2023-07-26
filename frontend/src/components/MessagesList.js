import React from "react";

const MessagesList = (props) => {
  return (
    <ul>
      {props.messages.map((message) => {
        return (
          <li>
            <span>{message.text}-{message.user}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default MessagesList;
