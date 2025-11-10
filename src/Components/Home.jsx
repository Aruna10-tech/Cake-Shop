
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import "../CSS/global.css";

export default function Home() {
  
  return (
    <>
    <div className="page-container-home" style={{display:"flex"}}>
      <div className="home-page" style={{ marginBottom: "70px"}}>
        <h1 style={{ color: "rgb(90, 4, 18)" }}>
          GLAD TO INVITE YOU!!! <br />
          Welcome to our shop! Taste new things and get a good experience
        </h1>

        <h1 style={{ color: "purple", marginTop: "30px" }}>LET'S START YOUR CRAVINGS HERE!!</h1>
        <div style={{ marginBottom: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
          <Link to="/Register" className="btn-secondary">SIGN UP</Link>
        </div>

      </div>
      <div className="carosel">
        <Carousel />
      </div>
      
    </div>
      
    </>
  );
}
