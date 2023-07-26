import React from "react";
import MessageElement from "./MessageElement";
import NotificationElement from "./NotificationElement";
const MessagesList = (props) => {
  return (
    <ul>
      {props.messages.map((msg) => {
        return msg.type === "notification" ? (
          <NotificationElement text={msg.text} />
        ) : (
          <MessageElement text={msg.text} user={msg.user} />
        );
      })}
    </ul>
  );
};

export default MessagesList;
