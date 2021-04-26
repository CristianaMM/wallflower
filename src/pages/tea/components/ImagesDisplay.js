import React, { useState } from "react";
import tea1 from "../../../assets/images/tea1.jpg";
import tea2 from "../../../assets/images/tea2.jpg";
import tea3 from "../../../assets/images/tea3.jpg";
import tea4 from "../../../assets/images/tea4.jpg";

export default function ImagesDisplay() {
  const [modalImage, setModalImage] = useState("");
  const teaImages = [tea1, tea2, tea3, tea4];

  return (
    <div className="displayImages">
      <div className="container text-center pt-5 pb-5">
        <h4>Available in various designs for all your loved ones!</h4>
        <div className="row mt-4">
          {teaImages.map((p, i) => {
            return (
              <div className="col-6 col-md-3" key={`tea-preview-${i}`}>
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setModalImage(p)}
                >
                  <img src={p} alt="" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content  text-center">
            <div className="row">
              <div className="col-12  p-0">
                <img className="fullSizePhoto" src={modalImage} alt="" />
                <button
                  type="button"
                  className=" modalButton btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
