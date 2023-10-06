import React from "react";
import "../css/Footer.css";
import logo from "../images/logo3.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-name">
        <img src={logo} alt="Company Logo" className="footer-logo" />
        <p>ReelPeak</p>
      </div>

      <div className="footer-sm">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2023 ReelPeak. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
