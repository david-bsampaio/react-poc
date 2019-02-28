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
style = {
  "backgroundColor": "blue"
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

  render() {
    return (
      <div className="App">
        <h1>REACT - Aplicação</h1>
        <p>Entendendo JSX</p>
        <button styleClass={this.style} onClick={this.togglePersonsHandler}>Exibe Nome</button>
        {
          this.state.showPersons ?
            <div>
              <Person name={this.state.people[0].name} 
                      age={this.state.people[0].age}
                      click={this.switchNameHandler.bind(this, 'valor bindado')}/>
              <Person name={this.state.people[1].name} age={this.state.people[1].age}/>
              <Person name={this.state.people[2].name} age={this.state.people[2].age}>Recém nascida.</Person>
            </div>
        : null
        }
      </div>
    );
  }
}

export default App;
