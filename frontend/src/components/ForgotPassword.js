import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import axios from "axios";

function ForgotPassword(props) {
  const [email, setEmail] = useState("");
  const [eid, setEid] = useState("");
  const sendPassword = async () => {
    const response = await axios.get(
      `http://localhost:5000/user/get/eid/${eid}`
    );
    if ((response.data.data[0].email = email)) {
      console.log(response.data.data[0]);
      let templateParams = {
        empId: response.data.data[0].employeeId,
        pwd: response.data.data[0].password,
        email: response.data.data[0].email,
      };
      emailjs
        .send(
          "service_58o6t7r",
          "template_gkn308p",
          templateParams,
          "jI8nIeYkWvZy_8TMN"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
  };
  return (
    <Container>
      <center>
        <Card style={{ marginTop: "30vh", width: "30vw" }}>
          {/* <Modal show={showError} onHide={() => setShowError(false)}>
          <Modal.Header closeButton>Error</Modal.Header>
          <Modal.Body>Incorrect Values for Password/EmployeeId</Modal.Body>
        </Modal> */}
          <Card.Header>Forgot Password</Card.Header>
          <Card.Body>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                sendPassword();
              }}
            >
              <Form.Control
                className="mt-1"
                required
                placeholder="Employee ID"
                type="text"
                onChange={(event) => setEid(event.target.value)}
              />
              <Form.Control
                className="mt-1"
                required
                placeholder="Email"
                type="text"
                onChange={(event) => setEmail(event.target.value)}
              />
              <center>
                <Form.Label
                  className="m-1"
                  onClick={() => props.setActiveComponent(0)}
                >
                  <small>Go Back?</small>
                </Form.Label>
                <Button type="submit" variant="primary" className="m-1">
                  Send
                </Button>
              </center>
            </Form>
          </Card.Body>
        </Card>
      </center>
    </Container>
  );
}
export default ForgotPassword;
