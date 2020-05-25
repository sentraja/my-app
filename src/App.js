import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //   <h1> Hi! I am a react app...</h1>
      
    //   </div>
    // );
    return React.createElement('div',null,'h1','I am a react developer');
  }
}

export default App;
