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
    <section className="mx-auto text-gray-600 body-font max-w-5xl">
      <div className="px-5 py-24 flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Vite Authentication with Firebase
          </h1>
          <p className="leading-relaxed mt-4">
            Almost there... Login and see all the details how this great web
            application is made.
          </p>
          <p>
            You won't believe&nbsp;
            <a
              className="text-indigo-500"
              href="https://www.youtube.com/watch?v=372uglql1eA"
              target="_blank"
            >
              it's so damn easy
            </a>
            . (Yes it's a sad song, sorry).
          </p>
          <br />
          <p>
            Go back to the&nbsp;
            <Link className="text-indigo-500" to="/">
              homepage
            </Link>
            .
          </p>
        </div>

        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Login form
          </h2>
          <form className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email address
            </label>
            <input
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
            />
          </form>

          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              className="w-full bg-white rounded border border-gray-300
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                text-base outline-none text-gray-700 py-1 px-3 leading-8
                transition-colors duration-200 ease-in-out"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          <button
            onClick={onLogin}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Login
          </button>

          <p className="text-xs text-gray-500 mt-3 pl-3">
            Don't have an account yet?&nbsp;
            <Link className="text-indigo-500" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
