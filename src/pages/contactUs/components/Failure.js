import React from "react";

export default function Failure(props) {
  const { handleReturn } = props;
  return (
    <div className="row">
      <h4 style={{ color: "rgb(126, 76, 63)" }}>
        <i class="bi bi-x-circle"></i>
      </h4>
      <p style={{ color: "rgb(126, 76, 63)" }}>
        Failed to send your message! Please try again.
      </p>
      <div className="col-12 text-center">
        <button className="btn" onClick={handleReturn}>
          return
        </button>
      </div>
    </div>
  );
}
