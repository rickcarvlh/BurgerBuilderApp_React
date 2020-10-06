import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {


  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }


  state = {
    persons: [
      { id: 'asd', name: 'Max', age: 30 },
      { id: 'dgdfg', name: 'Manu', age: 29 },
      { id: 'hedg', name: 'Stephanie', age: 26 }
    ],
    otherStates: ' some other value',
    showPerson: false,
  }

  // run after the constructor
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  deletePersonHandler = (personIndex) => {
    // delete person from array of persons
    //  * slice -> without arguments copys the entire array
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons });
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');

  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    // working on the copy of the array
    const person = {
      ...this.state.persons[personIndex]
    };

    // ! gets the input from the user
    person.name = event.target.value;


    const persons = [...this.state.persons]
    // updated person
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  // after getDerivedStateFromProps
  render() {
    console.log('[App.js] render()');
    let persons = null;
    if (this.state.showPerson) {
      persons = (<Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
      )
      // style.backgroundColor = 'red';
    }


    return (
      <div className="App">
        <Cockpit
          title={this.props.appTitle}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' },
    //   React.createElement('h1', null, 'Hi I\'m a React App!!!'))
  }
}


export default App;

