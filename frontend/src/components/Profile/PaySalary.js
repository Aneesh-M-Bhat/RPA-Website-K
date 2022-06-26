import axios from "axios";
import { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import CSVReader from "react-csv-reader";

export default function PaySalary(props) {
  const [uploadedData, setUploadedData] = useState([]);
  const paymentPerDay = 3000;
  const checkWeek = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    switch (mm) {
      case "01":
      case "03":
      case "05":
      case "07":
      case "08":
      case "10":
      case "12":
        if (dd >= 25) return false;
      case "04":
      case "06":
      case "09":
      case "11":
        if (dd >= 24) return false;
      case "02":
        if (dd >= 21) return false;
    }
    return true;
  };
  const addAttendance = async (data) => {
    await axios.post(`http://localhost:5000/attendance/create`, data);
  };
  const uploadAttendance = (data) => {
    let temp1 = {};
    for (let i = 1; i < data.length; i++) {
      for (let j = 1; j < data[i].length; j++) {
        let key = data[0][j];
        let value = data[i][j];
        temp1[key] = value;
        if (j >= 5 && (j - 5) % 3 == 0) addAttendance(temp1);
      }
    }
  };
  const addUserSalary = async (data) => {
    await axios.post(`http://localhost:5000/userSalary/create`, data);
  };
  const handlePay = async () => {
    // const payDetails = await axios.get(`http://localhost:5000/userSalary/get`);
    const attendanceDetails = await axios.get(
      `http://localhost:5000/attendance/get`
    );

    let calc = {};
    attendanceDetails.data.map((item) => {
      if (item.inTime && item.outTime) {
        let temp1 = item.inTime.substr(0, item.inTime.indexOf(":"));
        let temp2 = item.outTime.substr(0, item.outTime.indexOf(":"));
        let res = parseInt(temp2) - parseInt(temp1);
        if (res >= 7)
          calc[item.employeeId]
            ? (calc[item.employeeId] += 1)
            : (calc[item.employeeId] = 1);
        else if (res > 0)
          calc[item.employeeId]
            ? (calc[item.employeeId] += 0.5)
            : (calc[item.employeeId] = 0.5);
      }
    });
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = dd + "/" + mm + "/" + yyyy;
    for (const item in calc) {
      let temp = {
        employeeId: item,
        salaryDate: today,
        grossPay: paymentPerDay * calc[item],
        deductions: 0,
        paymentStatus: "pending",
      };
      addUserSalary(temp);
    }

    await axios.delete(`http://localhost:5000/attendance/delete`);
  };
  return (
    <div style={{ marginTop: "25vh" }}>
      <center>
        <Card style={{ margin: "5vw" }} className="mb-1">
          <Card.Header>Upload Attendance</Card.Header>
          <Card.Body>
            <center>
              <Form.Group>
                <center>
                  <Form.Label>Upload .csv file to update attendance</Form.Label>
                  <CSVReader
                    onFileLoaded={(data, fileInfo, originalFile) =>
                      setUploadedData(data)
                    }
                  />
                  <Button
                    className="mt-1"
                    onClick={() => uploadAttendance(uploadedData)}
                  >
                    Confirm
                  </Button>
                </center>
              </Form.Group>
            </center>
          </Card.Body>
        </Card>
      </center>
      <center>
        <Card style={{ margin: "5vw" }} className="mt-1">
          <Card.Header>Pay Salary</Card.Header>
          <Card.Body>
            <center>
              <Card.Text>
                Click to{" "}
                <Button onClick={handlePay} disabled={checkWeek()}>
                  Pay
                </Button>{" "}
                salary
              </Card.Text>
            </center>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
}
