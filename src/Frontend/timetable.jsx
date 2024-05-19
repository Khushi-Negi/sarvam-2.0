import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./timetable.css"; // Make sure to create this CSS file for styles
import Navigation from "./Navigation";
import SideNavBar from "./SideNavBar";

const TeacherDetailsForm = () => {
  const [teacherName, setTeacherName] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your form submission logic here, like sending the data to a server
    console.log({ teacherName, day, time });
  };

  return (
    <div>
      <Navigation />
      <SideNavBar />
      <strong>
        <p
          style={{
            fontFamily: "Times New Roman, Times, serif",
            fontSize: 30,
            marginTop: 0,
            letterSpacing: 0,
          }}
        >
          Just a heads up: if you don't fill in all the columns in CAPITAL
          LETTERS, a colony of grumpy CAPS LOCK
        </p>
      </strong>
      <center>
        <strong>
          <p
            style={{
              fontFamily: "Times New Roman, Times, serif",
              fontSize: 30,
              marginTop: 0,
              letterSpacing: 0,
              marginBottom: 7,
            }}
          >
            creatures will invade your computer!
          </p>
        </strong>
        <strong>
          <p
            style={{
              fontFamily: "Times New Roman, Times, serif",
              fontSize: 30,
              marginTop: 0,
              letterSpacing: 0,
              marginBottom: 7,
            }}
          >
            Hey there, just a reminder to enter your professor's details.
          </p>
        </strong>
      </center>
      <center>
        <div className="container">
          <form onSubmit={handleSubmit} method="POST">
            <label htmlFor="teacher_name">
              <center>
                <h6 style={{ marginTop: "20px" }}>Enter Teacher Name:</h6>
              </center>
            </label>
            <center>
              <input
                style={{ padding: "11px 140px", height: 43 }}
                type="text"
                id="teacher_name"
                name="teacher_name"
                placeholder="Enter your professor's name"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                required
              />
            </center>

            <label htmlFor="day">
              <center>
                <h6 style={{ marginTop: "20px" }}>Day</h6>
              </center>
            </label>
            <center>
              <input
                style={{ padding: "11px 140px", height: 43 }}
                type="text"
                id="day"
                name="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                required
              />
            </center>

            <label htmlFor="time">
              <center>
                <h6 style={{ marginTop: "20px" }}>Time</h6>
              </center>
            </label>
            <center>
              <input
                style={{ padding: "11px 140px", height: 43 }}
                type="text"
                id="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </center>

            <center>
              <input
                type="submit"
                value="Submit"
                style={{ marginTop: "40px", width: 300 }}
              />
            </center>
          </form>
        </div>
      </center>
    </div>
  );
};

export default TeacherDetailsForm;
