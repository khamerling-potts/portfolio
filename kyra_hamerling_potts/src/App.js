import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="nameHeader">KHP</h1>
      </header>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
