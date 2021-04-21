import React, { useState } from "react";
import titlelogo from "../assets/images/titlelogo.jpg";
import flowerlogo from "../assets/images/justflowerlogo.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "Walls", link: "/walls" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <div className="navBarDiv text-center pt-3">
      <div className="container">
        <div className="row justify-content-center">
          <img
            className="flowerLogo col-12"
            src={flowerlogo}
            alt="wall flower logo"
          />
        </div>
        <div className="row justify-content-center">
          <img
            className="titleLogo col-12"
            src={titlelogo}
            alt="wall flower logo"
          />
        </div>
        <ul id="mainMenu" className="p-0">
          {links.map((l, i) => {
            return (
              <li className="d-inline-block p-3" key={`main-menu-${i}`}>
                <NavLink to={l.link} exact>
                  {l.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        id="menuToggle"
        className={open ? "active" : ""}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={open ? "p-0 active" : "p-0"} id="menu">
        {links.map((l, i) => {
          return (
            <li
              className="d-block p-3"
              onClick={() => setOpen(false)}
              key={`mobile-menu-${i}`}
            >
              <NavLink to={l.link} exact>
                {l.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
