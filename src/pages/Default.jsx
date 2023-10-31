import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Default = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signup");
  }, []);
};

export default Default;
