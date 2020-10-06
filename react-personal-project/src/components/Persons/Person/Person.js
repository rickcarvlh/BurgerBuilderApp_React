import React, { Component } from 'react';
import styled from 'styled-components';
// import './Person.css';

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

class Person extends Component {
    /*const style = {
        '@media (minWidth: 500px)': {
            width: '450px'
        }
    }*/
    render() {
        console.log('[Person.js] rendering...');
        return (
            // <div className="Person" style={style}>
            <StyleDiv>
                <p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age} years old.</p>
                < p > {this.props.children}</p >
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </StyleDiv >
        )
    }




}

export default Person;