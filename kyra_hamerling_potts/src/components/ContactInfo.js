import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ContactInfo({ link, icon, name }) {
  return (
    <Col>
      <Row>
        <img src={icon} id="iconImage" />
      </Row>
      <Row>
        <a href={link} className="icon">
          {name}
        </a>
      </Row>
    </Col>
  );
}

export default ContactInfo;
