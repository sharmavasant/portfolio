import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./styles/Header.styles";

const Header = () => (
  <Nav>
    <h1>Vasant Kumar Sharma</h1>
    <div>
      <Link to="/portfolio">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/education">Education</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </Nav>
);

export default Header;
