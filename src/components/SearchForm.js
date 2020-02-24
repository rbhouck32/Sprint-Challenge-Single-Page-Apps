

import React, { useState, useEffect } from "react";

const Search = props => {
  // console.log(":)", props);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = props.data.filter(
      character =>
        character.name.toLowerCase().search(searchTerm.toLowerCase()) == false
    );
    // const results = props.data.filter(
    //   character => character.name.toLowerCase() == searchTerm.toLowerCase()
    // );
    setSearchResults(results);
    console.log(searchResults);
  }, [searchTerm]);

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   props.addNewMember(member);
  //   setMember({ name: "", email: "", role: "" });
  // };

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />

        <button>Submit!</button>
      </form>
      <div className="search-card">
        {searchResults.map((character, index) => (
          <p key={index}>{character.name}</p>
        ))}
      </div>
    </section>
  );
};

export default Search;
