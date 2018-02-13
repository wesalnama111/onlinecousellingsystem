import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons:
    [
      { id:'1st', name:'max', age:28 },
      { id:'2nd', name:'menu', age:27 },
      { id:'3rd', name:'wesal', age:29 } 
    ],
    otherState:'someother values',
    showPersons: false
  }

  nameChange = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
     // const person=Object.assign({},this.state.persons[personIndex]);
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  
  
  // nameChanger = () => {
  //   this.setState ({
  //     persons:
  //     [
  //       { name:'wesal', age:28 },
  //       { name:'afzal', age:27 },
  //       { name:'ihsanullaj',age:32 }
  //     ],
  //     otherState:'someother values',
  //     showPersons: false
  // })
  // }

  deletePerson=(personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  togglePerson = () => {
    const doesShow =this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'black',
      font:'inherit',
      border:'1px solid blue',
      padding :'8px',
      cursor:'pointer',
      color: 'white',
      
    }
    let person = null;
    if (this.state.showPersons)
    {
      person = (
        <div>
          {
            this.state.persons.map((persone, index) => {
              return   <ErrorBoundary key = {persone.id}><Person
                        click = {this.deletePerson.bind(this, index)}
                        name = {persone.name} 
                        age = {persone.age}
                        
                        changed = {(event) => this.nameChange(event, persone.id)}
                        /></ErrorBoundary> 
              })}
        </div>
      ) 
      style.backgroundColor='white';
      style.color='black';
    }
    const classes = [];
    if(this.state.persons.length <= 2 ){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    const rand=Math.random();
    if(rand > 0.7){
      throw new Error('something went wrongS');
    }
    return (
      <div className="App">
        <h1>My first react App</h1>
        <p className={classes.join(' ')}>it works really fine OR NOT? </p>
        <button style = {style} onClick = {this.togglePerson}>show the details</button> 
        {person}
      </div>
    );
  // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'does thiswork now'));
  }
}

export default App;
