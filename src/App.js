import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [message,setMessage] = useState(0); 

  function updatemessage()
  {
    setMessage(message + 1)
  }
  return (
    <div className="App">

      <h1> {message} </h1>

      <button onClick = {updatemessage}>Click Me</button>

      
   
    </div>
  );
}

export default App;
