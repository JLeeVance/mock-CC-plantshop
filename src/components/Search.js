import React from "react";

function Search({
  searchValue,
  onSearchChange
}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchValue}
        placeholder="Type a name to search..."
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;
