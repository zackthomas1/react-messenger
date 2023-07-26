import React from "react";
import { socket } from "../socket";

const ConnectionManger = (props) => {
  const connectHandler = () => {
    socket.connect();
  };

  const disconnectHandler = () => {
    socket.disconnect();
  };

  return (
    <div>
      {props.isConnected ? (
        <button onClick={disconnectHandler}>Disconnect</button>
      ) : (
        <button onClick={connectHandler}>Connect</button>
      )}
    </div>
  );
};

export default ConnectionManger;
