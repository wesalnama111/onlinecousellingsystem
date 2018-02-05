import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons:[
      { Name:'max', age:28 },
      { Name:'menu', age:27 },
      { Name:'wesal',age:29 },
      { Name:'zindagi',age:100 }
    ]
  }
  SwitchButton=()=>{
    this.setState({
       persons:[
      { Name:'maximize', age:28 },
      { Name:'linkedIn', age:27 },
      { Name:'wesalia',age:32 },
      { Name:'death',age:100 }
      
    ]})
  }
  render() {
    return (
      <div className="App">
        <h1>hello this is the change</h1>
        <button onClick={this.SwitchButton}>switch Name</button> 

        <Person 
        Name={this.state.persons[0].Name} 
        age={this.state.persons[0].age} />
        <Person 
        Name={this.state.persons[1].Name} 
      
        age={this.state.persons[1].age} >
        Hobbies:cricket
        </Person>
        <Person 
        Name={this.state.persons[2].Name} 
        age={this.state.persons[2].age}/>
        <Person 
        Name={this.state.persons[3].Name} 
        age={this.state.persons[3].age}/>
        
      </div>
    );
  // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'does thiswork now'));
  }
}

export default App;
