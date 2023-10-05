import React from "react";
import { useState } from "react";

const SearchBox = ({ setSearchQuery }) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search movies"
      ></input>
    </div>
  );
};

export default SearchBox;
