import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <header className="appHeader">
        <h1 id="nameHeader">KHP</h1>
      </header>
      {/* <div className="pageContainer">
        <NavBar />
        <Outlet />
      </div> */}
      <Container>
        <Row>
          <Col sm={12} md={3}>
            <NavBar />
          </Col>
          <Col sm={12} md={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
