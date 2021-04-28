import React from "react";

export default function Success(props) {
  const { handleReturn } = props;
  return (
    <div className="row">
      <h4 style={{ color: "rgb(59, 80, 63)" }}>
        <i className="bi bi-check-circle"></i> Thank you!
      </h4>
      <p style={{ color: "rgb(59, 80, 63)" }}>
        Your message has been successfully sent. We will contact you very soon!
      </p>
      <div className="col-12 text-center">
        <button className="btn" onClick={handleReturn}>
          return
        </button>
      </div>
    </div>
  );
}
