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
    // <div className="container">
    //   <div className="wrapper">
    //     <div className="title">
    //       <span>Login Form</span>
    //     </div>
    //     <form
    //       id="form"
    //       onSubmit={(event) => {
    //         event.preventDefault();
    //         getUser();
    //       }}
    //     >
    //       <div className="row">
    //         <i className="fas fa-user"></i>
    //         <input
    //           id="eid"
    //           type="text"
    //           placeholder="Employee ID"
    //           onChange={(event) => setEid(event.target.value)}
    //         />
    //         {/* <div className="error"></div> */}
    //       </div>
    //       <div className="row">
    //         <i className="fas fa-lock"></i>
    //         <input
    //           id="password"
    //           type="password"
    //           placeholder="Password"
    //           onChange={(event) => setPassword(event.target.value)}
    //         />
    //         {/* <div className="error"></div> */}
    //       </div>
    //       <div className="pass">
    //         <a onClick={() => props.setActiveComponent(1)}>Forgot password?</a>
    //       </div>
    //       <div className="row button">
    //         <input type="submit" />
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}
export default Login;
