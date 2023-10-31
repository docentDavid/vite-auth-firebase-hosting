import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";
import { Link, useNavigate } from "react-router-dom";
import firebaseLogoBare from "../assets/firebase-logo-bare.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log("An error has occured");
      });
  };

  return (
    <header className="mx-auto text-gray-600 body-font max-w-5xl">
      <div className="container mx-auto flex justify-between flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            className="h-10 w-10"
            src={firebaseLogoBare}
            alt="Firebase logo"
          />
          <span className="ml-3 text-xl">My Vite Firebase Tailwind App</span>
        </Link>
        <button
          onClick={handleLogout}
          className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Log out
        </button>
      </div>
    </header>
  );
};

export default Header;
