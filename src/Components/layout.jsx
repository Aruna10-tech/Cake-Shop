
import logo from "../assets/logo.png";
import { FaUser, FaHome, FaUserEdit, FaImage, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "../CSS/layout.css"

export default function Layout({ showDropdown, setShowDropdown }) {
  return (
  <>
   <div className="layout-container">
  <div className="nav-header">
    <img src={logo} alt="Logo" className="logo" />
    <div className="styled">
      <span className="first">C</span>
      <span className="second">A</span>
      <span className="rest">K</span>
      <span className="third">E</span>
      <span className="zone">
      <span className="pink">Z</span>
      <span className="blue">O</span>
      <span className="pink">N</span>
      <span className="blue">E</span>
      </span>
    </div>
  </div>

  <nav className="nav-links">
    <Link to="/" className="nav-button home">
      <FaHome /> HOME
    </Link>
    <Link to="/aboutus" className="nav-button about">
      <FaUser /> ABOUT US
    </Link>
    
    <button
      onClick={() => setShowDropdown(!showDropdown)}
      className="nav-button gallery"
      aria-expanded={showDropdown}
      aria-controls="dropdown-menu"
    >
      <FaImage /> GALLERY 
  <Dropdown show={showDropdown} />
    </button>
    <Link to="/contactus" className="nav-button contact">
      <FaPhone /> CONTACT US
    </Link>
    <Link to="/Register" className="nav-button register">
      <FaUserEdit /> REGISTER
    </Link>
  </nav>

</div>
<div>
  <hr />
</div>
  </>
  );
}