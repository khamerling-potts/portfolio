import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    // <div className="content">
    <Container className="aboutContainer">
      <Row className="g-6">
        <h2 className="sectionHeader">Welcome to my website</h2>
        <section className="homeTextContainer">
          <p id="homeIntro1">Hi, I'm Kyra Hamerling-Potts</p>
          <p id="homeIntro2">
            A Full-Stack Software Engineer with a background in clinical
            psychology
          </p>
        </section>
      </Row>
    </Container>
    // </div>
  );
}

export default Home;
