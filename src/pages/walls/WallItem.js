import React from "react";
import { Carousel } from "react-responsive-carousel";
import elaina from "../../assets/images/elaine.jpg";
import elaina2 from "../../assets/images/babyWall.jpg";
import elaina3 from "../../assets/images/event2.jpg";
import elaina4 from "../../assets/images/whiteandpinkflowers.jpg";
import peterRabbit from "../../assets/images/peterRabbitWall.jpg";
import jungle from "../../assets/images/jungleWall.jpg";
import jungle2 from "../../assets/images/jungleWall2.jpg";
import frame from "../../assets/images/frame2.jpg";
import frame2 from "../../assets/images/frame.jpg";
import frame3 from "../../assets/images/cakeframe.jpg";

export default function WallItem() {
  const wallsInfo = [
    {
      name: "Elaina",
      photos: [elaina, elaina2, elaina3, elaina4],
      text: `Our original wall "Elaina" This light ivory wall measures 2.3m x 2.3m,
    made up with a mix of ivory roses, to create a simple but elegant
    backdrop. The beauty of this wall, is that we can add colour, light,
    greenery and trickling ivy to suit any colour scheme or occasion.`,
    },
    {
      name: "Copper Piping Duo",
      photos: [frame, frame2, frame3],
      text: `Sometimes less is more!! Our copper piping duo, creates a real centre
    piece talking point. Our 7ft x 4ft frame comes with an understated
    garland and matching cake hoop. these look best when against a neutral
    background. We can add light, colour and extra greenery to suit your
    style.`,
    },
    {
      name: "Peter Rabbit Party Package",
      photos: [peterRabbit],
      text: `Peter Rabbit Party Package Who doesn't love this classic tale? *Peter
    Rabbit vinyl backdrop, with stand and greenery *Artificial grass, picket
    fence and rustic box *Plush carrot bunting and all props show in photo.
    PLUS hire of the Peter Rabbit costume ( Fits adults up to 6ft, shoe size
    7-11)`,
    },
    {
      name: "Artificial Grass Backdrop",
      photos: [jungle, jungle2],
      text: `Our latest addition is the artificial grass backdrop. The 2m x 2m wall
    is SO versatile. It can be adapted to suit a wide range of events!!We
    can really dress it up or strip it right back for sports events /
    parties. Either way it makes an ideal photo opportunity to suit
    everyone.`,
    },
  ];
  return (
    <div className="container wallItem text-center  py-5">
      <h1>Artificial Grass Backdrop</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <Carousel showThumbs={true}>
            {[jungle, jungle2].map((p, i) => {
              return (
                <div className="carouselImg col-12">
                  <img src={p} alt="" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="col-12 col-md-6"></div>
      </div>
    </div>
  );
}
