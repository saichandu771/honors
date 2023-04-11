import React from "react";
import "./register.css"
function Register(props) {
  return  <div class="container">
     <div className="center"><h1>Registration Form</h1></div>
  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="patient_name">Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="patient_name" name="patient_name" placeholder="Your name.."></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="patient_age">Age</label>
      </div>
      <div class="col-75">
        <input type="text" id="patient_age" name="patient_age" placeholder="Your age.."></input>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit"></input>
    </div>
  </form>
</div>;
}

export default Register;
