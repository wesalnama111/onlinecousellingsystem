import React from 'react';
import './person.css';
import Radium from 'radium';
const person = (props) =>{
    
    return (
        <div className="person" >
         <p onClick={props.click}> {props.name} {props.age}</p>
        <p> {props.children} </p>
        <input type="text" onChange={props.changed} />
        <input type="text" onChange={props.change} />
        
        </div>
)
};

export default Radium(person);


