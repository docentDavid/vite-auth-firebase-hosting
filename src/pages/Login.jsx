import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        // console.log(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main>
      <h1>Vite Authentication with Firebase</h1>
      <div className="heading">Provide your login information</div>
      <form>
        <label htmlFor="email-address">
          <span>
            Email address <span className="required">*</span>
          </span>
        </label>
        <input
          className="input-field"
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">
          <span>
            Password <span className="required">*</span>
          </span>
        </label>
        <input
          className="input-field"
          id="password"
          name="password"
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={onLogin}>Login</button>
      </form>

      <p>
        No account yet? <Link to="/signup">Sign up</Link>
      </p>
    </main>
  );
};

export default Login;
