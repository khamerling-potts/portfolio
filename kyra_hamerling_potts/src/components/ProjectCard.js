import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

function ProjectCard({ title, img, github, description }) {
  return (
    <Col>
      <Card className="projectCard">
        <Card.Img variant="top" src={img} className="projectImg" />
        <Card.Body>
          <Card.Title className="projHeader">{title}</Card.Title>
          <Card.Text>
            <Accordion flush id="projectAccordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="custom-accordion-header">
                  Read More
                </Accordion.Header>
                <Accordion.Body>{description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;
