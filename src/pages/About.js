import NavBar from "../components/NavBar";
import headshot from "../images/headshot.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function About() {
  return (
    // <div className="content">
    <Container className="aboutContainer">
      <Row className="g-6">
        <h2 className="sectionHeader">About Me</h2>
      </Row>
      <section id="aboutTextContainer">
        <img src={headshot} id="headshot" />

        <p id="aboutText">
          <p>
            My name is Kyra Hamerling-Potts and I am a full-stack software
            engineer specializing in JavaScript, React and React Native, Python,
            and Flask. I am a recent graduate of Flatiron School's Software
            Engineering Bootcamp.
          </p>
          <p>
            I was born in Washington, DC, and have had an interest in STEM
            fields and social sciences from a young age. I studied psychology
            and computer science at Washington University in St. Louis, where I
            was exposed to multiple coding languages, frameworks, and projects.
            I spent much of my time there conducting my own psychological
            research on emotion regulation and attachment.
          </p>
          <p>
            However, I also enjoy homing in on solutions using algorithmic
            thinking, data manipulation, and visual organization. This mindset
            has been in my veins throughout my life. I’ve seen the evolution of
            this passion, from arranging and organizing objects at a young age
            to finding efficient solutions to problems and visual design. After
            years of thinking about programming as a hobby, making it my
            permanent career was the right course correction for me.
          </p>
          <p>
            In my free time, I enjoy playing piano, flipping furniture, and
            discovering new recipes. Whether in a technical or research
            capacity, I show open-mindedness, empathy, and tactfulness towards
            each conversation and relationship. In my next role, I hope to work
            with equity-minded teams that foster productivity and warm
            communication.
          </p>
        </p>
      </section>
    </Container>

    // </div>
    // <>
    //   <h2 className="sectionHeader">About me</h2>
    //   <div class="content">
    //     {/* <div class="innerContainer">
    //       <section class="aboutInfo">
    //         <section class="aboutContainerOuter"> */}
    //     <section class="aboutContainerInner">
    //       <img src="./headshot2.png" id="headshot" />
    //       <p id="aboutText">
    //         I was born in Washington, DC, and have had an interest in STEM
    //         fields and social sciences from a young age. I studied psychology
    //         and computer science at Washington University in St. Louis, where I
    //         was exposed to multiple coding languages, frameworks, and projects.
    //         I spent much of my time there conducting my own psychological
    //         research on emotion regulation and interpersonal attachment
    //         dynamics. Following graduation, I moved to New York and served as a
    //         clinical research coordinator for suicide prevention at a VA
    //         hospital. Although I will always have an interest clinical
    //         psychology, I am transitioning to software engineering to pursue
    //         programming as another passion of mine. I love the problem-solving
    //         and creativity involved in coding and am excited to continue
    //         learning full stack development at Flatiron School. In my free time,
    //         I enjoy playing piano, flipping furniture, and discovering new
    //         recipes. As I develop my portfolio, I will continue to add new
    //         projects to my website.
    //       </p>
    //     </section>
    //     {/* </section>
    //       </section>
    //     </div> */}
    //   </div>
    // </>
  );
}

export default About;
