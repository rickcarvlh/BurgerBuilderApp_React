// fucntional component -> presentation of content
import React, { Component } from 'react'
import Person from './Person/Person'

// i'm mapping the array of users that commes from the state on App.js
class Persons extends Component {
    /*
    static getDerivedStateFromProps(props,state) {
        console.log('[Person.js] getDerivedStateFromProps...');
        return state;
    }*/



    shouldComponentUpdate(nextProps, nextState) {
        // isto não é assim que se faz
        console.log('[Persons.js], shouldComponentUpdate..');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate...');
        return { message: 'SnapshotMessage' };
    }

    // componentDidUpdate() {
    //     console.log('[Person.js] componentDidUpdate,,');
    // }

    // * most used hook
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Person.js] componentDidUpdate');
        console.log(snapshot);
    }


    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)}
                />
            );
        });
    }


};




export default Persons;