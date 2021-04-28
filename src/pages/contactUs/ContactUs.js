import React, { useState } from "react";
import FormMessage from "./components/FormSubmitMessage";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [inputErrors, setInputErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];
    if (!firstName) {
      errors.push("firstName");
    }
    if (!email) {
      errors.push("email");
    }
    if (email && !validateEmail(email)) {
      errors.push("invalidEmail");
      errors.push("email");
    }
    if (!message) {
      errors.push("message");
    }

    if (errors.length > 0) {
      setInputErrors(errors);
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          firstName,
          lastName,
          email,
          phone,
          location,
          message,
        }),
      })
        .then(() => setSuccess(true))
        .catch((error) => setFailure(true));
    }
  };

  const handleReturn = () => {
    setSuccess(false);
    setFailure(false);
    setInputErrors([]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setMessage("");
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className="formContainer container py-5">
      {!success && !failure && (
        <>
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
                    style={
                      inputErrors.includes("firstName")
                        ? { borderColor: "red" }
                        : null
                    }
                    type="text"
                    placeholder="First Name*"
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
                  {inputErrors.includes("invalidEmail") && (
                    <p
                      className="mb-0"
                      style={{ color: "red", fontSize: "12px" }}
                    >
                      Invalid email
                    </p>
                  )}
                  <input
                    style={
                      inputErrors.includes("email")
                        ? { borderColor: "red" }
                        : null
                    }
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
                    style={
                      inputErrors.includes("message")
                        ? { borderColor: "red" }
                        : null
                    }
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
        </>
      )}
      {success && (
        <FormMessage
          handleReturn={handleReturn}
          icon={"bi bi-check-circle"}
          bigMessage={"Thank you!"}
          smallMessage={
            "Your message has been successfully sent. We will contact you very soon!"
          }
          color={"rgb(59, 80, 63)"}
        />
      )}
      {failure && (
        <FormMessage
          handleReturn={handleReturn}
          icon={"bi bi-x-circle"}
          bigMessage={""}
          smallMessage={"Failed to send your message! Please try again."}
          color={"rgb(126, 76, 63)"}
        />
      )}
    </div>
  );
}
