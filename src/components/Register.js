import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { registerStart } from "../store/auth/authActions";
const RegisterContainer = styled.form`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

const RegisterInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const RegisterButton = styled.button`
  display: block;
  width: 100%;
  height: 44px;
  margin-top: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #222;
  }
`;

const Register = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errormessage, setErrormessage] = useState("")
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleChange = (e) =>{
    if(credentials.email === ""){
      alert("enter you password")
      console.log("88888888888888888888888");
      setErrormessage("plese enter your password")
    }
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = dispatch(registerStart(credentials));
    
    if(res.type === "REGISTER_START"  ){
      navigate("/Login")
    }
  };

  return (
    // <form>
    // <RegisterContainer>
      <form onSubmit={handleSubmit}>
        <h2>REGISTER</h2>
        <label>
          <h4> Name</h4>
          <RegisterInput
            name="name"
            type="text"
            placeholder="Enter Your name"
            // value={credentials.email}
            onChange={handleChange}
          />
          <h4> Email</h4>
          <RegisterInput
            name="email"
            type="text"
            placeholder="Enter Your Email"
            value={credentials.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <h4 style={{ margiRight: "250px" }}>Password</h4>
          <RegisterInput
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter Your password"
          />
          {/* {errormessage && <p style={{ color:"red"}}>plese enter password</p>} */}
        </label>
        <RegisterButton type="submit">Register</RegisterButton>
        <p>
          You are already Register ?{" "}
          <span
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => navigate("/Login")}
          >
            Login
          </span>
        </p>
      </form>
    // </RegisterContainer>
    // </form>
  );
};

export default Register;
