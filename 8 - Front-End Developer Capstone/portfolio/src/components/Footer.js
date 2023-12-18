import './Footer.css';
import footer_logo from '../assets/footer_logo.png';

import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <img src={ footer_logo } alt="Little Lemon Restaurant Logo" className="footer-logo"/>
        <nav className="footer-nav">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <nav className="footer-nav">
          <h4>Contact Us</h4>
          <ul>
            <li><Link to="/">Address</Link></li>
            <li><Link to="/">Phone Number</Link></li>
            <li><Link to="/">Email</Link></li>
          </ul>
        </nav>
        <nav className="footer-nav">
          <h4>Social Media Links</h4>
          <ul>
            <li><Link to="https://meta.com">Facebook</Link></li>
            <li><Link to="https://twitter.com">Instagram</Link></li>
            <li><Link to="https://youtube.com">Youtube</Link></li>
            <li><Link to="https://twitter.com">Twitter</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;