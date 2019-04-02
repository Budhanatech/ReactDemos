import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons : [
      { name: "Preetsingh", age: 25 },
      { name: "Vimal", age: 26 },
      { name: "Bijal", age: 24 }
    ],
    otherState: 'Some other value'
  }

  clickHandler = () => {
    console.log('Was clicked');
  }

  switchNameHandler = (newName) => {
    // Don't do this: this.state.persons[0].name = 'Preetsingh Panesar';
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: "Vimal", age: 26 },
        { name: "Bijal", age: 25 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is react app</h1>
        <p>This is really working</p>
        <button onClick = {this.clickHandler}>Sample Console</button>
        <button onClick = {this.switchNameHandler.bind(this, 'Max!!')}>Switch Names</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this, 'Maximillaian')}><p>My hobby is Racing</p>
        </Person>
        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
