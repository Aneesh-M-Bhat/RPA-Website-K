import { Card } from "react-bootstrap";
import Calendar from "react-calendar";
export default function MyTime(props) {
  return (
    <Card style={{ margin: "5vw" }}>
      <Card.Header>Calendar</Card.Header>
      <Card.Body>
        <Calendar />
      </Card.Body>
    </Card>
    // <section id="myTime_content" style={{ display: "contents" }}>
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
    //           Calender
    //         </div>
    //       </div>
    //       <div className="edit_forms">
    //         <div className="first_row_myTime">
    //           <div className="wrapper_calender">
    //             <div className="container-calendar">
    //               <h3 id="monthAndYear"></h3>

    //               <div className="button-container-calendar">
    //                 <button id="previous" onclick="previous()">
    //                   &#8249;
    //                 </button>
    //                 <button id="next" onclick="next()">
    //                   &#8250;
    //                 </button>
    //               </div>

    //               <table
    //                 className="table-calendar"
    //                 id="calendar"
    //                 data-lang="en"
    //               >
    //                 <thead id="thead-month"></thead>
    //                 <tbody id="calendar-body"></tbody>
    //               </table>

    //               <div className="footer-container-calendar">
    //                 <div className="calender_text">
    //                   <label
    //                     for="month"
    //                     style={{
    //                       fontSize: "medium",
    //                       fontWeight: "500",
    //                     }}
    //                   >
    //                     Jump To:
    //                   </label>
    //                 </div>
    //                 <select id="month" onchange="jump()">
    //                   <option value>Jan</option>
    //                   <option value>Feb</option>
    //                   <option value>Mar</option>
    //                   <option value>Apr</option>
    //                   <option value>May</option>
    //                   <option value>Jun</option>
    //                   <option value>Jul</option>
    //                   <option value>Aug</option>
    //                   <option value>Sep</option>
    //                   <option value>Oct</option>
    //                   <option value>Nov</option>
    //                   <option value>Dec</option>
    //                 </select>
    //                 <select id="year" onchange="jump()"></select>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
