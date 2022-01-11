import Link from "next/link";
import React from "react";
import styled from "styled-components";

// components
import { SearchBar } from "../SearchBar/SearchBar.component";

export const SmallNavigation = () => {
  return (
    <SmallNavigationContainer>
      <div className="navbar">
        <Link href="/">
          <a>
            <h1>Tech Guide Max</h1>
          </a>
        </Link>
        <SearchBar />
      </div>
    </SmallNavigationContainer>
  );
};

// styled components
const SmallNavigationContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  .navbar {
    width: 80%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
  }

  @media screen and (${(props) => props.theme.mobileSize}) {
    .navbar {
      width: 95%;
      flex-direction: column;
      h1 {
        margin-bottom: 1rem;
      }
    }
  }
`;
