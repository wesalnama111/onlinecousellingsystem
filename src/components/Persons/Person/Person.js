import React,{Component} from 'react';
import './person.css';
class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.js] Inside constructor', props);
       
    
    
      }
      componentWillMount(){
        console.log('[Person.js] Inside componentWillMount');
    
      }
      componentDidMount(){
        console.log('[Person.js componentdidmount]')
      }
    render (){
    console.log('[Person.js] Inside render');
    
        return (
            <div className="person">
             <p onClick={this.props.click}> {this.props.name} {this.props.age}</p>
            <p> {this.props.children} </p>
            <input type="text" onChange={this.props.changed} />
            
             
            
            </div>
    )
    }
}


export default Person;


