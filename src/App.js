// import logo from './logo.svg';
import roysterLogo from './royster svg.svg';
import './App.css';
import Weather from '../src/components/Weather/Weather'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={roysterLogo} className="App-logo" alt="logo" />
        <p>
          Let's do this :)
        </p>
        <h1>
          Roysters NC
        </h1>
        <Weather />
      </header>
    </div>
  );
}

export default App;
