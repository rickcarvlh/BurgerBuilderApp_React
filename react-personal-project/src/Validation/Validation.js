import React from 'react'


const validation = (props) => {
    // default message
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text  too short'
    }
    return (
        <div>
            <p>{ validationMessage }</p>
        </div>
    )
}

export default validation;


// if there is no state there is no need class extends Component 