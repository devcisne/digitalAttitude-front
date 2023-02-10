import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnHomeButton = () => {
  const navigate = useNavigate();

  const returnHome = () => {
    console.log("returning Home");
    navigate("/");
  };
  return (
    <button
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg m-5"
      onClick={returnHome}
    >
      Back
    </button>
  );
};

export default ReturnHomeButton;
