import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Form from './Todo/Form';
// import Todo from './Todo/Todo';

import './App.css';

const data =
{ datums: [
  {
  date: "1-1-2020",
  name: "NewYearsEve"
},
{
  date: "4-10-2020",
  name: "GoodFriday"
},
{
  date: "4-12-2021",
  name: "Easter"
},
{
  date: "4-13-2021",
  name: "Easter",
  background: "red"
},
{
  date: "4-27-2021",
  name: "KingsDay"
},
{
  date: "5-5-2021",
  name: "LiberationDay"
},
{
  date: "5-21-2021",
  name: "Ascension"
},
{
  date: "5-31-2021",
  name: "Penetecost"
},
{
  date: "6-1-2021",
  name: "Ascension"
},
{
  date: "12-25-2021",
  name: "ChristmasEve"
},
{
  date: "12-26-2021",
  name: "Christmas"
},
{
  date: "12-31-2021",
  name: "NewYearsEve"
  } 
]
}

const TestObject = () => {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true)
  return (
    <div>
      <input type="submit" value="search" onClick={onClick} />
      { showResults ? <App /> : null }
      </div>
  )
}
// const TooDoo = () => (
//   <Todo />
// )


function tileContent({date, view}) {
return data.datums.map(el=>{

const temp = new Date(el.date);
const sliceNaam = el.name.slice(1,2);
  return (
           view === "month" &&
           date.getDate() === temp.getDate() &&
           date.getMonth() === temp.getMonth() ?
           <p className="groen">{sliceNaam}</p> : null
          )
 });
      }

function App() {
const [value, setValue] = useState(new Date());

function onChange(nextValue) {
  setValue(nextValue);
}

return (
  <div className="App">
  <Calendar
  tileContent= {tileContent}
  onChange={onChange}
  onClick={TestObject}
  value={value}
  />
  <div id="results">
  <Form />
  </div>
  </div>
);
}

export default App;

