import React, { useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Login(props) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();

    await axios
      .post("https://pddadw-backend-production.up.railway.app/app/login/", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        const { access_token } = response.data.data;
        console.log(access_token);
        localStorage.setItem("accessToken", access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;
      })
      .catch((error) => {
        console.log("ERR: ", error);
      });
    window.location.href = "/upload";
  };
  return (
    <div class="container">
      <div className="center">
        <h1>Login Form</h1>
      </div>
      <form onSubmit={submit}>
        <div class="row">
          <div class="col-25">
            <label for="email">Email</label>
          </div>
          <div class="col-75">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="enter email"
              size={100}
              required
            ></input>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="password">Password</label>
          </div>
          <div class="col-75">
            <input
              type="password"
              id="patient_age"
              name="patient_age"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter password"
              size={100}
              required
            ></input>
          </div>
        </div>
        <div class="row">
          <div className="col-25">
            <Link to="/register" style={{ fontweight: 300 }}>
              Register
            </Link>
          </div>
        </div>
        <div class="row">
          <input type="submit" value="Submit"></input>
        </div>
        <div></div>
      </form>
    </div>
  );
}

export default Login;
