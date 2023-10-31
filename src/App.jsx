import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Default from "./pages/Default.jsx";
import Errorpage from "./pages/Errorpage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Default />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
};

export default App;
