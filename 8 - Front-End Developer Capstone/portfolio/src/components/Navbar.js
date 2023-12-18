import './Navbar.css';
import navbar_logo from '../assets/navbar_logo.png';

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="container navbar">
      <img src={ navbar_logo } alt="Little Lemon Restaurant Logo" />
      <ul className="navbar-ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;