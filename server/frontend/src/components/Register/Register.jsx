import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert("Registration failed. Please check your details.");
      }
    } catch {
      alert("Unable to connect to the server.");
    }
  };

  return (
    <div className="register-container">
      <h1>Sign-up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="first_name">First Name</label>
        <input
          id="first_name"
          name="first_name"
          type="text"
          placeholder="Enter first name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          id="last_name"
          name="last_name"
          type="text"
          placeholder="Enter last name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
