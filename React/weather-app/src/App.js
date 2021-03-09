import React from 'react'; 
import './App.css';
import axios from 'axios';

function App() {
  const object={message:"hello from react"}
  return (
    <div className="App">
      <header>
        <h1>React Weather App</h1>
      </header>
      <main>
        <button onClick={()=>{
          axios.post("http://localhost:3000/",object).then((res)=>{
            console.log(res)
          })
        }}>Send request</button>
      </main>
      <footer>
        <p>made by ching</p>
      </footer>
    </div>
  );
}

export default App;
