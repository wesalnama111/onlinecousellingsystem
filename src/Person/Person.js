import React from 'react';
import './person.css';
const person = (props) =>{
    return (
        <div className="person">
         <p onClick={props.click}> i'm {props.Name} and i'm  {props.age} years old.</p>
        <p> {props.children} </p>
        <input type="test" onChange={props.changeto} />
        </div>
)
};
export default person;