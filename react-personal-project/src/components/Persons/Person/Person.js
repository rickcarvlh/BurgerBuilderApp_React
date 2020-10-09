import React, { Component, Fragment } from 'react';
// import Auxiliary from '../../../hoc/Auxiliary'
// import styled from 'styled-components';
// import classes from './Person.module.css'
// import './Person.css';

/*
const StyleDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            border: 1px solid #ccc;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;

            @media (min-width: 500px) {
                width: 450px
            
        }
        `;
*/

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
        </p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Fragment>
        )
    }
}

export default Person;