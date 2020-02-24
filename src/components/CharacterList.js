import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Search from "./SearchForm";

export default function CharacterList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => setData(res.data.results))
      .catch(error => console.log(error));
  }, []);

  if (!data) return <h1 className="loading">Loading</h1>;

  return (
    <section className="character-list">
      <Search data={data} />
      {data.map((character, index) => (
        <CharacterCard character={character} key={index} />
      ))}
    </section>
  );
}
