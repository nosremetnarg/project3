// import logo from './logo.svg';
import React, { Component } from "react";

import roysterLogo from "./royster svg.svg";
import "./App.css";
import Weather from "../src/components/Weather/Weather";
import Random from "../src/components/Random/Random"

class App extends Component {
constructor (props) {
  super(props)
  console.log('[App.js] is rendering')
}



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={roysterLogo} className="App-logo" alt="logo" />
          <p>Let's do this :)</p>
          <h1>Roysters NC</h1>
          <Weather  />
        </header>
        <Random className="demo"/>
      </div>
    );
  }
}

export default App;
