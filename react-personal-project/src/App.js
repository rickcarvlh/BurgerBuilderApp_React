import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// * react hooks example
// react hooks -> can only be used with props and not in a Component
const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Max', age: 30 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    // otherStates: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'Max', age: 100 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 15 }
      ],
       otherStates: personState.otherStates
    })
  }

  return (
    <div className="App">
      <h1>Hi , I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', { className: 'App' },
  //   React.createElement('h1', null, 'Hi I\'m a React App!!!'))
}

export default App;

/*
class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 30 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherStates: ' some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: 'Max', age: 100 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 15 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi , I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', { className: 'App' },
    //   React.createElement('h1', null, 'Hi I\'m a React App!!!'))
  }
}
*/