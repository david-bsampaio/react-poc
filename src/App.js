import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {name:"David", age: 34},
      {name:"Simone", age: 32},
      {name:"Letícia", age: 0},
    ],
    showPersons: false
  }

switchNameHandler = (newName) => {
  console.log('Foi clicado.');
  this.setState({
      people: [
        {name: newName, age: 34},
        {name:"Simone Kasi Sampaio", age: 32},
        {name:"Letícia", age: 0},
      ]
    }
  )
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
        <Person name={this.state.people[0].name} 
                age={this.state.people[0].age}
                click={this.switchNameHandler.bind(this, 'valor bindado')}/>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}/>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}>Recém nascida.</Person>
      </div>
    );
  }
  return result;
}

  render() {
    const style = {
      "backgroundColor": "lightblue",
      "width": "100px",
      "height": "50px",
      "border": "2px solid black",
      "cursor": "pointer"
    };
    let persons = this.togglePersonsDisplay();

    return (
      <div className="App">
        <h1>POC - Curso React</h1>
        <p>Entendendo JSX</p>
        <button style={style} onClick={this.togglePersonsHandler}>Exibe Nome</button>
        {persons}
      </div>
    );
  }
}

export default App;
