// (classversion) import React,  { Component } from 'react';
import React,  { Component } from 'react';
// import React,  { useState } from 'react';
import './App.css';
import Person from './Person/Person';
// import { useState } from 'react';
// import UserInput from './Userinput/Userinput';
// import UserOutput from './Useroutput/Useroutput';
import UserInput from './Userinput/Userinput_2';
import UserOutput from './Useroutput/Useroutput_2';
import validation from './validationcomponent/validationcomponent';


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

/*hook version
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
*/

// class version
/*class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 290},
      {name: 'Manu', age: 40},
      {name: 'lily', age: 3000}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked');
   this.setState( {
    persons: [
      {name: newName, age: 29},
      {name: 'Manu', age: 400000},
      {name: 'lily', age: 0.5}
    ]
   } )
  }

  nameChangedHandler = (event) => {
    this.setState ({
      persons: [
        {name: 'something', age: 29},
        {name: event.target.value, age: 400000},
        {name: 'lily', age: 0.5}
      ]
     } )
    }

render() {
  const style = {
    backgroundColor: 'lightblue',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };


  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working</p>
      <button style={style} onClick={() => this.switchNameHandler('turtle!!')}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
      // use as much bind as possible
      click={this.switchNameHandler.bind(this, 'schildpad')}
      changed={this.nameChangedHandler}>test</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  )
 
 //Wat you write above is the same as here below.
 //Only the below is compiled and not easy to read as above. And above looks like html but its actually js
 //So We only write whats above!!!!
 return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I am a React App!!!!'));

}
}
*/

// class App extends Component {
//   state = {
//     username: 'superTurtle'
//   }

//   nameChangedHandler = (event) => {
//     this.setState({username: event.target.value});
//   }



//   render() {
//     return (
//       <div className="App">
//         <UserInput changed={this.nameChangedHandler} 
//         currentName={this.state.username} />
//         <UserOutput userName={this.state.username} />
//         <UserOutput userName={this.state.username} />
//         <UserOutput userName="Turtle" />


//       </div>
//     )
//   }
// }


// class App extends Component {
//   state = {
//     username:'superturtle'
//   }

//   usernameChangedHandler = (event) => {
// this.setState({UserName: event.target.value});
//   }

//   render () {
//     return (
//       <div className="App">
//         <UserInput changed={this.usernameChangedHandler} />
//         <UserOutput UserName={this.state.username} />
//         <UserOutput UserName={this.state.username}/>
//         <UserOutput UserName="tortoise"/>


//       </div>
//     )
//   }
// }

/*class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 290},
      {name: 'Manu', age: 40},
      {name: 'lily', age: 3000}
    ],
    otherState: 'some other value',
    showPerons: false
  };

  switchNameHandler = (newName) => {
    // console.log('was clicked');
   this.setState( {
    persons: [
      {name: newName, age: 29},
      {name: 'Manu', age: 400000},
      {name: 'lily', age: 0.5}
    ]
   } )
  }

  nameChangedHandler = (event) => {
    this.setState ({
      persons: [
        {name: 'something', age: 29},
        {name: event.target.value, age: 400000},
        {name: 'lily', age: 0.5}
      ]
     } )
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPerons;
      this.setState({showPerons: !doesShow});
    }

render() {
  const style = {
    backgroundColor: 'lightblue',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if (this.state.showPerons) {
    persons = (
            <div>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
      // use as much bind as possible
      click={this.switchNameHandler.bind(this, 'schildpad')}
      changed={this.nameChangedHandler}>test</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>

    );
  }


  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working</p>
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      </div>
  );
}
}*/

/*class App extends Component {
  state = {
    persons: [
      {id: 'test1', name: 'Max', age: 290},
      {id: 'test2', name: 'Manu', age: 40},
      {id: 'test3', name: 'lily', age: 3000}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {  
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

    deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice(); // old version
      const persons = [...this.state.persons]; // new version
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }

render() {
  const style = {
    backgroundColor: 'lightblue',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if (this.state.showPersons) {
    persons = (
            <div>
              {this.state.persons.map((person, index) => {
                return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
              })}
              </div>
    );
            }

  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working</p>
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      </div>
  );
}
}
*/

class App extends Component { 
state = {
  userInput: ''
}

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }


  render(){
  return (
    <div className="App">
    <input type="tekst"
    onChange={this.inputChangedHandler}
    value={this.state.userInput} />
    <p>{this.state.userInput}</p>
      </div>
  );
}
}

export default App;
