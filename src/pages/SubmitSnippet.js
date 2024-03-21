import React, { useState } from "react";
import axios from "axios";
import "./SubmitSnippet.css";

const SubmitSnippet = () => {
  const [formData, setFormData] = useState({
    username: "",
    language: "",
    stdin: "",
    code: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://tfw-backend.onrender.com/api/snippets",
        formData
      );
      setFormData({
        username: "",
        language: "",
        stdin: "",
        code: "",
      });
      alert("Code snippet submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error submitting code snippet. Please try again.");
    }
  };

  return (
    <div className="submit-snippet-container">
      <h1>Submit Code Snippet</h1>
      <form onSubmit={handleSubmit} className="submit-snippet-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="">Select a language</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="stdin">Standard Input:</label>
          <textarea
            id="stdin"
            name="stdin"
            value={formData.stdin}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="code">Source Code:</label>
          <textarea
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitSnippet;
