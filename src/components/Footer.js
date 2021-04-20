import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer text-center mb-0 p-3">
      <div className="mb-4">
        <a
          className="p-3"
          target="_blank"
          href="https://www.facebook.com/The-Wall-Flower-Company-104859147546096"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          className="p-3"
          target="_blank"
          href="https://www.instagram.com/the_wall_flower_co/"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>

      <Link className="p-2" to="/faqs">
        FAQ's
      </Link>
      <span>|</span>
      <Link className="p-2" to="/contact">
        Contact Us
      </Link>
      <p>© 2021 The Wall Flower Company</p>
    </div>
  );
}
