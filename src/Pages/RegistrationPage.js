// RegistrationPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Import the CSS file

function RegistrationPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [locality, setLocality] = useState("");
  const [landmark, setLandmark] = useState("");
  const [gstin, setGstin] = useState("");
  const [dob, setDob] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Logic to handle registration
    console.log(
      "Registering with:",
      fullName,
      email,
      phone,
      password,
      address,
      pinCode,
      state,
      district,
      area,
      locality,
      landmark,
      gstin,
      dob
    );
  };

  return (
    <div className="container register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          className="input-field"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field"
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          className="input-field"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={4}
        />
        {/* Additional address fields */}

        <input
          className="input-field"
          type="text"
          placeholder="PIN Code"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="District"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Landmark"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
        />
        {/* Additional information fields */}
        <input
          className="input-field"
          type="text"
          placeholder="GSTIN Number"
          value={gstin}
          onChange={(e) => setGstin(e.target.value)}
        />
        <input
          className="input-field"
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
      <p className="auth-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default RegistrationPage;
