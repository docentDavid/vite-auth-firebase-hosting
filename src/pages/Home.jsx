import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        // console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log("An error has occured");
      });
  };

  return (
    <main>
      <h1>Vite Authentication with Firebase</h1>
      <div className="heading">Welcome on the homepage</div>

      <p className="plain-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum quaerat
        laborum maiores dolorem. Hic reiciendis veritatis blanditiis,
        exercitationem excepturi minus, nostrum distinctio libero possimus
        quaerat iusto? Quaerat vero quibusdam autem?
      </p>

      <button onClick={handleLogout}>Logout</button>
    </main>
  );
};

export default Home;
