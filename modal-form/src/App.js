import "./App.css";
import { useState, useRef } from "react";

export default function App() {
  const [formState, setFormState] = useState(false);
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const formRef = useRef(null);


  const formToggle = () => {
    setFormState(true);
  };

  const handleOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setFormState(false);
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(userName, emailAddress);

    // if (!emailAddress.includes("@")) {
    //   alert("Invalid email. Please check your email address.");
    // }

    if (!emailAddress.includes("@")) {
      alert("Invalid email");
      return;
    }

    if (phoneNumber.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    }

    const currentDate = new Date();
    const enteredDate = new Date(dateOfBirth);
    if (enteredDate > currentDate) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }
  };

  return (
    <div className={`App ${formState ? "background" : ""}`} onClick={handleOutsideClick}>
        <h1>User Details Modal</h1>
        <button type="submit" onClick={formToggle}>
          Open Form
        </button>
        {formState && (
          <div className="modal">
          <div className="modal-content" ref={formRef}>
            <form>
              <h2>Fill Details</h2>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={userName}
                autoComplete="off"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                required
              />
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={emailAddress}
                autoComplete="off"
                onChange={(e) => {
                  setEmailAddress(e.target.value);
                }}
                required
              />
              <label htmlFor="number">Phone Number:</label>
              <input
                type="number"
                id="phone"
                value={phoneNumber}
                autoComplete="off"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                required
              />
              <label htmlFor="date">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={dateOfBirth}
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
                required
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  className="submit-button"
                  style={{
                    width: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
            </div>
          </div>
        )}
      </div>
  );
}
