import React from "react";
import "./Footer.css";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FaTwitter className="icon" />
        <FiFacebook className="icon" />
        <IoLogoYoutube className="icon" />
        <FaInstagram className="icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li> Help Center</li>
        <li>Cookie Preferences</li>
        <li>Legal Notices</li>
        <li>Only on Netflix</li>
        <li>Corporate Information </li>
        <li>Ways to Watch </li>
        <li>Account </li>
        <li>Investor Relations </li>
        <li>Media Center</li>
        <li>Terms of Use</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">@ 1997-2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
