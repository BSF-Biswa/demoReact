import React from "react";
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function signup() {
    const[userName,setUserName]=useState("")
    const[email,setEmail]=useState("")
    const[Password,setPassword]=useState("")
    const[ConfirmPassword,setConfirmpassword]=useState("")

    //localStorage.setItem("Email",JSON.stringify(email));
    //localStorage.setItem("Password",JSON.stringify(Password));
    
    const navigate=useNavigate();
    
    const handleSubmit=(e)=>{
        // e.preventDefault();
        // if(userName==="admin" && email==="admin" && Password==="admin" && ConfirmPassword==="admin"){
        //     navigate("/login")
        // }else{
        //     alert("All files are mandatory")
        // }
        navigate("/login",{state:{Name:userName,pw:Password}})  //navigate through state
    }
    
  return (
    <div>
      <div className="co ntainer mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <h2>Sign Up</h2>
            <form>
              <div className="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) => setUserName(e.target.value)}
                value={userName}
                />
              </div>
              <div className="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
              </div>
              <div className="form-group">
                <label for="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                value={Password}
                />
              </div>
              <div className="form-group">
                <label for="confirm_password">Confirm Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm_password"
                  placeholder="Confirm your password"
                  onChange={(e) => setConfirmpassword(e.target.value)}
                value={ConfirmPassword}
                />
              </div>
              <button onClick={handleSubmit} type="submit" className="btn btn-primary m">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
