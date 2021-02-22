import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';


function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="App">
      <h1>To-do-App</h1>
       
    
       <Calendar />
   </div>
  );
}

export default App;
