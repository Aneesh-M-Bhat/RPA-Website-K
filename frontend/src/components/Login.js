import { useState } from "react";
import axios from "axios";
import { Button, Card, Container, Form } from "react-bootstrap";
// import "../css/login.css";

function Login(props) {
  const [eid, setEid] = useState("");
  const [password, setPassword] = useState("");
  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:5000/user/get/eid/${eid}`
    );
    if (password == response.data.data[0].password) {
      props.setActiveUserData(response.data.data[0]);
      props.setActiveComponent(2);
    }
  };
  return (
    <Container>
      <Card>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              getUser();
            }}
          >
            <Form.Control
              placeholder="Employee ID"
              type="text"
              onChange={(event) => setEid(event.target.value)}
            />
            <Form.Control
              placeholder="Password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Label onClick={() => props.setActiveComponent(1)}>
              Forgot Password?
            </Form.Label>
            <Button type="submit" variant="primary">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default Login;
