import React from 'react'
import MessageForm from './components/MessageForm'
import MessagesWindow from './components/MessagesWindow'

const App = (props) => {
  return (
    <div className="App">
      <MessagesWindow/>
      <MessageForm/>
    </div>
  );
}

export default App;
