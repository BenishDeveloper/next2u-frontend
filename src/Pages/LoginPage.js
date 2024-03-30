// LoginPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Import the CSS file

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic to handle login
    console.log("Logging in with:", email, password);
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
          value={email}
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
