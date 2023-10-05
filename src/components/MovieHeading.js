import React from "react";
import logo from "../images/logo3.png";

const MovieHeading = ({ heading }) => {
  return (
    <div className="col">
      <h1>
        <img src={logo} alt="logo3" className="logo"></img>
        {heading}
      </h1>
    </div>
  );
};

export default MovieHeading;
