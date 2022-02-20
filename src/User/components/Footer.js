import React from "react";
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/instagram.png";
import Twitter from "../../images/twitter.png";
const Footer = () => {
  return (
    <div id="footer_wrap">
      <div id="social_icons">
        <a
          href="https://www.facebook.com/Ahmedsmrt"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={Facebook} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/a.g.sudani/?hl=en"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
        <a
          href="https://twitter.com/ahmedsmrt"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={Twitter} alt="Twitter" />
        </a>
      </div>
      <p>© 2022 by Sabr Traveler | Terms of Use | Privacy Policy</p>
    </div>
  );
};

export default Footer;
