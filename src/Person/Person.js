import React from 'react';
import './person.css';
import Radium from 'radium';
const person = (props) =>{
    const style = newFunction();
    return (
        <div className="person" style={style}>
         <p onClick={props.click}> {props.name} {props.age}</p>
        <p> {props.children} </p>
        <input type="text" onChange={props.changed} />
        <input type="text" onChange={props.change} />
        
        </div>
)
};

export default Radium(person);

function newFunction() {
    const style = {
        '@media (min-width:500px)': {
            width: '450px'
        }
    };
    return style;
}
