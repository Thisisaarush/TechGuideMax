import React from "react";
import { useRouter } from "next/router";

// style
import { SearchContainer } from "./SearchBar.style";

export const SearchBar = () => {
  const router = useRouter();
  const inputFromUser = "";

  // handling the searched text
  const handleInputChange = (e) => {
    inputFromUser = e.target.value;
  };
  // handling search button
  const handleSearchItems = (e) => {
    e.preventDefault();
    inputFromUser !== "" ? router.push(`/search/${inputFromUser}`) : null;
  };

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="WHAT ARE YOU LOOKING FOR?"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSearchItems}>
        SEARCH
      </button>
    </SearchContainer>
  );
};
