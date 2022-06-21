import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

function MyPay(props) {
  const [payDetails, setPayDetails] = useState([]);
  useEffect(() => {
    getPay();
  }, []);
  const getPay = async () => {
    const response = await axios.get(
      `http://localhost:5000/userSalary/get/eid/${props.activeUserData.employeeId}`
    );
    // console.log(response.data);
    setPayDetails(response.data.data);
  };
  return (
    <Card style={{ margin: "5vw" }}>
      <Card.Header>Payment Details</Card.Header>
      <Card.Body>
        <Table bordered>
          <thead>
            <tr>
              <th>NO.</th>
              <th>DATE</th>
              <th>GROSS PAY</th>
              <th>DEDUCTIONS</th>
              <th>NET PAY</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {payDetails.map((item, index) => {
              // console.log(item);
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.salaryDate}</td>
                  <td>{item.grossPay}</td>
                  <td>{item.deductions}</td>
                  <td>{item.grossPay - item.deductions}</td>
                  <td>{item.paymentStatus}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
    // <section id="myPay_content" style={{ display: "contents" }}>
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
    //           Payment Details
    //         </div>
    //       </div>
    //       <div className="edit_forms_myPay">
    //         <div className="first_row">
    //           <table className="styled table">
    //             <thead>
    //               <tr>
    //                 <th>NO.</th>
    //                 <th>DATE</th>
    //                 <th>GROSS PAY</th>
    //                 <th>DEDUCTIONS</th>
    //                 <th>NET PAY</th>
    //                 <th>STATUS</th>
    //               </tr>
    //             </thead>
    // <tbody>
    //   {payDetails.map((item, index) => {
    //     console.log(item);
    //     return (
    //       <tr>
    //         <td>{index + 1}</td>
    //         <td>{item.salaryDate}</td>
    //         <td>{item.grossPay}</td>
    //         <td>{item.deductions}</td>
    //         <td>{item.grossPay - item.deductions}</td>
    //         <td>{item.paymentStatus}</td>
    //       </tr>
    //     );
    //   })}
    // </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
export default MyPay;
