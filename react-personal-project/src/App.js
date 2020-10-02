import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { id: 'asd', name: 'Max', age: 30 },
      { id: 'dgdfg', name: 'Manu', age: 29 },
      { id: 'hedg', name: 'Stephanie', age: 26 }
    ],
    otherStates: ' some other value',
    showPerson: false,
  }

  deletePersonHandler = (personIndex) => {
    // delete person from array of persons
    //  * slice -> without arguments copys the entire array
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    // working on the copy of the array
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.name;
    const persons = [...this.state.persons]
    // updated person
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  render() {
    // js object
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            )
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi , I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' },
    //   React.createElement('h1', null, 'Hi I\'m a React App!!!'))
  }
}


export default App;

