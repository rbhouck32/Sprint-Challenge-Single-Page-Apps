import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  return (
    <CardDiv>
      <StyledH2>
        <span>{props.character.name}</span>
      </StyledH2>
      <StyledParagraph>SPECIES {props.character.species}</StyledParagraph>
      <StyledParagraph>STATUS: {props.character.status}</StyledParagraph>
      <StyledParagraph>GENDER: {props.character.gender}</StyledParagraph>
    </CardDiv>
  );
}

const StyledParagraph = styled.p`
  font-weight: bold;
  color: #057487;
`;

const CardDiv = styled.div`
  background-color: #b3f74d;
`;

const StyledH2 = styled.h2`
  color: #057487;
`;
