import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul style={{listStyleType:'none'}}>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/company">Company</Link>
      </li>
      <li>
        <Link to="/candidate">Candidate</Link>
      </li>
      <li>
        <Link to="/login">Login / SignUp</Link>
      </li>
      <li>
        <Link to="/aboutus">About Us</Link>
      </li>
    </ul>
  );
};

export default NavBar;
