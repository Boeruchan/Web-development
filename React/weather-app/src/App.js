import React, {useState} from 'react';
import './App.css';
import WeatherFetch from './Components/WeatherFetch';
import WeatherDetail from './Components/WeatherDetail';

function App() {
  const [toggle, setToggle ] = useState(null);
  const [active, setActive] = useState(null);

  const toggled = () => {
    setToggle(!toggle);
  }

  console.log(toggled)

  return (
    <div className='App'>
      <div className='city'>
      <button onClick={toggled}>
        <WeatherFetch city="Amsterdam"/>
        </button>
        <div className='detail'>
          {toggle ? <WeatherDetail lat="52.375" ion="4.8897" active={active} setActive={setActive} /> : null}
          </div>
      </div>
    

{/* <WeatherDetail lat="52.374" ion="4.8897"
      active={active}
      setActive={setActive}
      /> } */}

{/* <WeatherDetail lat="52.374" ion="4.8897"
      active={active}
      setActive={setActive} */}

{/* <WeatherFetch city="Zwijndrecht"/> */}

  </div>
)
    }

export default App;
