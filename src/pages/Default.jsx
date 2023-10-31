import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../../public/firebase-logo.svg";

const Default = () => {
  return (
    <section className="mx-auto text-gray-600 body-font max-w-5xl">
      <div className="px-5 py-24 flex flex-wrap items-center">
        <div className="md:w-3/5 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Vite with Firebase hosting and authentication
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            eaque repellendus ratione rerum assumenda consequuntur molestiae
            suscipit blanditiis nihil accusamus, officiis optio atque excepturi
            doloremque quibusdam beatae iste?
          </p>
          <div className="flex justify-center">
            <Link to="/login">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Signup
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-2/5">
          <img
            className="object-cover object-center rounded w-80"
            alt="hero"
            src={heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Default;
