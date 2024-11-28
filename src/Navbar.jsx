import React from "react";
import Logo from "./assets/logo2.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/Bestseller">Bestseller</Link>
        </li>
        <li>
          <Link to="/Testimonies">Testimonies</Link>
        </li>
        {/* <li>Men</li> */}
        {/* <li>Women</li> */}
        <li><Link to="/Contactus">Contact us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
