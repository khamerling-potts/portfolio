import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="nameHeader">KHP</h1>
        <h2 id="homeHeader">Welcome to my website</h2>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
