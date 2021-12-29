import React from "react";

// style
import { SearchContainer } from "./SearchBar.style";

export const SearchBar = () => {
  return (
    <SearchContainer>
      <input type="text" placeholder="WHAT ARE YOU LOOKING FOR?" />
      <button type="submit" onClick={(e) => e.preventDefault()}>
        SEARCH
      </button>
    </SearchContainer>
  );
};
