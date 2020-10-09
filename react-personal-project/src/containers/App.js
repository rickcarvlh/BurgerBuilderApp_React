import React, { Component } from 'react';
import classes from './App.module.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass';
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
    showCockpit: true,
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

  // -> good place to load data from a remote endpoint
  // -> instatiate a network request
  componentDidMount() {
    console.log('[App.js] componentDidMount');

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate..');
    return true;
  }

  // invocado imediatamente apos o update
  // -> good place to do network requests
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate..');
  }

  // * funcção que recebe o input do user
  inputEventHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    // working on the copy of the array
    const person = {
      ...this.state.persons[personIndex]
    };

    // ! puts the value on the array
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
        changed={this.inputEventHandler} />
      )
      // style.backgroundColor = 'red';
    }

    // -> the onlick method is the wrong way to do it
    return (
      <WithClass classes={classes.App}>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPerson={this.state.showPerson}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </WithClass>
    );
    // return React.createElement('div', { className: 'App' },
    //   React.createElement('h1', null, 'Hi I\'m a React App!!!'))
  }
}


export default App;

