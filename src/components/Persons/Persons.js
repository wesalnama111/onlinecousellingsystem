import React,{Component} from 'react';
import Person from './Person/Person';
class Persons extends Component {
        constructor(props){
                super(props);
                console.log('[Persons.js] Inside constructor', props);
               
            
            
              }
              componentWillMount(){
                console.log('[Persons.js] Inside componentWillMount');
            
              }
              componentDidMount(){
                console.log('[Persons.js componentdidmount]')
              }
        render(){
                console.log('[Persons.js]  Inside Render')
           return  this.props.persons.map((persone, index) => {
                return  <Person
                          click = {()=>this.props.clicked(index)}
                          name = {persone.name} 
                          age = {persone.age}
                          key = {persone.id}
                          changed = {(event) => this.props.changed(event, persone.id)}
                          /> 
                });
        }
}
export default Persons;