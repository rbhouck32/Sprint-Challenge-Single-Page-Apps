import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Search from "./SearchForm";
import styled from "styled-components";

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => setData(res.data.results))
      .catch(error => console.log(error));
  }, []);

  if (!data) return <h1 className="loading">Loading</h1>;

  const results = data.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <CardContainer>
        {results.map((character, index) => (
          <CharacterCard character={character} key={index} />
        ))}
      </CardContainer>
    </>
  );
}

const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
