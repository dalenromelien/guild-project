import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import 

function App() {
  const [message, setMessage] = useState("");

  function sendMsg(){
    msgService.sendMsg(message);
    console.log(message);
    setMessage("");
  }

  return (
    <div className="App">
      <div className='textArea'>
        <div className='user1'>

        </div>
        <div className='user2'>
          
        </div>
      </div>

      <div className='messageBar'>
        <label for="text-box"> Type your message here</label>
        <input onChange={e => setMessage(e.target.value)} type="text" name="text-box" value={message}/> 

        <button onClick={sendMsg}>Send</button>
      </div>
    </div>
  );
}

export default App;
