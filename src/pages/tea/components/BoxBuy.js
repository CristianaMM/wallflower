import React from "react";
import etsy from "../../../assets/images/etsy.png";
import letter from "../../../assets/images/letter.jpg";
import { Link } from "react-router-dom";

export default function BoxBuy() {
  return (
    <div id="boxBuy" className="container my-5">
      <div className="row text-center justify-content-center p-3">
        <div className="col-8 col-md-3">
          <div className="buyCard p-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.etsy.com/shop/ThewallflowercoGifts?ref=simple-shop-header-name&listing_id=1004311771"
            >
              <img src={etsy} alt="" />
              <h3 className="pt-3">Buy Now!</h3>
            </a>
          </div>
        </div>
        <div className="col-8 col-md-3 pt-5 pt-md-0">
          <div className="buyCard p-3">
            <Link className="p-2" to="/contact">
              <img src={letter} alt="" />
              <h3 className="pt-3">Contact us!</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
