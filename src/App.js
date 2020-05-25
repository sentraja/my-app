import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Hi! I am a react app...</h1>
      <p> This is awesome... We can have only one root div here. we can't have another root div.</p>
      <p> which is commented below you can see it.</p>
      </div>
      // <h2>Hi am h2</h2>
    );
    // return React.createElement('div',{className:  'App'},React.createElement('h1',null,'I am a react developer'));
  }
}

export default App;
