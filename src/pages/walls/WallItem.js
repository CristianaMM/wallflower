import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { wallsInfo } from "../../utils";

export default function WallItem(props) {
  const { wallName } = props.match.params;

  const wallDetails = wallsInfo.filter((w) => w.name === wallName);

  const wallDisplay = (
    <>
      <h2 className="text-center">{wallDetails[0].name}</h2>
      <div className="row align-items-center text-center my-4">
        <div className="col-12 col-md-6">
          <Carousel
            className="wallsCarousel"
            showThumbs
            infiniteLoop
            showArrows
            renderIndicator={() => null}
            renderThumbs={() =>
              wallDetails[0].photos.map((p) => (
                <img className="thumb" src={p} alt="" />
              ))
            }
          >
            {wallDetails[0].photos.map((p, i) => {
              return (
                <div
                  className="itemCarouselImg"
                  style={{ backgroundImage: `url(${p})` }}
                ></div>
              );
            })}
          </Carousel>
        </div>
        <div className="col-12 col-md-5 offset-md-1 text-justify">
          <p>{wallDetails[0].text}</p>
          <p>
            <strong>Dimentions:</strong> {wallDetails[0].dimensions}
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className="container wallItem py-5">
      <button className="btn">
        <Link to="/walls">
          <i className="bi bi-backspace"> Back</i>
        </Link>
      </button>
      {wallDetails && wallDisplay}
      <div className="row text-center">
        <h4 style={{ color: `rgb(59, 80, 63)` }}>HOW TO RENT OUR WALLS:</h4>
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
    </div>
  );
}
