import React from "react";
import "./Search.module.css";

const Search = ({ onClick, value }) => {
  return (
    <div>
      <p>Search restaurants by cuisines</p>
      <input
        type="text"
        value={value}
        name="cuisine"
        onChange={(e) => onClick(e)}
        placeholder="Search by cuisine"
      />
    </div>
  );
};

export default Search;
