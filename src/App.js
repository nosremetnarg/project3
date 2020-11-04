// import logo from './logo.svg';
import roysterLogo from './royster svg.svg';
import './App.css';
import Weather from '../src/components/Weather/Weather'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={roysterLogo} className="App-logo" alt="logo" />
        <h1>
          Roysters NC
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit donec dapibus molestie,
        porta felis ligula magna quisque duis cubilia viverra velit lectus laoreet,
        enim porttitor habitasse pulvinar sociosqu feugiat parturient iaculis egestas.
        Quam dictum dignissim dictumst purus quis nibh scelerisque mattis per accumsan sollicitudin
        cum posuere ultrices etiam, at condimentum eleifend nam litora molestie sociis placerat eu 
        hendrerit porttitor taciti nisi. Habitant fames consequat ligula dictum ut ante, inceptos 
        placerat eleifend commodo eros urna, ac dignissim nullam montes lectus.

        Habitasse mattis viverra vel semper litora eros hendrerit, nam vitae commodo 
        ac pellentesque vivamus, enim aliquam lobortis pharetra quisque pulvinar. Litora 
        malesuada feugiat consequat scelerisque suspendisse augue arcu, nostra habitant rhoncus 
        himenaeos eu cum est volutpat, montes hac dui eget orci fermentum. Fringilla nunc quisque
         eleifend sollicitudin cras varius phasellus neque proin porttitor, tristique cubilia eu 
         ullamcorper ultrices ultricies fusce hendrerit aptent.
        </p>

        <Weather />
      </header>
    </div>
  );
}

export default App;
