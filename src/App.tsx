import React from 'react';
import Message from './Message'; 

function App() {
  const messageText = "ПРИВЕТ";

  return (
    <div>
      <h1>Мое приложение</h1>
      <Message text={messageText} />
    </div>
  );
}

export default App;