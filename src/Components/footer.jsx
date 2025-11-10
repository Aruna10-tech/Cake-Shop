import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <h3>FOLLOW US ON</h3>
      <div className="footer-buttons">
        <Link to=" " className="btn-primary">INSTAGRAM</Link>
        <Link to=" " className="btn-primary">FACEBOOK</Link>
        <Link to=" " className="btn-primary">WHATSAPP</Link>
      </div>
    </footer>
  );
}
