import React from 'react';
import './person.css';

const person = (props) =>{
    
    return (
        <div className="person">
         <p onClick={props.click}> {props.name} {props.age}</p>
        <p> {props.children} </p>
        <input type="text" onChange={props.changed} />
         
        
        </div>
)
};

export default person;


