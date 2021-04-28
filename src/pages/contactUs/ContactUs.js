import React, { useState } from "react";
import SucessMessage from "./components/Success";
import FailedMessage from "./components/Failure";
import Form from "./components/Form";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [inputErrors, setInputErrors] = useState([]);
  const [sucess, setSucess] = useState(false);
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
        .then(() => setSucess(true))
        .catch((error) => setFailure(true));
    }
  };

  const handleReturn = () => {
    setSucess(false);
    setFailure(false);
    setInputErrors([]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setMessage("");
  };

  return (
    <div className="formContainer container py-5">
      {!sucess && !failure && (
        <Form
          setFirstName={setFirstName}
          firstName={firstName}
          setLastName={setLastName}
          lastName={lastName}
          setEmail={setEmail}
          email={email}
          setPhone={setPhone}
          phone={phone}
          setLocation={setLocation}
          location={location}
          setMessage={setMessage}
          message={message}
          inputErrors={inputErrors}
          handleSubmit={handleSubmit}
        />
      )}
      {sucess && <SucessMessage handleReturn={handleReturn} />}
      {failure && <FailedMessage handleReturn={handleReturn} />}
    </div>
  );
}
