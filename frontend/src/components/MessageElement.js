import React from "react";

const MessageElement = (props) => {
  return (
    <li>
      <span>
        {props.text}-{props.user}
      </span>
    </li>
  );
};

export default MessageElement;
