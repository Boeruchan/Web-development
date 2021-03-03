
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

const data =
{ datums: [
{ date: "2-2-2021",
  name: "NewYearsEve"
},
{ date: "2-15-2021",
  name: "KillmeDay"
}
]
}


// const data =
// { datums: [
// { date: 20,
//     month: 2,
//     name: "meDay"
// },
// { date: 10,
//   month: 2,
//   name: "KillmeDay"
// }
// ]
// }

let n = new Date(data.datums[0].date);
let d = n.getDate();
let m = n.getMonth();
let y = n.getFullYear();
console.log(d +" "+ m + " "+ y)

function tileContent({date, view}) {


  return data.datums.map(el=>{
let temp = new Date(el.date);
  return (
           view === "month" &&
           date.getDate() === temp.getDate() &&
           date.getMonth() === temp.getMonth() ?
           (<p>{JSON.stringify(el.name)}</p>) : null
           ); } )}  


      // function tileContent({date, view}) {
      //   return (
      //     view === "month" &&
      //     date.getDate() === data.datums[0].date &&
      //     date.getMonth() === data.datums[0].month ?
      //     (<p>{JSON.stringify(data.datums[1].name)}</p>) : null
      //     ); } 
    

function App() {
const [value, setValue] = useState(new Date());

function onChange(nextValue) {
  setValue(nextValue);
}

return (
  <div className="App">
  <Calendar
  tileContent= {tileContent}
  // tileContent= {(({ activeStartDate, date, view }) => view === 'month' && date.getDate() === 10 && date.getMonth() === 3 ? (<p>Koningsdag</p>) : null) }
  onChange={onChange}
  value={value}
  />
  <div>
  <pre style={{backgroundColor:'#eee'}}>{JSON.stringify(data.datums, null, 2)}</pre>
  <pre style={{backgroundColor:'red'}}>{JSON.stringify(data.datums.name)}</pre>
  <pre style={{backgroundColor:'lightblue'}}>{JSON.stringify(data.datums[1].month)}</pre>
  <pre style={{backgroundColor:'lightgreen'}}>{JSON.stringify(data.datums[0].date)}</pre>
  <pre style={{backgroundColor:'red'}}>{JSON.stringify(data.name)}</pre>
  <pre style={{backgroundColor:'lightblue'}}>{JSON.stringify(data.month)}</pre>
  <pre style={{backgroundColor:'lightgreen'}}>{JSON.stringify(data.date)}</pre>
  </div>
  </div>
);
}

export default App;

