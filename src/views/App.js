import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';

/**
 * 2 components: class component / func componet (function, arrow)
 * JSX : return html
 */

function App() {
  // const App = () => {}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ThanhRain
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent/>
        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
