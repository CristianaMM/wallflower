import React, { useState } from "react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(">>> here");
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

  return (
    <div className="formContainer container py-5">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="getInTouch">Get In Touch</h1>
        </div>
        <div className="col-12">
          <p>
            For enquiries or any further information about The Wall Flower
            Company please get in touch.
          </p>
        </div>
      </div>
      <form>
        <p>
          <label>
            Your Name:{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{" "}
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </p>
      </form>
      {/* <div className="row">
        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <input type="text" placeholder=" First Name*"></input>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <input type="text" placeholder=" Last Name"></input>
            </div>
            <div className="col-12 mb-3">
              <input type="email" placeholder=" Email*"></input>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <input type="tel" placeholder=" Contact Number"></input>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <input type="text" placeholder=" Location"></input>
            </div>
            <div className="col-12 mb-3">
              <textarea type="text" placeholder=" Message*"></textarea>
            </div>
            <div className="col-12 text-center">
              <button className="btn">Submit</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
