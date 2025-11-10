import { useState } from "react";
 import './App.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import Layout from "./Components/layout";
import Browny from "./Components/Browny";
import Redvelvet from"./Components/redvelvet"
import Honeycreamy from "./Components/honeycreamy"
import Submit from "./Components/Submit";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <BrowserRouter>
      <Layout showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
      <Routes>
        <Route path="/honeycreamy" element={<Honeycreamy/>}/>
          <Route path="/redvelvet" element={<Redvelvet/>}/>
        <Route path="/browny" element={<Browny/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Submit" element={<Submit />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
