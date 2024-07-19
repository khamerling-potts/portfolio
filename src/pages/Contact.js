import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import outlookImg from "../images/outlook.png";
import twitterImg from "../images/twitter.png";
import githubImg from "../images/github.png";
import devImg from "../images/dev.png";
import ContactInfo from "../components/ContactInfo";

function Contact() {
  return (
    <Container className="contactContainer">
      <h2 className="sectionHeader">Contact</h2>

      <section id="contactInnerContainer">
        <p id="connect">Connect with me</p>

        <Row className="g-6" xs={1} sm={4}>
          <ContactInfo
            link="mailto:khamerling-potts@wustl.edu"
            icon={outlookImg}
            name="Email"
          />

          <ContactInfo
            link="https://github.com/khamerling-potts"
            icon={githubImg}
            name="Github"
          />
          <ContactInfo
            link="https://dev.to/khamerling-potts"
            icon={devImg}
            name="Dev.to"
          />
          <ContactInfo
            link="https://twitter.com/kyrahp_"
            icon={twitterImg}
            name="Twitter"
          />
        </Row>
      </section>
    </Container>
  );
}

export default Contact;
