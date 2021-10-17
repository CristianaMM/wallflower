import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { wallsInfo } from "../../../utils";

export default function WallItem(props) {
  const wallName = "Copper Piping Duo";

  const wallDetails = wallsInfo.find((w) => w.name === wallName);

  return (
    <div className="cooperFrameDiv">
      <div className="container wallItem py-5">
        {wallDetails && (
          <>
            <h1 className="text-center pb-5">{wallDetails.name}</h1>
            <div className="row align-items-center text-center my-5">
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
      </div>
    </div>
  );
}
