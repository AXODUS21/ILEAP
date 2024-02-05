import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.js";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUpEmail = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
        navigate("/home");
      })
      .catch((err) => {
        alert(err)
      });
      
  };

  return (
    <>
    <h1>Sign Up</h1>
      <form onSubmit={signUpEmail}>
        <div className="email-log-in-container">
          <label>Email:</label>
          <input
            type="text"
            className="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password:</label>
          <input
            type="password"
            className="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button>Sign Up</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
