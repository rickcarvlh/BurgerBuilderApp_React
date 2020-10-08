import React, { useEffect } from 'react';
import classes from './Cockpit.module.css'

/*
   useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http requests ....
        const timer = setTimeout(() => {
            alert('save data to cloud')
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] clean up work in useEffect');
        }
    }, [])

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] clean up work in 2nd useEffect');
        }
    })

*/

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http requests ....
        setTimeout(() => {
            alert('save data to cloud')
        }, 1000);
        return () => {
            console.log('[Cockpit.js] clean up work in useEffect');
        }
    }, [])

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] clean up work in 2nd useEffect');
        }
    })

    // [props.persons]

    const assignedClass = [];
    let btnClass = '';
    btnClass = classes.Red;

    if (props.showPerson) {
        btnClass = classes.Red
    }

    if (props.personsLength <= 2) {
        assignedClass.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClass.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClass.join(' ')}  >This is really working</p>
            <button
                className={btnClass} onClick={props.clicked}> Toggle Persons
            </button>
        </div>
    );
}

export default React.memo(Cockpit);