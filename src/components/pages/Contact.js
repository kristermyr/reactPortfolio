import React, { useState } from "react";
// export default function Contact() {
//   return (

//   );
// }
// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../../utils/helpers";

export function Contact() {
  // Create state variables for the fields in the Contact
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    }
  };

  const handleContactSubmit = (e) => {
    // Preventing the default behavior of the Contact submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");

    setEmail("");
  };

  return (
    <div className="containerContact">
      <Contact>
        <h3>Get in touch!</h3>
        <input
          type="text"
          value={userName}
          name="userName"
          onChange={handleInputChange}
          id="name"
          placeholder="Your Name"
          required
        ></input>
        <input
          type="text"
          value={email}
          name="email"
          onChange={handleInputChange}
          id="email"
          placeholder="Your Email"
          required
        ></input>
        <textarea
          type="text"
          id="message"
          rows="4"
          placeholder="Write your message"
          required
        ></textarea>
        <button type="submit" onClick={handleContactSubmit}>
          Send message
        </button>
      </Contact>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

