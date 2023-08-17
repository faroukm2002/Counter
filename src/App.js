import React, { useState } from 'react';
import './App.css';

function App() {
  const [clicks, setClicks] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div className="App container p-5 text-center d-flex flex-column justify-content-between align-content-between w-50 ">
      <h1>Click Counter</h1>
      <h4 style={showText?{visibility:"visible"}:{visibility:"hidden"}}>you clicked {clicks} times!</h4>

      <div>
        <button className="btn btn-success" onClick={() => setClicks(clicks + 1)}>
          +
        </button>
        <button className="btn btn-danger" onClick={() => setClicks(clicks - 1)}>
          -
        </button>
       
      </div>
      <br></br>
      <button className={showText?"btn btn-danger":"btn btn-primary"}
          onClick={()=>{setShowText(!showText);console.log(showText);}}      
      >{showText?<span>hide</span>:<span>show</span>}</button>
    </div>
  );
}

export default App;
