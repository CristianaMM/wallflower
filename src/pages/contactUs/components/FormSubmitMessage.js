import React from "react";

export default function Success(props) {
  const { handleReturn, icon, smallMessage, bigMessage, color } = props;
  return (
    <div className="row">
      <h4 style={{ color: color }}>
        <i className={icon}></i> {bigMessage}
      </h4>
      <p style={{ color: color }}>{smallMessage}</p>
      <div className="col-12 text-center">
        <button className="btn" onClick={handleReturn}>
          return
        </button>
      </div>
    </div>
  );
}
