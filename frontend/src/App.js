import React, { useEffect, useState } from "react";
import { socket } from "./socket";

import MessageForm from "./components/MessageForm";
import MessagesList from "./components/MessagesList";
import ConnectionState from "./components/ConnectionState";
import ConnectionManger from "./components/ConnectionManger";

const DUMMY_MESSAGES = [
  {
    user: 'johnnyBOI_69',
    text: 'Hello',
    type: 'message'
  },
  {
    user: 'zakthomas1',
    text: 'world',
    type: 'message'
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

    function onSendMessage(msgObj) {
      console.log("Client recieved from server: ", msgObj);
      setMessages((prevMsgObjs) => [...prevMsgObjs, msgObj]);
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
  const updateLocalMessagesHandler = (msgObj) => {
    setMessages((prevMsgObjs) => [...prevMsgObjs, msgObj]);
  };

  return (
    <div className="App">
      <ConnectionState isConnected={isConnected} />
      <MessagesList messages={messages} />
      <MessageForm
        isConnected={isConnected}
        onUpdateLocalMessages={updateLocalMessagesHandler}
      />
      <ConnectionManger isConnected={isConnected} />
    </div>
  );
};

export default App;
