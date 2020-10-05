import React from 'react';
// import styled from 'styled-components';
import classes from './Cockpit.module.css'

/*
const StyledButton = styled.button`
    background-color: ${props => props.myAlt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
    background-color: ${props => props.myalt ? 'salmon' : 'lightgreen'};
    color: black;
  }
  `;
*/

const cockpit = (props) => {
    const assignedClass = [];
    let btnClass = '';
    btnClass = classes.Red;

    if (props.showPerson) {
        btnClass = classes.Red
    }

    if (props.persons.length <= 2) {
        assignedClass.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClass.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi , I'm a React App</h1>
            <p className={assignedClass.join(' ')}  >This is really working</p>
            <button
                className={btnClass} onClick={props.clicked}> Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;