import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {


    const assinedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assinedClasses.push( classes.red );
    }
     if (props.persons.length <= 1) {
      assinedClasses.push( classes.bold );
    }

    return (
    <div className={classes.Cockpit}>
        <h1>Hi, I'm React App</h1>
        <p className={assinedClasses.join(' ')}>Neki levi paragraf.</p>
        <p className={classes.par}>teste teste tste </p>
      <button 
      className={btnClass}
      onClick={props.toggle}>Toggle Persons</button>
      </div>
    )
};


export default cockpit;