import React from "react";

export default function CharacterCard(props) {
  console.log(props);
  return (
    <div className="card">
      <h2>
        This is <span>{props.character.name}</span>
      </h2>
      <p>They are {props.character.species}</p>
      <p>Their status is {props.character.status}</p>
      <p>Their gender is {props.character.gender}</p>
    </div>
  );
}
