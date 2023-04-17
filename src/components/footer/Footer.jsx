import React from "react";
import Button from "../../UI/button/Button";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="newsletter">
        <h3>Stay updated on our moves round the board</h3>
        <h4>Subscribe to our newsletter</h4>
        <div className="input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Kindly enter your mail"
          />
          <Button text={"Subscribe"} />
        </div>
      </div>

      <div className="foot">
        <img src="./images/chesslogobig.png" alt="logo" />
        <div className="foot__link">
            <h3>About Us</h3>
            <h4>Team</h4>
            <h4>The Initiative</h4>
            <h4>Contact</h4>
            <h4>Youtube</h4>
        </div>
        <div className="foot__link">
            <h3>More</h3>
            <h4>Merchandise</h4>
            <h4>Donate</h4>
            <h4>News</h4>
            <h4>Volunteer</h4>
        </div>
        <div className="foot__link">
            <h3>Contact Us</h3>
            <h4>Facebook</h4>
            <h4>Instagram</h4>
            <h4>Twitter</h4>
            <h4>LinkedIn</h4>
        </div>
      </div>
      <small>Designed with ❤️ by @kemsdesigns</small>
      <small>Developed by Sekani</small>
    </footer>
  );
};

export default Footer;
