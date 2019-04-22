import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import People from '../components/People/People'

class App extends Component {
  state = {
    people: [
      { id: '1', name: "David", age: 34 },
      { id: '2', name: "Simone", age: 32 },
      { id: '3', name: "Letícia", age: 0 },
    ],
    showPeople: false
  }

  switchNameHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
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
    people.splice(personIndex, 1);
    this.setState({ people: people })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({ showPeople: !doesShow });
  }

  render() {
    let people = null;

    if (this.state.showPeople) {
      people = <People
        people={this.state.people}
        clicked={this.deletePersonHandler}
        changed={this.switchNameHandler}
      />;
    }
    return (
      <div className={classes.App}>
        <Cockpit
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePersonsHandler} />
        {people}
      </div>
    );
  }
}

export default App;
