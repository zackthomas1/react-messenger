import React from "react";

const NotificationElement = (props) => {
  return (
    <li>
      <span>
        {props.text} (notification)
      </span>
    </li>
  );
};

export default NotificationElement;
