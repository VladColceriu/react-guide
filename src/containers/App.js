import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
// import Radium, {StyleRoot} from 'radium'

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        { id: 'asdfa', name: "Vlad", age: 31 },
        { id: 'asdas', name: "Marius", age: 29 },
        { id: 'dsdsa', name: "Oana", age: 29 }
      ],
      someOtherValue: "Other property",
      showPersons: false,
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps')
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (<div >
        <Persons persons={this.state.persons}
          changed={this.nameChangedHandler.bind(this)}
          clicked={this.deletePersonHandler.bind(this)}></Persons>
      </div>);
    }

    return (
      // <StyleRoot>
      <div>
        <Cockpit title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        ></Cockpit>
        {persons}
      </div>
      /* </StyleRoot> */
    );
    // return React.createElement('div',null,React.createElement('h1',{className:'App'},'Hi, I\'m a React App!!!'));
  }
}

export default /*Radium(*/App/*)*/;
