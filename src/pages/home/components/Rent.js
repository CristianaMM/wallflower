import React from "react";
import { Link } from "react-router-dom";

export default function Rent() {
  return (
    <div className="row text-center p-5">
      <h4 style={{ color: `rgb(59, 80, 63)` }}>HOW TO RENT:</h4>
      <p>
        Please
        <Link to="/contact">
          <strong> SEND US A MESSAGE </strong>
        </Link>
        . Also please don't forget to mention the event type, date, venue and
        time required to be set up by.
      </p>
      <p>We will check our availability and get back to you asap.</p>
    </div>
  );
}
