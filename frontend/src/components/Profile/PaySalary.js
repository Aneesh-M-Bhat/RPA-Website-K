import { Button, Card } from "react-bootstrap";

export default function PaySalary(props) {
  return (
    <Card style={{ margin: "5vw" }}>
      <Card.Header>Pay Salary</Card.Header>
      <Card.Body>
        <Card.Text>Click the below button to pay salary</Card.Text>
        <Button>Pay</Button>
      </Card.Body>
    </Card>
    // <section id="pay_salary" style={{ display: "none" }}>
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
    //           Pay Salary
    //         </div>
    //       </div>
    //       <div className="edit_forms1">
    //         <div className="first_row_bank_appove1">
    //           <div className="first_row_attendence_container_approve_request">
    //             <div className="pay_salary_container">
    //               <button type="submit">Approve</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
