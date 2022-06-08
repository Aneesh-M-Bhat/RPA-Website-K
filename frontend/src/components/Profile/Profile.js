import AboutMe from "./AboutMe";
import AddRemove from "./AddRemove";
// import ApproveAttendance from "./ApproveAttendance";
import Leave from "./Leave";
import Bank from "./Bank";
import ManagePassword from "./ManagePassword";
import MyPay from "./MyPay";
import MyTime from "./MyTime";
import PaySalary from "./PaySalary";
import ProfileSidebar from "./ProfileSidebar";
import Request from "./Request";
import UpdateSalary from "./UpdateSalary";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Profile(props) {
  const [activeProfileComponent, setActiveProfileComponent] =
    useState("AboutMe");
  const showProfile = () => {
    switch (activeProfileComponent) {
      case "AboutMe":
        return <AboutMe activeUserData={props.activeUserData} />;
      case "MyPay":
        return <MyPay />;
      case "Leave":
        return <Leave />;
      case "MyTime":
        return <MyTime />;
      case "Bank":
        return <Bank activeUserData={props.activeUserData} />;
      case "ApproveRequests":
        return <Request />;
      case "AddRemoveStaff":
        return <AddRemove />;
      case "PaySalary":
        return <PaySalary />;
      case "UpdateSalary":
        return <UpdateSalary />;
      case "ManagePassword":
        return <ManagePassword activeUserData={props.activeUserData} />;
    }
  };
  return (
    <Container fluid className="m-0 p-0">
      <Row className="g-0">
        <Col sm={2}>
          <ProfileSidebar
            activeUserData={props.activeUserData}
            setActiveProfileComponent={setActiveProfileComponent}
          />
        </Col>
        <Col>{showProfile()}</Col>
      </Row>
    </Container>
    // <div className="container">
    //   <div className="main_body">
    //     <div className="side_menu">
    //       <div className="wrapper">

    //         <div className="section">
    //           <div className="top_navbar">
    //             <div className="hamburger">
    //               <a>
    //                 <i className="fas fa-bars"></i>
    //               </a>
    //             </div>
    //           </div>
    //           <div className="container">
    //             <div className="inner_section"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Profile;
