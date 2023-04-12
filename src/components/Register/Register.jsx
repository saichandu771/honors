import React from "react";
import "./register.css";
import { useState } from "react";
import axios from "axios";

function Register(props) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://pddadw-backend-production.up.railway.app/app/registration/",
        {
          email,
          password,
        }
      )
      .then((response) => {
        console.log(response.data);
        const { access_token } = response.data.data;
        console.log(access_token);
        localStorage.setItem("accessToken", access_token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;
        window.location.href = "/upload";
      })
      .catch((error) => {
        console.log("ERR: ", error);
      });
  };

  return (
    <div class="container">
      <div className="center">
        <h1>Registration Form</h1>
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
              placeholder="enter email"
              size={100}
              value={email}
              required
              onChange={(e) => setemail(e.target.value)}
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
              placeholder="enter password"
              size={100}
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
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

export default Register;
