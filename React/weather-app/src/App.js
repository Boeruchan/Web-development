import React, {useState} from 'react';
import './App.css';
import WeatherFetch from './Components/WeatherFetch';
import WeatherDetail from './Components/WeatherDetail';

function App() {
  const [active, setActive] = useState(null)
  return (
    <div className='App'>
      <WeatherFetch city="Amsterdam"/>
      <WeatherDetail
      lat="52.374"
      ion="4.8897"
      active={active}
      setActive={setActive}
      />
{/*       
        <WeatherDetail
      lat="52.375"
      ion="4.8897"
      active={active}
      setActive={setActive}
      />
      <WeatherFetch city="Zwijndrecht"/>
      */}
  </div>
)
  }

export default App;
