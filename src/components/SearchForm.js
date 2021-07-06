import React, { useState, useEffect } from "react";

const Search = props => {
  const handleChange = event => {
    props.setSearchQuery(event.target.value);
  };

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={props.searchQuery}
          onChange={handleChange}
        />
      </form>
    </section>
  );
};

export default Search;
