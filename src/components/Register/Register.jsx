import React from "react";
import "./register.css"
function Register(props) {
  return  <div class="container">
     <div className="center"><h1>Registration Form</h1></div>
     <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="email">Email</label>
      </div>
      <div class="col-75">
        <input type="email" id="email" name="email" placeholder="enter email" size={100} required></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="password">Password</label>
      </div>
      <div class="col-75">
        <input type="password" id="patient_age" name="patient_age" placeholder="enter password" size={100}></input>
      </div>
    </div>
    <div class="row">
       
      <input type="submit" value="Submit"></input>
      
    </div>
    <div>
     
    </div>
  </form>
</div>;
}

export default Register;
