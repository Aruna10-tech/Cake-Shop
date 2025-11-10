import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    dob: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Registered successfully!");
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2 style={{ textAlign: "center", color: "rgb(90, 4, 18)" }}>Register Form</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <div className="form-group" style={{marginTop:"20px"}}>
            <label htmlFor="username">USERNAME:</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              value={formData.username}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">PASSWORD:</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              value={formData.password}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL:</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              value={formData.email}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">DATE OF BIRTH:</label>
            <input
              onChange={handleChange}
              type="date"
              name="dob"
              id="dob"
              value={formData.dob}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">ADDRESS:</label>
            <input
              onChange={handleChange}
              type="text"
              name="address"
              id="address"
              value={formData.address}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="btn-primary" style={{ alignSelf: "center" }}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
