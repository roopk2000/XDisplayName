import React, { useState } from "react";
import "./App.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default Form;
