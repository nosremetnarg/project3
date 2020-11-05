// import logo from './logo.svg';
import React, { Component } from "react";

// import roysterLogo from "./royster svg.svg";
// import "./App.css";
import Weather from "../src/components/Weather/Weather";
import Random from "../src/components/Random/Random";
import Footer from './components/Footer';
import Navigation from './components/Navigation';


class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] is rendering')
  }



  render() {
    return (
      <div>
        <main>
          <Weather />
          <Navigation />
          <Random className="demo" />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
