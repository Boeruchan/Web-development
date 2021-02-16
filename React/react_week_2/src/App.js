// (classversion) import React,  { Component } from 'react';
import React,  { useState } from 'react';
import './App.css';
import Person from './Person/Person';
// import { useState } from 'react';


/* class version
class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 29},
      {name: 'Manu', age: 40},
      {name: 'lily', age: 3000}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    // console.log('was clicked');
   this.setState( {
    persons: [
      {name: 'Turtle', age: 29},
      {name: 'Manu', age: 40},
      {name: 'lily', age: 0.5}
    ]
   } )
  }

render() {
  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      {// <Person name="Max" age="28" />
      //<Person name="Manu" age="30">test</Person>
      //<Person name="lily" age="200"/> }
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>test</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  )
 
 //Wat you write above is the same as here below.
 //Only the below is compiled and not easy to read as above. And above looks like html but its actually js
 //So We only write whats above!!!!
 return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I am a React App!!!!'));

}
}

export default App;
*/

//hook version
const App = props => {
  let [person, setPersons] = useState({
    persons: [
      {name: 'Max', age: 29},
      {name: 'Manu', age: 40},
      {name: 'lily', age: 3000}
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
   setPersons( {
    persons: [
      {name: 'Turtle', age: 29},
      {name: 'Manu', age: 40},
      {name: 'lily', age: 0.5}
    ],
   });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={person.persons[0].name} age={person.persons[0].age} />
      <Person name={person.persons[1].name} age={person.persons[1].age}>test</Person>
      <Person name={person.persons[2].name} age={person.persons[2].age}/>
    </div>
  );
}

export default App;