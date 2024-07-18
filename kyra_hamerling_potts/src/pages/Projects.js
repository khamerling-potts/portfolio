import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProjectCard from "../components/ProjectCard";
import healthseedImg from "../images/healthseed.png";
import lendzImg from "../images/lendz.png";
import rdmImg from "../images/rdm.png";
import songsaverImg from "../images/songsaver.png";
import adoptapetImg from "../images/adoptapet.png";
import weatherImg from "../images/weather.png";
import todoImg from "../images/todo.png";
import craigslistImg from "../images/craigslist1.png";
import weatherImg from "../images/weather.png";
import galleryImg from "../images/gallery.png";
import instagramImg from "../images/instagram1.png";

function Projects() {
  return (
    <Container id="projectsContainer">
      <Row className="g-6">
        <h2 className="sectionHeader">Projects</h2>
      </Row>
      <Row
        xs={1}
        sm={1}
        md={1}
        lg={2}
        className="g-6"
        id="projectsInnerContainer"
      >
        <ProjectCard
          title="Healthseed"
          img={healthseedImg}
          github="https://github.com/khamerling-potts/healthseed-client"
          description="I built Healthseed's backend (deployed on Heroku) using Python, Flask-SQLAlchemy, and PostgreSQL on Render. The client was built with JavaScript, React Native, and Expo - designed specifically for iOS. Client-side routing was made possible with React Navigation. Front end styling was developed using React Native Paper in addition to many other open-source libraries (such as dropdown picker, libphonenumber, and datetimepicker)."
        />
        <ProjectCard
          title="Lendz"
          img={lendzImg}
          github="https://github.com/khamerling-potts/lendz"
          description="I built Healthseed's backend (deployed on Heroku) using Python, Flask-SQLAlchemy, and PostgreSQL on Render. The client was built with JavaScript, React Native, and Expo - designed specifically for iOS. Client-side routing was made possible with React Navigation. Front end styling was developed using React Native Paper in addition to many other open-source libraries (such as dropdown picker, libphonenumber, and datetimepicker)."
        />
        <ProjectCard
          title="RDM"
          img={rdmImg}
          github="https://github.com/khamerling-potts/rdm"
          description="I built Healthseed's backend (deployed on Heroku) using Python, Flask-SQLAlchemy, and PostgreSQL on Render. The client was built with JavaScript, React Native, and Expo - designed specifically for iOS. Client-side routing was made possible with React Navigation. Front end styling was developed using React Native Paper in addition to many other open-source libraries (such as dropdown picker, libphonenumber, and datetimepicker)."
        />
        <ProjectCard
          title="SongSaver"
          img={songsaverImg}
          github="https://github.com/khamerling-potts/songsaver"
          description="I built Healthseed's backend (deployed on Heroku) using Python, Flask-SQLAlchemy, and PostgreSQL on Render. The client was built with JavaScript, React Native, and Expo - designed specifically for iOS. Client-side routing was made possible with React Navigation. Front end styling was developed using React Native Paper in addition to many other open-source libraries (such as dropdown picker, libphonenumber, and datetimepicker)."
        />
        <ProjectCard
          title="AdoptAPet"
          img={adoptapetImg}
          github="https://github.com/khamerling-potts/adoptapet"
          description="I built Healthseed's backend (deployed on Heroku) using Python, Flask-SQLAlchemy, and PostgreSQL on Render. The client was built with JavaScript, React Native, and Expo - designed specifically for iOS. Client-side routing was made possible with React Navigation. Front end styling was developed using React Native Paper in addition to many other open-source libraries (such as dropdown picker, libphonenumber, and datetimepicker)."
        />
        <Col className="projectCol"></Col>
        <Col className="projectCol">
          <h2>Older Projects</h2>
        </Col>
        <ProjectCard
          title="Weather App"
          img={adoptapetImg}
          github="https://github.com/khamerling-potts/adoptapet"
          description="I built Healthseed's backend (deployed on Heroku) using Python, Flask-SQLAlchemy, and PostgreSQL on Render. The client was built with JavaScript, React Native, and Expo - designed specifically for iOS. Client-side routing was made possible with React Navigation. Front end styling was developed using React Native Paper in addition to many other open-source libraries (such as dropdown picker, libphonenumber, and datetimepicker)."
        />
        <ProjectCard
          title="AdoptAPet"
          img={adoptapetImg}
          github="https://github.com/khamerling-potts/adoptapet"
          description="I built Healthseed's backend (deployed on Heroku) using Python, Flask-SQLAlchemy, and PostgreSQL on Render. The client was built with JavaScript, React Native, and Expo - designed specifically for iOS. Client-side routing was made possible with React Navigation. Front end styling was developed using React Native Paper in addition to many other open-source libraries (such as dropdown picker, libphonenumber, and datetimepicker)."
        />

        <section id="arrow">
          <p class="arrow">
            ▼<br></br>▼<br></br>▼
          </p>
        </section>
      </Row>
    </Container>
  );
}

export default Projects;
