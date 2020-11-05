// import logo from './logo.svg';
import React, { Component } from "react";

import roysterLogo from "./royster svg.svg";
import "./App.css";
import Weather from "./components/Weather/Weather";
import Random from "./components/Random/Random"

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
          <span><Random className="random"></Random></span>
        </header>
       
      </div>
    );
  }
}

export default App;
