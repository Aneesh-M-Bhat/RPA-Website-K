import axios from "axios";
import { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import CSVReader from "react-csv-reader";

export default function PaySalary(props) {
  const paymentPerDay = 3000;
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
    for (const item in calc) {
      let temp = {
        employeeId: item,
        salaryDate: new Date(),
        grossPay: paymentPerDay * calc[item],
        deductions: 0,
        paymentStatus: "pending",
      };
      addUserSalary(temp);
    }

    await axios.delete(`http://localhost:5000/attendance/delete`);
  };
  return (
    <div>
      <Card style={{ margin: "5vw" }} className="mb-1">
        <Card.Header>Upload Attendance</Card.Header>
        <Card.Body>
          <Form.Group>
            <Form.Label className="m-1">
              Upload .csv file to update attendance
            </Form.Label>
            <CSVReader
              onFileLoaded={(data, fileInfo, originalFile) =>
                uploadAttendance(data)
              }
            />
          </Form.Group>
        </Card.Body>
      </Card>
      <Card style={{ margin: "5vw" }} className="mt-1">
        <Card.Header>Pay Salary</Card.Header>
        <Card.Body>
          <Card.Text>
            Click to <Button onClick={handlePay}>Pay</Button> salary
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
