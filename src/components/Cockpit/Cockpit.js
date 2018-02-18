import React from 'react'
import classes  from './Cockput.css'

const cockpit = (props) =>{
    const assignedclasses = [];
    let btnClass='';
    if(props.showPersons){
      btnClass= classes.red;  
    }
    if(props.persons.length <= 2 ){
      assignedclasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedclasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={assignedclasses.join(' ')}>it works really fine OR NOT? </p>
        <button className={btnClass} onClick = {props.clicked}>show the details</button> 
        </div>
    );
};
export default cockpit;