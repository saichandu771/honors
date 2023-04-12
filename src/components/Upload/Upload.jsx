import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./upload.css";
function Upload(props) {
  const authToken = localStorage.getItem("accessToken");

  const [patname, setpatname] = useState("");
  const [patage, setpatage] = useState("");
  const [gender, setgender] = useState("male");

  const [location, setLocation] = useState({ title: "", image: "" });
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose file");

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      window.location.href = "/login";
    } else {
    }
  }, []);

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setLocation({ ...location, [e.target.name]: e.target.value });
    console.log(e.target.files[0]["name"]);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(file);

    const formData = new FormData();
    formData.append("patient_name", patname);
    formData.append("patient_age", patage);
    formData.append("patient_gender", gender);
    formData.append("document", filename);

    console.log(FormData);

    fetch("https://pddadw-backend-production.up.railway.app/app/upload/", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${authToken}`, // Replace <token> with your actual token
      },
    })
      .then((response) => {
        console.log("Data uploaded successfully:", response);
      })
      .catch((error) => {
        console.error("Error uploading data:", error);
      });
  };

  const handleGender = (e) => {
    setgender(e.target.value);
    console.log(gender);
    console.log(authToken);
  };

  return (
    <div class="container">
      <form onSubmit={submitForm}>
        <div className="center">
          <h1>Patient Details</h1>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="patient_name">Name</label>
          </div>
          <div class="col-75">
            <input
              required
              type="text"
              id="patient_name"
              name="patient_name"
              value={patname}
              onChange={(e) => setpatname(e.target.value)}
              placeholder="enter name.."
            ></input>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="patient_age">Age</label>
          </div>
          <div class="col-75">
            <input
              required
              type="text"
              id="patient_age"
              name="patient_age"
              onChange={(e) => setpatage(e.target.value)}
              placeholder="Your age.."
            ></input>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="patient_gender">Gender</label>
          </div>
          <div class="col-75">
            <select
              id="patient_gender"
              name="Patient_gender"
              required
              onChange={handleGender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="document">Document</label>
          </div>
          <div class="col-55">
            <input
              required
              type="file"
              id="document"
              name="document"
              accept="image/*"
              placeholder="upload file"
              onChange={onChangeFile}
            ></input>
          </div>
        </div>
        <div class="row">
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
}

export default Upload;
