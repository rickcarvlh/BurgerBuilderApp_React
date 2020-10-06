// fucntional component -> presentation of content
import React, { Component } from 'react'
import Person from './Person/Person'

// i'm mapping the array of users that commes from the state on App.js
class Persons extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return this.props.persons.map((person, index) => {

            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        })
    }


};




export default Persons;