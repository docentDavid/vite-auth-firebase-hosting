import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main>
      <h1>Vite Authentication with Firebase</h1>
      <div className="heading">Provide your signup information</div>
      <form>
        <label htmlFor="email-address">
          <span>
            Email address <span className="required">*</span>
          </span>
        </label>
        <input
          className="input-field"
          type="email"
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email address"
        />

        <label htmlFor="password">
          <span>
            Password <span className="required">*</span>
          </span>
        </label>
        <input
          className="input-field"
          type="password"
          label="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />

        <button onClick={onSubmit}>Sign up</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </main>
  );
};

export default Signup;
