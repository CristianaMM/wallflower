import React, { useState } from "react";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    // TODO handle required fields
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name: firstName, email, message }),
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
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <input
                type="text"
                placeholder=" First Name*"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <input
                type="text"
                placeholder=" Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
            <div className="col-12 mb-3">
              <input
                type="email"
                placeholder=" Email*"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <input
                type="tel"
                placeholder=" Contact Number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>
            <div className="col-12 col-md-6 mb-3">
              <input
                type="text"
                placeholder=" Location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></input>
            </div>
            <div className="col-12 mb-3">
              <textarea
                type="text"
                placeholder=" Message*"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button className="btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
