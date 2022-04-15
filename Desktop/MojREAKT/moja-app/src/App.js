import logo from './logo.svg';
import './App.css';
import Book from './Book';
import Odlomak from './Odlomak';

function App() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">.....</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Najljepši citati</b>
        </a>
        <Odlomak />
        <Book />
      </header>
  
  );
  }

export default App;
