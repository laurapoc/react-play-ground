import React from "react";
import {  useNavigate } from "react-router-dom";

const Private = () => {
    const navigate = useNavigate();

  const handleDeleteToken = () => {
    localStorage.removeItem("token");
    navigate("/",);;
  };

  return (
    <div>
      <h2>Private</h2>
      <div>
        <button onClick={handleDeleteToken}>Delete a token</button>
      </div>
    </div>
  );
};

export default Private;
