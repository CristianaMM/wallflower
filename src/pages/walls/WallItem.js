import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { wallsInfo } from "../../utils";

export default function WallItem(props) {
  const { wallName } = props.match.params;

  const wallDetails = wallsInfo.find((w) => w.name === wallName);

  return (
    <div className="container wallItem py-5">
      {wallDetails && (
        <>
          <h2 className="text-center">{wallDetails.name}</h2>
          <div className="row align-items-center text-center my-4">
            <div className="col-12 col-md-6">
              <Carousel
                className="wallsCarousel"
                showStatus={false}
                showThumbs
                infiniteLoop
                renderIndicator={() => null}
                renderThumbs={() =>
                  wallDetails.photos.map((p, i) => (
                    <img
                      className="thumb"
                      src={p}
                      alt="flowerwall photo"
                      key={`thumb-${wallDetails.name}-${i}`}
                    />
                  ))
                }
              >
                {wallDetails.photos.map((p, i) => {
                  return (
                    <div
                      key={`carouselIMG-${wallDetails.name}-${i}`}
                      className="itemCarouselImg"
                      style={{ backgroundImage: `url(${p})` }}
                    ></div>
                  );
                })}
              </Carousel>
            </div>
            <div className="col-12 col-md-5 offset-md-1 text-justify">
              <p>{wallDetails.text}</p>
              <p>
                <strong>Dimentions:</strong> {wallDetails.dimensions}
              </p>
            </div>
          </div>
        </>
      )}
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
