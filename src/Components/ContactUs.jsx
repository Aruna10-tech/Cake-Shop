
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="page-container">
      <h1 className="page-title" style={{textAlign:'center'}}>CONTACT US PAGE</h1>
      <div className="card" style={{ maxWidth: "600px", margin: "20px auto",padding:'90px' }}>
        <h2>Name: Tanya</h2>
        <h2>Contact No: 99909-67889</h2>
        <h2>Email: Tanya@gmail.com</h2>
      </div>

      <div className="footer">
        <h3>FOLLOW US ON</h3>
        <div className="footer-buttons">
          <Link to=" " className="btn-primary">INSTAGRAM</Link>
          <Link to=" " className="btn-primary">FACEBOOK</Link>
          <Link to=" " className="btn-primary">WHATSAPP</Link>
        </div>
      </div>
    </div>
  );
}
