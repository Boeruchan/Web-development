import React from 'react';
import './App.css';
import WeatherFetch from './Components/WeatherFetch';

function App() {
  return (
    <div className='App'>
      <WeatherFetch city="Hawaii"/>
      <WeatherFetch city="Zwijndrecht"/>
  </div>
)
  }

export default App;
