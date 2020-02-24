import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <header className="ui centered">
      <StyledH1>Rick &amp; Morty Fan Page</StyledH1>
      <div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/character-list">Character List</Link>
        </div>
        {/* <div>
          <Link to="/contact">Contact</Link>
        </div> */}
      </div>
    </header>
  );
}

const StyledH1 = styled.h1`
  color: #057487;
`;
