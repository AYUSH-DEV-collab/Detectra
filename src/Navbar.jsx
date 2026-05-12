import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>DETECTRA</h1>
      <ul>
        <li><NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/">HOME</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/features">FEATURES</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/about">ABOUT</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/how-it-works">HOW IT WORKS</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/contacts">CONTACTS</NavLink></li>
      </ul>
      <button className="analyze-btn"><Link to="/upload">ANALYZE NOW</Link></button>
    </nav>
  );
}
