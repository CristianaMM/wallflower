import React from "react";
import elaine from "../../assets/images/elaine.jpg";
import peterRabbit from "../../assets/images/peterRabbitWall.jpg";
import jungle from "../../assets/images/jungleWall.jpg";
import frame2 from "../../assets/images/frame2.jpg";

export default function Walls() {
  const flowerWalls = [
    { name: "Elaine", img: elaine },
    { name: "Artificial Grass Backdrop", img: jungle },
    { name: "Copper Piping Duo", img: frame2 },
    { name: "Peter Rabbit Party Package", img: peterRabbit },
  ];
  return (
    <div className="container walls  text-center  py-5">
      <h1>Our Walls</h1>

      <p>Check out our choice of walls below!</p>
      <p>
        We can create the perfect photo opportunity for your special occasion!
      </p>
      <div className="row justify-content-center">
        {flowerWalls.map((w, i) => {
          return (
            <div
              key={`wall-${i}`}
              className="wallCard col-12 col-sm-8 col-md-4 m-2 p-0"
              style={{ backgroundImage: `url(${w.img})` }}
            >
              <div className="cardText">
                <h5 className="text-center pt-1"> {w.name} </h5>
              </div>
            </div>
          );
        })}
      </div>

      {/*  <p>
        Our original wall "Elaina" This light ivory wall measures 2.3m x 2.3m,
        made up with a mix of ivory roses, to create a simple but elegant
        backdrop. The beauty of this wall, is that we can add colour, light,
        greenery and trickling ivy to suit any colour scheme or occasion.
        Afternoon or evening £100 All day hire £150
      </p>
      <p>
        Our latest addition is the artificial grass backdrop. The 2m x 2m wall
        is SO versatile. It can be adapted to suit a wide range of events!!We
        can really dress it up or strip it right back for sports events /
        parties. Either way it makes an ideal photo opportunity to suit
        everyone. This wall is £120 all day hire.
      </p>
      <p>
        Sometimes less is more!! Our copper piping duo, creates a real centre
        piece talking point. Our 7ft x 4ft frame comes with an understated
        garland and matching cake hoop. these look best when against a neutral
        background. We can add light, colour and extra greenery to suit your
        style. All day hire for both £150
      </p>
      <p>
        Peter Rabbit Party Package Who doesn't love this classic tale? *Peter
        Rabbit vinyl backdrop, with stand and greenery *Artificial grass, picket
        fence and rustic box *Plush carrot bunting and all props show in photo.
        PLUS hire of the Peter Rabbit costume ( Fits adults up to 6ft, shoe size
        7-11) All of this £99 for up to 3 hours hire
      </p> */}
    </div>
  );
}
