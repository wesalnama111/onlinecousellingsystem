import React from 'react';
const person = (props) =>{
    return (
        <div>
         <p> i'm {props.Name} and i'm  {props.age} years old.</p>
        <p> {props.children} </p>
        </div>
)
};
export default person;