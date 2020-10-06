// fucntional component -> presentation of content
import React from 'react'
import Person from './Person/Person'

// i'm mapping the array of users that commes from the state on App.js
const persons = (props) => {
    console.log('[Person.js] rendering...');
    return props.persons.map((person, index) => {

        return <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id)} />
    })
};




export default persons;