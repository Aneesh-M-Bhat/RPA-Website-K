import axios from "axios";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
export default function ManagePassword(props) {
  const [currPass, setCurrPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const updatePassword = async () => {
    if (
      props.activeUserData.password == currPass &&
      newPass == confirmNewPass
    ) {
      console.log(props.activeUserData);
      await axios.patch(
        `http://localhost:5000/user/update/${props.activeUserData._id}`,
        {
          password: newPass,
        }
      );
      props.activeUserData.password = newPass;
    }
  };

  return (
    <Card style={{ margin: "5vw" }}>
      <Card.Header>Manage Password</Card.Header>
      <Card.Body>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            updatePassword();
          }}
        >
          <Form.Control
            className="mt-1"
            type="password"
            placeholder="Enter Current Password"
            onChange={(event) => setCurrPass(event.target.value)}
          />
          <Form.Control
            className="mt-1"
            type="password"
            placeholder="Enter New Password"
            onChange={(event) => setNewPass(event.target.value)}
          />
          <Form.Control
            className="mt-1"
            type="password"
            placeholder="Confirm New Password"
            onChange={(event) => setConfirmNewPass(event.target.value)}
          />
          <Button className="mt-1" variant="primary" type="submit">
            Change
          </Button>
        </Form>
      </Card.Body>
    </Card>
    // <section style={{ display: "none" }}>
    //   <div className="edit_container">
    //     <div className="edit_card">
    //       <div className="edit_info">
    //         <div
    //           className="profile_title"
    //           style={{
    //             fontSize: "large",
    //             paddingLeft: "20px",
    //             fontWeight: "1000",
    //           }}
    //         >
    //           Manage Password
    //         </div>
    //       </div>
    //       <div className="edit_forms">
    //         <div className="first_row_bank_appove">
    //           <form>
    //             <div className="password_container">
    //               <h1>Change Password</h1>
    //               <div className="password_reset_row">
    //                 <i className="fas fa-key"></i>
    //                 <input type="password" placeholder="Enter password" />
    //               </div>

    //               <div className="password_reset_row">
    //                 <i className="fa-solid fa-eye-slash"></i>
    //                 <input type="password" placeholder="Enter new password" />
    //               </div>

    //               <div className="password_reset_row">
    //                 <i className="fa-solid fa-eye-slash"></i>
    //                 <input type="password" placeholder="Confirm password" />
    //               </div>

    //               <div className="password_reset_button">
    //                 <button
    //                   style={{
    //                     border: "1px solid red",
    //                     backgroundColor: "red",
    //                   }}
    //                   // onclick="reset_password()"
    //                 >
    //                   Change
    //                 </button>
    //               </div>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
