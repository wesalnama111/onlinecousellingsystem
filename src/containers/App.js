import React, { Component } from 'react';
import './App.css';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor', props);
    this.state=  {
      persons:
      [
        { id:'1st', name:'max', age:28 },
        { id:'2nd', name:'menu', age:27 },
        { id:'3rd', name:'wesal', age:29 } 
      ],
      otherState:'someother values',
      showPersons: false
    }


  }
  componentWillMount(){
    console.log('[App.js] Inside componentWillMount');

  }
  componentDidMount(){
    console.log('[App.js componentdidmount]')
  }
  // state = {
  //   persons:
  //   [
  //     { id:'1st', name:'max', age:28 },
  //     { id:'2nd', name:'menu', age:27 },
  //     { id:'3rd', name:'wesal', age:29 } 
  //   ],
  //   otherState:'someother values',
  //   showPersons: false
  // }

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
    console.log('[App.js] Inside render()')
    
    let person = null;
    if (this.state.showPersons)
    {
      person = 
       
          <Persons
          persons={this.state.persons}
          clicked={this.deletePerson}
          changed={this.nameChange}
          />;
     }
   
  
    return (
      <div className="App">
      <Cockpit
      appTitle={this.props.title}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePerson}/>
        {person}
      </div>
    );
  // return React.createElement('div', {className:'App'}, React.createElement('h1',null,'does thiswork now'));
  }
}

export default App;
