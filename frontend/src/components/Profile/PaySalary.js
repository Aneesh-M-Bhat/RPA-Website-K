import axios from "axios";
import { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import CSVReader from "react-csv-reader";

export default function PaySalary(props) {
  const addAttendance = async (data) => {
    await axios.post(`http://localhost:5000/attendance/create`, data);
  };
  const uploadAttendance = (data) => {
    // console.log(data);
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
                // console.log(data, fileInfo, originalFile)
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
            Click to <Button>Pay</Button> salary
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
