import React, { Component } from 'react';
//import logo from './logo.svg';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends Component {
  state = {
       persons: [
      { id: 'asfa1', name: 'Max', age: 28},
      { id: 'vasdf1', name: 'Manu', age: 29},
      { id: 'asdf11', name: 'Mirela', age: 31}
    ],
    
    otherPropertyOfState: 'helllloooo',
    showPersons: false
}


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id ===id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    // ili const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {      // na svaki klik menja state -> showPersons: false -> u true, i obrnuto
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    let persons = null;

    if (this.state.showPersons === true) {    // ako ovo postane true, onda output-uje komponentu
      persons = (<Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangeHandler} />
      )
    }
  
    return (
        <WithClass classes={classes.App}>
        <Cockpit 
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        toggle={this.togglePersonHandler} />
        {persons}
          
      </WithClass>
   
    );
  }
}

export default App;
