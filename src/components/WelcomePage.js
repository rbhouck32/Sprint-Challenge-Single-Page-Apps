import React from "react";
import styled from "styled-components";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <StyledH1>Welcome to the ultimate fan site!</StyledH1>
        <StyledWrap>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </StyledWrap>
      </header>
    </section>
  );
}

const StyledH1 = styled.h1`
  color: #057487;
`;

const StyledWrap = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: #b3f74d;
  text-align: center;
`;
