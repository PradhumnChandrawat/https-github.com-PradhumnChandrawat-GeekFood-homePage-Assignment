import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Logo"
          className="footer-logo"
        />
        <span className="footer-span"> logoipsum</span>
      </div>
      <div className="footer-brand-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Incidunt consequuntur amet culpa cum itaque neque.</p>
      </div>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#careers">Careers</a>
        <a href="#history">History</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#blog">Blog</a>
      </div>
      <div className="footer-social">
        <FaFacebook className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaGithub className="social-icon" />
        <FaGlobe className="social-icon" />
      </div>
    </footer>
  );
}

export default Footer;
