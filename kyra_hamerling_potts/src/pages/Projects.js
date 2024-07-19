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
import tictactoeImg from "../images/tictactoe.png";
import weatherImg from "../images/weather.png";
import todoImg from "../images/todo.png";
import craigslistImg from "../images/craigslist1.png";
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
          headline="A full-stack React Native mobile application for organizing health information. Allows users to create profiles and manage their conditions, providers, medications, routines, and appointments."
          github="https://github.com/khamerling-potts/healthseed-client"
          description="I built Healthseed's backend (deployed on Heroku) using Python, Flask-SQLAlchemy, and PostgreSQL on Render. The client was built with JavaScript, React Native, and Expo - designed specifically for iOS. Client-side routing was made possible with React Navigation. Front end styling was developed using React Native Paper in addition to many other open-source libraries (such as dropdown picker, libphonenumber, and datetimepicker)."
        />
        <ProjectCard
          title="Lendz"
          img={lendzImg}
          headline="Craigslist and Buy Nothing groups reimagined - a full-stack platform for lending in your community. Features include listing items to lend, claiming and commenting on listings, and rating others through user accounts."
          github="https://github.com/khamerling-potts/lendz"
          description="Lendz is a full-stack application using Python, Flask, SQLAlchemy, Postgresql, JavaScript, and React. Inspired by my local buy nothing groups, users are able to create accounts, post listings to lend, claim others' listings (like comments), and rate each other. A Flask API is used to link the React front end with the backend data."
        />
        <ProjectCard
          title="RDM"
          img={rdmImg}
          headline="An intuitive CLI tool streamlining backend data management for researchers in academic, government, and medical settings."
          github="https://github.com/khamerling-potts/rdm"
          description="RDM (research database manager.) is a command line application that allows users to manage research sites, projects, and investigators. This project was inspired by my prior experience working in academic, government, and medical settings to conduct psychological research. Built using Python and SQL."
        />
        <ProjectCard
          title="SongSaver"
          img={songsaverImg}
          headline="Scalable React application to save songs with customized details, explore Spotify tracks, and gain concise summary insights."
          github="https://github.com/khamerling-potts/songsaver"
          description="Communicated with Spotify RESTful API and local JSON server endpoints to browse, save, and persist tracks based on user input. Leveraged React, JSX, Bootstrap 5, and client-side routing to maintain state, controlled forms, and seamless page navigation."
        />
        <ProjectCard
          title="AdoptAPet"
          img={adoptapetImg}
          headline="Frontend JavaScript application using Petfinder API endpoints, enabling users to browse and like adoptable pets by zip code."
          github="https://github.com/khamerling-potts/adoptapet"
          description="Performed API requests and pagination to display 100% of available data within a user-inputted zip code. Deployed a JSON server for users to save and persist listings to a database between sessions."
        />
        <Col className="projectCol"></Col>
        <Col className="projectCol">
          <h2>Older Projects</h2>
        </Col>
        <ProjectCard
          title="Weather App"
          img={weatherImg}
          github="https://khamerling-potts.github.io/10-weather-app/"
          description="This website is an interactive weather app (built with JavaScript, CSS, HTML) that fetches current weather data from an API based on the user’s chosen location. The user can enter a city name, zip code, or use their current location to receive weather info. If the user selects their current location, another API is used to get their IP address and city before weather information is requested. Users are also able to refresh and delete individual locations that are displayed on the page.
          *Please note there is a 50 call/day limit for the weather API."
        />
        <ProjectCard
          title="Terminal Games"
          img={tictactoeImg}
          github="https://github.com/khamerling-potts/tictactoe"
          description="Engineered a TicTacToe and Gomoku terminal application with C++ and CMake, detecting moves and game completion with 2 users. Executed object-oriented design, tracking game state and allowing customization of 2 game parameters (size and moves to win)."
        />
        {/* Add this back in once I make my own API for it
        <ProjectCard
          title="To Do List"
          img={todoImg}
          github="https://khamerling-potts.github.io/todo-react/"
          description="This project utilizes React and JavaScript to create an interactive to do list. The user can add items, delete items, mark items as complete, and sort items alphabetically."
        /> */}
        <ProjectCard
          title="Craigslist Redesign"
          img={craigslistImg}
          github="https://khamerling-potts.github.io/06-brand-redesign/"
          description="This page is a non-interactive mock-up of a potential new design for the Craigslist website, intended to be more visually appealing and intuitive."
        />
        <ProjectCard
          title="Image Gallery"
          img={galleryImg}
          github="https://khamerling-potts.github.io/07-image-gallery/"
          description="This interactive image gallery allows users to expand images and navigate through the gallery one image at a time. This was another exercise to practice JavaScript, HTML and CSS."
        />
        <ProjectCard
          title="Instagram Clone"
          img={instagramImg}
          github="https://khamerling-potts.github.io/05-instagram-clone/"
          description="This project uses HTML and CSS to create a visual 'clone' of the Instagram website."
        />

        {/* <section id="arrow">
          <p class="arrow">
            ▼<br></br>▼<br></br>▼
          </p>
        </section> */}
      </Row>
    </Container>
  );
}

export default Projects;
