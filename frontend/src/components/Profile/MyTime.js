import { Card } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function MyTime(props) {
  return (
    <Card style={{ margin: "5vw" }}>
      <Card.Header>Calendar</Card.Header>
      <Card.Body>
        <Calendar />
      </Card.Body>
    </Card>
  );
}
