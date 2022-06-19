import axios from "axios";
import { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";

export default function AddRemove(props) {
  const [showRemoved, setShowRemoved] = useState(false);
  const [showError, setShowError] = useState(false);
  const [removeStatus, setRemoveStatus] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [eid, setEid] = useState("");
  const removeEmployee = async () => {
    const response = await axios.get(`http://localhost:5000/user/get`);
    let res = response.data.filter((item) => item.employeeId == eid);
    // console.log(res);
    if (confirm == "REMOVE" && res.length > 0) {
      await axios.delete(`http://localhost:5000/user/delete/eid/${eid}`);
      setShowRemoved(true);
    } else {
      setShowError(true);
    }
  };
  return (
    <Card style={{ margin: "5vw" }}>
      <Modal show={showRemoved} onHide={() => setShowRemoved(false)}>
        <Modal.Header closeButton>Success</Modal.Header>
        <Modal.Body>Successfully Removed Employee with id - {eid}</Modal.Body>
      </Modal>
      <Modal show={showError} onHide={() => setShowError(false)}>
        <Modal.Header closeButton>Error</Modal.Header>
        <Modal.Body>
          Incorrect values specified <br /> check employeeId and remove
          confirmation and retry
        </Modal.Body>
      </Modal>
      <Card.Header>Add/Remove Staff</Card.Header>
      {removeStatus ? (
        <Card.Body>
          {/* <Card.Text>Remove Staff</Card.Text> */}
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              removeEmployee();
            }}
          >
            <Form.Label>Remove Staff</Form.Label>
            <Form.Control
              placeholder="Enter Employee ID"
              onChange={(event) => setEid(event.target.value)}
            />
            <Form.Control
              placeholder="Type REMOVE to confirm"
              onChange={(event) => setConfirm(event.target.value)}
            />
            <Button onClick={() => setRemoveStatus(!removeStatus)}>Back</Button>
            <Button type="submit">Remove</Button>
          </Form>
        </Card.Body>
      ) : (
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Text className="m-0 mt-1">
            Click the below button to add new hired Staffs
          </Card.Text>
          <Button className="m-0 mt-1">Run Bot</Button>
          <Card.Text className="m-0 mt-1">
            Click the below button to remove Staff
          </Card.Text>
          <Button
            className="m-0 mt-1"
            onClick={() => setRemoveStatus(!removeStatus)}
          >
            Remove
          </Button>
        </Card.Body>
      )}
    </Card>
    // <section id="add_remove_content" style={{ display: "none" }}>
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
    //           Add/Remove Staff
    //         </div>
    //       </div>
    //       <div className="edit_forms1">
    //         <div
    //           className="first_row_bank_appove1"
    //           id="staff_add_or_remove"
    //           style={{ display: "contents" }}
    //         >
    //           <div className="first_row_add_remove_staff">
    //             <div className="add_staff">
    //               <div className="add_staff_content">
    //                 <h1>Click the below button to add new hired Staffs</h1>
    //               </div>

    //               <div
    //                 className="add_staff_button"
    //                 style={{ marginTop: "20px" }}
    //               >
    //                 <button> Run Bot </button>
    //               </div>
    //             </div>

    //             <div className="remove_staff">
    //               <div className="remove_staff_content">
    //                 <h1>Click the below button to remove Staff</h1>
    //               </div>

    //               <div
    //                 className="remove_staff_button"
    //                 style={{ marginTop: "20px" }}
    //               >
    //                 <button
    //                   onclick="remove_staff()"
    //                   id="button_remove_staff_remove1"
    //                 >
    //                   Remove
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div
    //           className="first_row_bank_appove1"
    //           id="remove_staff_by_id"
    //           style={{ display: "none" }}
    //         >
    //           <div className="first_row_remove_staff">
    //             <form id="form_remove_staff" action="">
    //               <div className="remove_container">
    //                 <h1> Remove Staff</h1>
    //                 <div className="remove_staff_row">
    //                   <i className="fas fa-user"></i>
    //                   <input
    //                     id="remove_eid"
    //                     name="remove_eid"
    //                     type="text"
    //                     placeholder="Enter employee ID"
    //                   />
    //                   <div className="error" id="remove_eid_error"></div>
    //                 </div>

    //                 <div className="remove_staff_row">
    //                   <i className="fas fa-user"></i>
    //                   <input
    //                     id="confirm_remove"
    //                     name="confirm_remove"
    //                     type="text"
    //                     placeholder="Type 'REMOVE' to confirm"
    //                   />
    //                   <div className="error" id="confirm_remove_error"></div>
    //                 </div>

    //                 <div className="add_staff_button">
    //                   <button
    //                     id="button_remove_staff"
    //                     onclick="remove_staff_back()"
    //                   >
    //                     Back
    //                   </button>
    //                   <button
    //                     id="button_remove_staff_remove"
    //                     style={{
    //                       border: "1px solid red",
    //                       backgroundColor: "red",
    //                     }}
    //                     onclick="removeStaffById()"
    //                   >
    //                     Remove
    //                   </button>
    //                 </div>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
