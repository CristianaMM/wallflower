import React from "react";
import teaLogo from "../../../assets/images/YouMeTeaLogo.jpg";

export default function FirstTeaSection() {
  return (
    <>
      <div className="col-12 col-sm-8 col-md-6 col-lg-4 py-4">
        <img src={teaLogo} alt="tea letterbox" />
      </div>
      <div className="col-12 py-4">
        <h5>Give the gift off a cuppa</h5>
        <p>
          Do you know someone who could do with a little tea break? Then give
          them no excuse and send them a tea box in the post.
        </p>
        <p>
          Guaranteed to brighten up their day and encourage them to take a well
          deserved break.
        </p>
      </div>
    </>
  );
}
