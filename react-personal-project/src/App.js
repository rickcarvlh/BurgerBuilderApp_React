import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import Person from './Person/Person';

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover: {
    background-color: lightgreen;
    color: black;
  }
  `;


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

      // style.backgroundColor = 'red';
    }

    // let classes = ['red', 'bold'].join(' ');
    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red') // classes = ['red', '']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold') // classes = ['red', 'bold']
    }



    return (
      <div className="App">
        <h1>Hi , I'm a React App</h1>
        <p className={classes.join(' ')}  >This is really working</p>
        <StyledButton myAlt={this.state.showPerson} onClick={this.togglePersonsHandler}>Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', { className: 'App' },
    //   React.createElement('h1', null, 'Hi I\'m a React App!!!'))
  }
}


export default App;

