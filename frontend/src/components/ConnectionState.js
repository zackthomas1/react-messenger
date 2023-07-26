import React from "react";

const ConnectionState = (props) => {
  return <h2>{props.isConnected ? "Connected" : "Disconnected"}</h2>;
};

export default ConnectionState;
