import React from "react";

const Search = ({ filter, changeHandler }) => {
  return (
    <div>
      <label>
        Find Countries:{" "}
        <input type="text" value={filter} onChange={changeHandler} />
      </label>
    </div>
  );
};

export default Search;
