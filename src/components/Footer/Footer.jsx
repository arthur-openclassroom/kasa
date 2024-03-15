import React from "react";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer-component">
      <Logo height={40} fill={"#FFF"} />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
    );
};

export default Footer;