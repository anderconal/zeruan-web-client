import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Login from '../Login/Login';
import Calendario from '../Calendar/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Calendario />
      </div>
    );
  }
}

export default App;
