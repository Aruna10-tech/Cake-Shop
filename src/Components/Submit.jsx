import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submit } from "../UserReducer";
import { useDispatch } from "react-redux";

export default function Submit() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    dob: "",
    shape: ""
  });
  const dispatch = useDispatch();

  // console.log(dispatch)

  const handleChange = (e) => {
    e.preventDefault();
     setFormData({ ...formData, [e.target.name]: e.target.value });


  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(submit({ ...formData, message: msg }));
    navigate("/aboutus")
    
  };

  return (
    <div className="page-container">
      <h1 className="page-title">CUSTOMER FORM</h1>
      <div className="form-container" style={{ backgroundColor: "#1b5ba8ff", color: "white", maxWidth: "1100px" }}>
        <form>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div className="form-group">
              <label htmlFor="customerName">CUSTOMER NAME</label>
              <input
                type="text"
                name="customerName"
                id="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="form-input"
                style={{ border: "2px solid purple" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">PHONE NUMBER</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="form-input"
                style={{ border: "2px solid purple" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">DATE OF BIRTH</label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                className="form-input"
                style={{ border: "2px solid purple" }}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">MESSAGES ON THE CAKE</label>
            <textarea
              name="message"
              id="message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="form-input"
              style={{
                width: "100%",
                height: "100px",
                border: "2px solid purple",
                resize: "vertical"
              }}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="shape">CAKE SHAPE</label>
            <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
              <label>
                <input type="radio" name="shape" value="circle" onChange={handleChange} />
                CIRCLE
              </label>
              <label>
                <input type="radio" name="shape" value="heart" onChange={handleChange} />
                HEART
              </label>
              <label>
                <input type="radio" name="shape" value="square" onChange={handleChange} />
                SQUARE
              </label>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={handleClick}
              className="btn-primary"
              style={{ width: "150px" }}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
