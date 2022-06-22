import axios from "axios";
import { useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";

export default function UpdateSalary(props) {
  const [eid, setEid] = useState("");
  const [salary, setSalary] = useState("");
  const updateSalary = async () => {
    await axios.patch(`http://localhost:5000/user/update/eid/${eid}`, {
      salary: salary,
    });
  };
  return (
    <Card style={{ margin: "5vw", marginTop: "25vh" }}>
      <Card.Header>Update Salary</Card.Header>
      <Card.Body>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            updateSalary();
          }}
        >
          <Form.Control
            className="mt-1"
            placeholder="Enter Employee ID"
            onChange={(event) => setEid(event.target.value)}
          />
          <InputGroup>
            <Form.Control
              className="mt-1"
              placeholder="Enter Updated Salary"
              onChange={(event) => setSalary(event.target.value)}
            />
            <Button className="mt-1" variant="primary" type="submit">
              Update
            </Button>
          </InputGroup>
        </Form>
      </Card.Body>
    </Card>
    // <section id="update_salary_content" style={{ display: "none" }}>
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
    //           Update Salary
    //         </div>
    //       </div>
    //       <div className="edit_forms">
    //         <div className="first_row_bank_appove">
    //           <form id="form_password_reset" action="">
    //             <div className="password_container">
    //               <h1>Update Salary</h1>
    //               <div className="password_reset_row">
    //                 <i className="fas fa-user"></i>
    //                 <input
    //                   id="salary_empid"
    //                   name="salary_empid"
    //                   type="text"
    //                   placeholder="Enter Employee ID"
    //                 />
    //                 <div className="error" id="update_salary_error"></div>
    //               </div>

    //               <div className="password_reset_row">
    //                 <i className="fa-solid fa-file-pen"></i>
    //                 <input
    //                   id="new_salary"
    //                   name="new_salary"
    //                   type="number"
    //                   placeholder="Enter updated Salary"
    //                 />
    //                 <div className="error" id="new_salary_error"></div>
    //               </div>

    //               <div className="password_reset_button">
    //                 <button
    //                   id="button_password_submit"
    //                   style={{
    //                     border: "1px solid #4bc970",
    //                     backgroundColor: "#4bc970",
    //                   }}
    //                   onclick="update_salary()"
    //                 >
    //                   Update
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
