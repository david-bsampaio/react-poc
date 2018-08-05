import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {name:"David", age: 34},
      {name:"Simone", age: 32},
      {name:"Letícia", age: 0},
    ]
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

  render() {
    return (
      <div className="App">
        <h1>REACT - Aplicação</h1>
        <p>Entendendo JSX</p>
        <button onClick={() => this.switchNameHandler('David pelo botão')}>Altera Nome</button>
        <Person name={this.state.people[0].name} 
                age={this.state.people[0].age}
                click={this.switchNameHandler.bind(this, 'teste')}/>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}/>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}>Recém nascida.</Person>
      </div>
    );
  }
}

export default App;
