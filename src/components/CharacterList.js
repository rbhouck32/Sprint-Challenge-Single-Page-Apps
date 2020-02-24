import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => setData(res.data.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="character-list">
      {data.map((character, index) => (
        <CharacterCard character={character} key={index} />
      ))}
    </section>
  );
}
