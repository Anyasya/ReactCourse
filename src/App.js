import logo from './logo.svg';
import './App.css';
import Task1 from "./tasks/task1/task1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>React Course - Project 1</span>
      </header>
        <Task1/>
    </div>
  );
}

export default App;



