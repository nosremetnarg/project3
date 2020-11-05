// import logo from './logo.svg';
import React, { Component } from "react";

// import roysterLogo from "./royster svg.svg";
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
          {/* <img src={roysterLogo} className="App-logo" alt="logo" /> */}
      
          <h1>Roysters NC</h1>
          <Weather  />
          <span><Random className="random"></Random></span>

          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit donec dapibus molestie, 
            porta felis ligula magna quisque duis cubilia viverra velit lectus laoreet, enim 
            porttitor habitasse pulvinar sociosqu feugiat parturient iaculis egestas. Quam d
            ictum dignissim dictumst purus quis nibh scelerisque mattis per accumsan sollicitudin
             cum posuere ultrices etiam, at condimentum eleifend nam litora molestie sociis placerat 
             eu hendrerit porttitor taciti nisi. Habitant fames consequat ligula dictum ut ante, 
             inceptos placerat eleifend commodo eros urna, ac dignissim nullam montes lectus.

            Habitasse mattis viverra vel semper litora eros hendrerit, nam vitae commodo ac 
            pellentesque vivamus, enim aliquam lobortis pharetra quisque pulvinar. Litora malesuada 
            feugiat consequat scelerisque suspendisse augue arcu, nostra habitant rhoncus himenaeos 
            eu cum est volutpat, montes hac dui eget orci fermentum. Fringilla nunc quisque eleifend 
            sollicitudin cras varius phasellus neque proin porttitor, tristique cubilia eu ullamcorper 
            ultrices ultricies fusce hendrerit aptent.</p>         
        </header>
       
      </div>
    );
  }
}

export default App;
