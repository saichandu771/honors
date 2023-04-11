import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
function Login(props) {
  return   <div class="container">
    <div className="center"><h1>Login Form</h1></div>
  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="email">Email</label>
      </div>
      <div class="col-75">
        <input type="email" id="email" name="email" placeholder="enter email" required></input>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="password">Password</label>
      </div>
      <div class="col-75">
        <input type="password" id="patient_age" name="patient_age" placeholder="Your age.."></input>
      </div>
    </div>
    <div class="row">
    <div className="col-25">
    <Link to="/register" style={{fontweight:300}}>Register</Link>
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

export default Login;
