import React, { useState } from "react";
import "./CodingConfForm.css"; // Import the CSS file

export default function CodingConfForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, avatar: URL.createObjectURL(e.target.files[0]) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form">
          <h2 className="form-title">Your Journey to Coding Conf 2025 Starts Here!</h2>
          <p className="form-subtitle">Secure your spot at next year’s biggest coding conference in! </p> 

          <div className="form-group">
            <label>Upload Profile</label>
            <input type="file" onChange={handleFileChange} required />
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>GitHub Username</label>
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Generate My Ticket
          </button>
        </form>
      ) : (
        <div className="ticket">
          <h1 className="ticket-title">
            Congrats, <span className="highlight">{formData.name}</span> 
          </h1>
          <h2 className="ticket-title-sub">Your Ticket is ready!...</h2>
          <p className="ticket-message">
           We’ve emailed your ticket to <span className="highlight">{formData.email}</span>.
          </p>
          <div className="ticket-card">
            <img src={formData.avatar} alt="profile" className="profile" />
            <p className="event-name">Coding Conf</p>
            <p>Dec 13, 2025 | 10:00 AM</p>
            <p className="user-name">{formData.name}</p>
            <p className="user-handle">@{formData.github}</p>
          </div>
        </div>
      )}
    </div>
  );
}
