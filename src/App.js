import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person1 from './Person/Person'; // Person1 should be any name since it get the refernce form the path and it should be in the name we used to create. Then the same namespace has to use at the refernece to include the components here.
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi! I am a react app...</h1>
        <p> This is awesome... We can have only one root div here. we can't have another root div.</p>
        <p> which is commented below you can see it.</p>


        <Person1 />
        <Person1 />
        <Person1 />
        {/* The first character should be in capital to make difference from the reserved HTML keyword like div - Div and so on. */}

      </div>
      
    );
    // return React.createElement('div',{className:  'App'},React.createElement('h1',null,'I am a react developer'));
  }
}

export default App;
