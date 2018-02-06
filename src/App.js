import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons:[
      { Name:'max', age:28 },
      { Name:'menu', age:27 },
      { Name:'wesal',age:29 },
      
    ]
  }
  
  nameChanger=(event)=>{
    this.setState({
      persons:[
     { Name:'wesal', age:28 },
     { Name:event.target.value, age:27 },
     { Name:event.target.value,age:32 },
   ],
  otherState:'someother values',
  showPersons: false
  })
  }
  deletePerson=(personIndex)=>{
    const persons =this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons:persons});

  }
  togglePerson=()=>{

    const doesShow =this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  render() {
    const style={
      backgroundColor: 'black',
      font:'inherit',
      border:'1px solid blue',
      padding :'8px',
      cursor:'pointer',
      color: 'white'

    }
    let person =null;
    if (this.state.showPersons){
      person= (
        <div>
          {this.state.persons.map((persone, index)=>{
            return  <Person
            click={this.deletePerson.bind(this, index)}
             name={persone.name} 
             age={persone.age}/> 
            }
          )}
        
        </div>
      

       ) }
    
    return (
      <div className="App">
        <h1>My first react App</h1>
        <button style={style} onClick={this.togglePerson}>show the details</button> 
    {person}
        
      </div>
    );
  // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'does thiswork now'));
  }
}

export default App;
