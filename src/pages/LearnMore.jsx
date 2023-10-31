import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const LearnMore = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <Header />
      <section className="mx-auto text-gray-600 body-font max-w-5xl">
        <div className="px-5 py-24 flex flex-wrap items-center">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Under construction...
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              When these pages are ready, you will find all the detailed
              information about how <br />
              this application is made with the different techniques.
            </p>
            <br />
            <p>
              Go back to the{" "}
              <a
                href="/home"
                className="text-indigo-500 inline-flex items-center"
              >
                previous
              </a>{" "}
              page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnMore;
