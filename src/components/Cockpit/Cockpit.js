import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    
    if(props.showPeople){
        btnClass = classes.Red;
    }

    if (props.people.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.people.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>POC - Curso React</h1>
            <p className={assignedClasses.join(' ')}>Entendendo JSX</p>
            <button className={btnClass} onClick={props.clicked}>Exibe Nome</button>
        </div>
    );
};

export default cockpit;