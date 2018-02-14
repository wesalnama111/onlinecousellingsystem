import React from 'react';
import Person from './Person/Person';
const persons =(props)=> props.persons.map((persone, index) => {
        return  <Person
                  click = {()=>props.clicked(index)}
                  name = {persone.name} 
                  age = {persone.age}
                  key = {persone.id}
                  changed = {(event) => props.changed(event, persone.id)}
                  /> 
        });

export default persons;