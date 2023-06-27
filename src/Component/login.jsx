import React from "react";
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";

export default function Login() {
  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //const EMail = JSON.parse(localStorage.getItem("Email"));
  //const pass = JSON.parse(localStorage.getItem("Password"));
  const {state}=useLocation();
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === state?.Name && password === state?.pw) {
      navigate("/car");
    } else {
      alert("Invalid Credential");
    }
  };
  const navigate = useNavigate();

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2>Login</h2>
          <form>
            <div class="form-group">
              <label for="username">Username:</label>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Enter username"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              class="btn btn-primary mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
