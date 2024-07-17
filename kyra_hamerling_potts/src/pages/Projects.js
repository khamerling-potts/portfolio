import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProjectCard from "../components/ProjectCard";
import healthseedImg from "../images/healthseed.png";

function Projects() {
  return (
    <Container className="aboutContainer">
      <Row className="g-4">
        <h2 className="sectionHeader">Projects</h2>
      </Row>
      <Row xs={1} sm={1} md={1} lg={2} className="g-4 aboutTextContainer">
        {/* <body>
          <div class="content">
            <div class="innerContainer">
              <section class="projectsInfo">
                <section class="projectsContainerOuter">
                  <section class="projectsContainerInner"> */}
        <ProjectCard
          title="Healthseed"
          img={healthseedImg}
          github="https://github.com/khamerling-potts/healthseed-client"
          description="I built Healthseed's backend (deployed on Heroku) using Python, Flask-SQLAlchemy, and PostgreSQL on Render. The client was built with JavaScript, React Native, and Expo - designed specifically for iOS. Client-side routing was made possible with React Navigation. Front end styling was developed using React Native Paper in addition to many other open-source libraries (such as dropdown picker, libphonenumber, and datetimepicker)."
        />
        <Col>
          <section id="project0">
            <h3 class="projHeader">Weather App</h3>
            <img src="./weather.png" class="weather" />
            <button id="readmore0" class="readmore">
              Read more
            </button>
          </section>
        </Col>
        <Col>
          <section id="project1">
            <h3 class="projHeader">To Do List</h3>
            <img src="./todo.png" class="todo" />
            <button id="readmore1" class="readmore">
              Read more
            </button>
          </section>
        </Col>
        <Col>
          <section id="project2">
            <h3 class="projHeader">Craigslist Redesign</h3>
            <div id="proj2ImgContainer">
              <img src="./craigslist1.png" class="craigslist" />
              <img src="./craigslist2.png" class="craigslist" />
            </div>
            <button id="readmore2" class="readmore">
              Read more
            </button>
          </section>
        </Col>
        <Col>
          <section id="project3">
            <h3 class="projHeader">Image Gallery</h3>
            <img src="./gallery.png" class="gallery" />
            <button id="readmore3" class="readmore">
              Read more
            </button>
          </section>
        </Col>
        <Col>
          <section id="project4">
            <h3 class="projHeader">Instagram Clone</h3>
            <img src="./instagram1.png" class="instagram" />
            <button id="readmore4" class="readmore">
              Read more
            </button>
          </section>
        </Col>

        {/* </section> */}

        <section id="arrow">
          <p class="arrow">
            ▼<br></br>▼<br></br>▼
          </p>
        </section>
        {/* </section>
              </section>
            </div>
          </div>
        </body> */}
      </Row>
    </Container>
  );
}

export default Projects;
