import React from "react";

// style
import { AuthorWithDateContainer } from "./AuthorWithDate.style";

export const AuthorWithDate = ({ author, date }) => {
  return (
    <AuthorWithDateContainer>
      <span className="author-container">
        <p>by</p>
        <p className="author">{author}</p>
      </span>
      <span>
        <p className="date">{date}</p>
      </span>
    </AuthorWithDateContainer>
  );
};
