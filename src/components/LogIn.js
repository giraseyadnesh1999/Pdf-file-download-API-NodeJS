import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { logInStart } from "../store/auth/authActions";
import styled from "styled-components";

const LoginContainer = styled.form`
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const LoginButton = styled.button`
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

const LogIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInStart(credentials));
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <label>
          Email
          <LoginInput
            name="email"
            type="text"
            value={credentials.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <LoginInput
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <LoginButton type="submit">Log In</LoginButton>
      </form>
    </LoginContainer>
  );
};

export default LogIn;
