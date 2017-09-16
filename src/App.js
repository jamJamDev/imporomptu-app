import React, { Component } from 'react';
import logo from './logo.svg';
import Button from "./Button.js"
import MapPage from "./MapPage.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This is our main page</h2>
          <Button text="Click Me!" color="red"/>
          <Button text="Press Me!" color="blue"/>
          <Button text="Not Today!" color="green"/>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <MapPage />
        </div>
      </div>
    );
  }
}

export default App;
