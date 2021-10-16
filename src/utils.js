import elaina from "./assets/images/elaine.jpg";
import elaina2 from "./assets/images/babyWall.jpg";
import elaina3 from "./assets/images/event2.jpg";
import elaina4 from "./assets/images/whiteandpinkflowers.jpg";
import peterRabbit from "./assets/images/peterRabbitWall.jpg";
import jungle from "./assets/images/jungleWall.jpg";
import jungle2 from "./assets/images/jungleWall2.jpg";
import frame from "./assets/images/frame2.jpg";
import frame2 from "./assets/images/frame.jpg";
import frame3 from "./assets/images/cakeframe.jpg";
import autumnCooper from "./assets/images/autumnCakeframe.jpg";
import greenCooper from "./assets/images/GreenCooperFrame.jpg";

export const wallsInfo = [
  {
    name: "Elaina",
    mainPhoto: elaina,
    photos: [elaina, elaina2, elaina3, elaina4],
    text: `Our original wall "Elaina"! This light ivory wall is made up with a mix of ivory roses to create a simple but elegant
    backdrop. The beauty of this wall is that we can add colour, light,
    greenery and trickling ivy to suit any colour scheme or occasion.`,
    dimensions: "230cm W x 230cm H",
  },
  {
    name: "Artificial Grass Backdrop",
    mainPhoto: jungle,
    photos: [jungle, jungle2],
    text: `Our latest addition is the Artificial Grass Backdrop. This wall is
      SO versatile! It can be adapted to suit a wide range of events!!We
    can really dress it up or strip it right back for sports events /
    parties. Either way it makes an ideal photo opportunity to suit
    everyone.`,
    dimensions: "200cm W x 200cm H",
  },
  {
    name: "Copper Piping Duo",
    mainPhoto: frame,
    photos: [frame, frame2, frame3, autumnCooper, greenCooper],
    text: `Sometimes less is more!! Our Copper Piping Duo, creates a real centre
    piece talking point. Our frame comes with an understated
    garland and matching cake hoop. These look best when against a neutral
    background. We can add light, colour and extra greenery to suit your
    style.`,
    dimensions: "7ft H x 4ft W",
  },
  {
    name: "Peter Rabbit Party Package",
    mainPhoto: peterRabbit,
    photos: [peterRabbit],
    text: `Peter Rabbit Party Package! Who doesn't love this classic tale? Peter
    Rabbit vinyl backdrop, with stand and greenery. Artificial grass, picket
    fence and rustic box. Plush carrot bunting and all props show in photo.
    PLUS hire of the Peter Rabbit costume.`,
    dimensions: "Costume fits adults up to 6ft, shoe size 7-11",
  },
];

export const faqs = [
  {
    q: `How do I book?`,
    a: `Please <a href="/contact">message us</a>, don't forget to mention the event type, date, venue and
    time required to be set up by. We will check our availability and get back to you asap.`,
  },
  {
    q: `What areas do you cover?`,
    a: `We cover South, East and West Wales. All travel costs are included in your personal quote.`,
  },
  {
    q: `How much does it cost to hire your event decor?`,
    a: `Our prices are based on £100 for up to 4 hours or £150 all day and night.
  Please <a href="/contact">contact us</a> for a free quote, as prices do vary on packages.`,
  },
  {
    q: `Do I have to pay deposit?`,
    a: `A £25 non-refundable deposit is required to secure the date. The balance is due the week before the
  event takes place.`,
  },
  {
    q: `Is my deposit refundable?`,
    a: `No, your £25 deposit in non-refundable. If you need to cancel, the deposit can be transferred to any of our other services.`,
  },
  {
    q: `What if I need to cancel?`,
    a: `If you need to cancel your order you should <a href="/contact">contact us</a> in the first instance. The deposit can be transferred to any of our other services.`,
  },
];
