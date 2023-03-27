import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { validateEmail } from "../../utils/helpers";
// Here we import a helper function that will check if the email is valid
const style = {
  msg: {
    color: "red"
  },
};

function Contact() {
  const [formState, setFormState] = useState({
    name: "", email: "", message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <Container>
      <div className="container">
        
        <form onSubmit={handleSubmit}>
        <h3>Get in touch!</h3>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
            defaultValue={name}
            onBlur={handleChange}
          ></input>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onBlur={handleChange}
          ></input>{" "}
          <br />
          <textarea
            type="text"
            name="message"
            rows="4"
            placeholder="Write your message"
            required
            defaultValue={message}
            onBlur={handleChange}
          ></textarea>
           
        </form>
        <button type="submit" className="btn btn-primary btncontact">Send message</button>
        {errorMessage && (
          <div>
            <p className="error-text"style={style.msg}>{errorMessage}</p>
          </div>
        )}
       
      </div>
    </Container>
  );
}

export default Contact;
