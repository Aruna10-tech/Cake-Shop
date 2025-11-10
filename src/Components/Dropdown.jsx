import { useNavigate } from "react-router-dom";

export default function Dropdown({ show }) {
  const navigate = useNavigate();
  if (!show) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "60px",
        backgroundColor: "rgb(90, 4, 18)",
        color: "white",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        zIndex: 1,
        textAlign: "left",
        padding: "10px",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ padding: "10px 15px", borderBottom: "1px solid #ccc", cursor: "pointer" }} onClick={() => navigate("/browny")}>
          <span style={{ textDecoration: "none", fontWeight: "bold" }}>BROWNY</span>
        </li>
        <li style={{ padding: "10px 15px", borderBottom: "1px solid #ccc", cursor: "pointer" }} onClick={() => navigate("/redvelvet")}>
          <span style={{ textDecoration: "none", fontWeight: "bold" }}>RED VELVET</span>
        </li>
        <li style={{ padding: "10px 15px", cursor: "pointer" }} onClick={() => navigate("/honeycreamy")}>
          <span style={{ textDecoration: "none", fontWeight: "bold" }}>HONEY CREAMY</span>
        </li>
      </ul>
    </div>
  );
}
