import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

function ProjectCard({ title, img, headline, github, description }) {
  return (
    <Col className="projectCol">
      <Card className="projectCard">
        <Card.Header>
          <a href={github}>Link</a>
        </Card.Header>
        <Card.Img variant="top" src={img} className="projectImg" />
        <Card.Body>
          <Card.Title className="projHeader">
            {title}
            <Card.Subtitle className="mt-1" id="projectSubtitle">
              {headline}
            </Card.Subtitle>
          </Card.Title>

          {/* <Card.Text> */}
          <Accordion flush id="projectAccordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="custom-accordion-header">
                Read More
              </Accordion.Header>
              <Accordion.Body>{description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* </Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;
