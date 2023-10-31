import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <main>
      <h1>Vite Authentication with Firebase</h1>
      <div className="heading">Something went wrong</div>

      <p className="plain-text">
        Please get <Link to="/">back</Link> on track...
      </p>
    </main>
  );
};

export default Errorpage;
