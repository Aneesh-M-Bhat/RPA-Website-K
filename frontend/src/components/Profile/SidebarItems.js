import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, ListGroup, Row } from "react-bootstrap";

export default function SidebarItems(props) {
  return (
    <ListGroup.Item
      style={{ height: "7vh", padding: "1vw", paddingLeft: "1.5vw" }}
      onClick={() => props.set(props.setVal)}
    >
      <Row>
        {/* <Col></Col> */}
        <Col sm={2}>
          <FontAwesomeIcon icon={props.icon} />
        </Col>
        <Col>{props.text}</Col>
      </Row>
    </ListGroup.Item>
  );
}
