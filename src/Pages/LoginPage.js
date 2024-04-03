// LoginPage.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import "../index.css"; // Import the CSS file

function LoginPage() {
  const [userName, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      userName: userName,
      password: password,
    };

    axios
      .post("http://localhost:8082/api/login", loginData)
      .then((response) => {
        console.log("Login successful:", response.data);
        navigate("/home", { state: { username: userName } });
      })
      .catch((error) => {
        console.error("There was a problem with the login:", error);
      });
  };

  return (
    <div className="container login-container">
      {/* Apply CSS classes */}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          value={userName}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      <p className="auth-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default LoginPage;
