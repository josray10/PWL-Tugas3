import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitCount, setSubmitCount] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, e.g., send data to server
    console.log("Form Data:", formData);
    setSubmitCount(submitCount + 1);
  };

  return (
    <div>
      <h2 className="contact-title">Contact Me</h2>
      <form className="form-contact" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
      {submitCount > 0 && (
        <p>{`Form submitted successfully. Total submissions: ${submitCount}`}</p>
      )}
    </div>
  );
};

export default Contact;
