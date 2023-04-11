import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./upload.css";
function Upload(props) {
  return   <div class="container">
  <form action="/action_page.php">
  <div className="center"><h1>Patient Details</h1></div>
    <div class="row">
      <div class="col-25">
        <label for="patient_name">Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="patient_name" name="patient_name" placeholder="enter name.."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="patient_age">Age</label>
      </div>
      <div class="col-75">
        <input type="password" id="patient_age" name="patient_age" placeholder="Your age.."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="patient_gender">Gender</label>
      </div>
      <div class="col-75">
        <select id="patient_gender" name="PatienT_gender">
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
       <input type="file" id="document" name="document" placeholder="upload file"></input>
      </div> 
    </div>
    <div class="row">
      <input type="submit" value="Submit"></input>
    </div>
  </form>
</div>
    
  
}

export default Upload;
