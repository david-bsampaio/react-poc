import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    people: [
      {id:'1', name:"David", age: 34},
      {id:'2', name:"Simone", age: 32},
      {id:'3', name:"Letícia", age: 0},
    ],
    showPersons: false
  }

 switchNameHandler = (event, id) => {
  const personIndex = this.state.people.findIndex( p => {
    return p.id === id;
  });

  const person = {
    ...this.state.people[personIndex]
  };
  
  person.name = event.target.value;
  const people = [...this.state.people];
  people[personIndex] = person;

  this.setState({
    people: people
  });
}

deletePersonHandler = (personIndex) => {
  const people = [...this.state.people];
  //Remove um item da lista pelo index
  people.splice(personIndex,1);
  this.setState({people: people})
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

togglePersonsDisplay = () => {
  let result = null;

  if( this.state.showPersons ){
    result = (
      <div>
        {this.state.people.map((person,index) => {
          return <Person 
            name={person.name} 
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            key={person.id}
            changed={(event) => this.switchNameHandler(event, person.id)}/>
        })}
      </div>
    );
    //style.backgroundColor = 'darkblue';
  }
  return result;
}

  render() {
    const style = {
      backgroundColor: "blue",
      color: "white",
      width: "100px",
      height: "50px",
      border: "2px solid black",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightblue",
        color: "black"
      }
    };
    let persons = this.togglePersonsDisplay();

    const classes = [];

    if (this.state.people.length <= 2){
      classes.push('red');
    }

    if (this.state.people.length <= 1){
      classes.push('bold');
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>POC - Curso React</h1>
        <p className={classes.join(' ')}>Entendendo JSX</p>
        <button style={style} onClick={this.togglePersonsHandler}>Exibe Nome</button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
