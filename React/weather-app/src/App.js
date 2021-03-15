import React from 'react';
import './App.css';
import WeatherFetch from './Components/WeatherFetch';
import WeatherDetail from './Components/WeatherDetail';

function App() {
  return (
    <div className='App'>
      {/* <WeatherFetch city="Amsterdam"/> */}
      <WeatherDetail
      lat="52.374"
      ion="4.8897"
      />
      {/* <WeatherFetch city="Zwijndrecht"/> */}
     
  </div>
)
  }

export default App;
