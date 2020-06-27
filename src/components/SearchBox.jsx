import React from "react";

const SearchBox = ({ onSearchInputChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="Search Robos"
        onChange={onSearchInputChange}
      />
    </div>
  );
};

export default SearchBox;