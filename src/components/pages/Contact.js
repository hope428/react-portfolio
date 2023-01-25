import React, { useState } from "react";
import "../../styles/Form.css"

export default function Contact() {
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "contactName") {
      setContactName(value);
    } else if (name === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  return (
    <div className="container">
      <h1>Contact Me</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          value={contactName}
          name="contactName"
          onChange={handleChange}
          type="text"
          placeholder="Name"
          required
        />
        <input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          value={message}
          name="message"
          onChange={handleChange}
          placeholder="Enter message..."
          required
        ></textarea>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
