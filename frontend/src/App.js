import React, { useEffect, useState } from "react";
import { socket } from "./socket";

import MessageForm from "./components/MessageForm";
import MessagesList from "./components/MessagesList";
import ConnectionState from "./components/ConnectionState";

const DUMMY_MESSAGES = [
  {
    user: "johnnyBOI_69",
    text: "Hello",
  },
  {
    user: "zakthomas1",
    text: "world",
  },
];

const App = (props) => {
  // states
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState(DUMMY_MESSAGES);

  // hooks
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onSendMessage(msg) {
      console.log("Client recieved from server: ", msg);
      setMessages((prevMessages) => [...prevMessages, { user: "", text: msg }]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("send_message", onSendMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("send_message", onSendMessage);
    };
  }, []);

  //handlers
  const updateLocalMessagesHandler = (msg) => {
    setMessages((prevMessages) => [...prevMessages, { user: "", text: msg }]);
  };

  return (
    <div className="App">
      <ConnectionState isConnected={isConnected} />
      <MessagesList messages={messages} />
      <MessageForm onUpdateLocalMessages={updateLocalMessagesHandler} />
    </div>
  );
};

export default App;
