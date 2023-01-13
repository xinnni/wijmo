import React, { useState } from "react";
import "./Navbar.scss";
import Button from "../Button/Button";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const navbarToggler = () => {
    setToggleNavbar(!toggleNavbar);
  };

  return (
    <div className={`navbar ${toggleNavbar === true} ? "active" : ""`}>
      <div className="col">
        <Logo />
        <div className="collapseble-button">
          {!toggleNavbar ? (
            <RxHamburgerMenu onClick={navbarToggler} />
          ) : (
            <RxCross2 onClick={navbarToggler} />
          )}
        </div>
      </div>
      <nav>
        <div className="links">
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>

            <li>
              <a href="#services">services</a>
            </li>

            <li>
              <a href="#testimonial">Testimonial</a>
            </li>

            <li>
              <a href="#pricing">pricing</a>
            </li>
            <li>
              <Button content="Contact" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
